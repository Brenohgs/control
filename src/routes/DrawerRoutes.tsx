import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import EntidadeScreen from "../screens/ReceitasCarneVermelhaScreen";
import ContasPagarScreen from "../screens/ReceitasFrangoScreen";
import ContasReceberScreen from "../screens/ReceitasPeixeScreen";
import ReceitasCarneVermelhaScreen from "../screens/ReceitasCarneVermelhaScreen";
import ReceitasFrangoScreen from "../screens/ReceitasFrangoScreen";
import ReceitasPeixeScreen from "../screens/ReceitasPeixeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Receitas Carne Vermelha" component={ReceitasCarneVermelhaScreen} />
            <Drawer.Screen name="Receitas Frango" component={ReceitasFrangoScreen} />
            <Drawer.Screen name="Receitas Peixe" component={ReceitasPeixeScreen} />
        </Drawer.Navigator>
    );
}