import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import EntidadeScreen from "../screens/EntidadeScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props: any) {
  const user = {
    nome: "João Silva",
    foto: "https://i.pravatar.cc/100"
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
            source={{ uri: user.foto }}
            style={styles.avatar}
          />

          <Text style={styles.name}>
            {user.nome}
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log("Logout")}
        >
          <Ionicons name="log-out-outline" size={22} color="#fff" />
          <Text style={styles.logoutText}>
            Deslogar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E88E5"
        },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#1E88E5"
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{

          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Entidade"
        component={EntidadeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Contas a Receber"
        component={ContasReceberScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Contas a Pagar"
        component={ContasPagarScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 25,
    backgroundColor: "#1E88E5",
    alignItems: "center"

  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  footer: {
    padding: 15,
    paddingBottom: 35,
    borderTopWidth: 1,
    borderColor: "#eee"
  },
  logoutButton: {
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});