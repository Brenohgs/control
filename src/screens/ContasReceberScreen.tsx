import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

import { maskData, maskValor } from "../util/mask";

export default function ContasReceberScreen() { navigation }: any) {

    const [data, setData] = useState("");
    const [valor, setValor] = useState("");
    const [observação, setObservação] = useState("");
    const [entidade, setEntidade] = useState("");

    const entidades = [
        {id: 1, nome: "Cliente A"},
        {id: 2, nome: "Cliente B"},
        {id: 3, nome: "Cliente C"}
    ];
}
