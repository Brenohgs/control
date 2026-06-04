import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function EntidadesScreen(){
return(
   <SafeAreaView style={StyleSheet.safeArea}>
    <ScrollView
    contentContainerStyle={StyleSheet.container}
    showsVerticalScrollIndicador={false}
    >
        <Text style={StyleSheet.title}>Cadastrar Entidade</Text>

        <TextInput
        placeholder="Nome"
        style={StyleSheet.input}
        />

        <TextInput
        placeholder="CEP"
        keyboardType="numeric"
        style={StyleSheet.input}
        />

        <TextInput
        placeholder="Endereço"
        style={StyleSheet.input}
        />

        <TextInput
        placeholder="Número"
        keyboardType="numeric"
        style={StyleSheet.input}
        />

        <TextInput
        placeholder="Bairro"
        style={StyleSheet.input}
        />

        <TextInput
        placeholder="Cidade"
        style={StyleSheet.input}
        />

        <TextInput
        placeholder="Estado"
        style={styles.input}
        />

        <TextInput
        placeholder="Telefone"
        keyboardType="phone-pad"
        style={StyleSheet.input}
        />

        <TextInput
        placeholder="Observação"
        multiline
        style={[StyleSheet.input, StyleSheet.textArea]}
        />

        <TouchableOpacity style={StyleSheet.button}>
            <Text style={StyleSheet.buttonText}>Salvar</Text>
        </TouchableOpacity>
        </ScrollView>
   </SafeAreaView>
);
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor:"#fff"
    },
    container:{
        padding:20,
        paddingBottom: 80
    },
    title:{
        fontSize: 24,
        borderColor: "bold",
        marginBottom: 20,
        textAlign: "center"
    },
    input:{
        borderWidth: 1,
        borderColor: "#ccc"
        borderRadius: 8,
        padding: 12,
        marginBottom: 15
    },
    button:{
        backgroundColor: "#1E88E5",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10
    },
    buttonText:{
        color: "#fff",
        fontWeight:"bold"
    }
)};

