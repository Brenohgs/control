import {View,Text} from "react-native";

export default function HomeScreen(){
    return(
        <View style={{ backgroundColor: "#f2ffef"}}>
            <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center", marginVertical: 20, color:"rgb(24, 71, 45)" }}>
                BEM VINDO AO SEU APLICATIVO DE RECEITAS FAVORITO
            </Text>
      
        
            <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 10, color:"rgb(26, 105, 60)" }}>
                Receitas favoritas:
            </Text>


     </View>
    )
}