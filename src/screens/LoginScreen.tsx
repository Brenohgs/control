import {View,Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export default function LoginScreen({navigation}: any){
    return(
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.title}>Entre e encontre suas receitas</Text>
                <TextInput
                placeholder="E-mail"
                style={styles.input}/>

                <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.input} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.link}>
                        Não tem conta ? criar conta
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
            style={styles.aboutButton}
            onPress={() => navigation.navigate("Sobre")}>
                <Text style={styles.aboutText}>
                    Sobre o aplicativo
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2f5ed',
        padding: 20
    },

    center: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize:32,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center",
        color: "#1c5e42"
    },

    input: {
        borderWidth: 1,
        borderColor: "#1c5e42",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    },

    button: {
        backgroundColor: "#1c4e42",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },

    buttonText:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 25
    },

    link: {
        marginTop: 15,
        textAlign: "center",
        color: "#1E88E5",
    },

    aboutButton:{
        alignItems: "center",
        marginBottom: 20,
    },

    aboutText:{
        color: "#999",
        fontSize: 14,
    },
})