import {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function RegisterScreen({ navigation }: any) {

    const [image, setImage] = useState<string | null>(null);
    
    async function pickImage() {

        const permission = await
        ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
            alert("Permissão necessária para acessar a galeria.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>
            <TouchableOpacity
            style={styles.imageContainer}
            onPress={pickImage}>

                {image ? (
                    <image
                    source={{ uri: image }}
                    style={styles.avatar} />
                ) : (

                    <Text style={styles.ImageText}>
                        Selecionar foto
                    </Text>
                
                )}
                </TouchableOpacity>

                <TextInput
                placeholder="Nome"
                style={styles.input}/>

                <TextInput
                placeholder="E-mail"
                style={styles.input}/>

                <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.input}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                        <Text style={styles.link}>
                            Voltar para o Login
                        </Text>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor:"#fff"
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center"
    },

    imageContainer: {
        alignSelf: "center",
        marginBottom: 20
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60
    },

    imageText: {
        color: "#1E88E5"
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15
    },

    button: {
        backgroundColor: "#1E88E5",
        padding: 15,
        borderRadius: 8,
        alignItems: "center"
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },

    link: {
        marginTop: 20,
        textAlign: "center",
        color: "#1E88E5"
    }
});