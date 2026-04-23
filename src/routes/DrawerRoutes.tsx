import React from "react";
import{
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

import{
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import EntidadesScreen from "../screens/EntidadeScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props: any) {
  const user = {
    nome: "João Silva",
    foto: "https://i.pravatar.cc/100"
  };

  return(
    <View style={styles.container}>
      
      <DrawerContentScrollView(...props)>
        
        <View style={StyleSheet.header}>
         
          <Image
          source={{uri: user.foto}}
          style={StyleSheet.avatar}/>
          <Text style={StyleSheet.name}>
            {user.name}

          </Text>

        <DrawerItemList {... props}/>
        </DrawerContentScrollView>

        <View style={StyleSheet.footer}>
          
          <TouchableOpacity
            style={StyleSheet.logoutButton}
            onPress= {() => console.log("Logout")}>
              
              <Ionicons name="log-out-outline" size={22} color: #fff/>
              
              <Text style= {StyleSheet.logoutText}>
                Deslogar
              </Text>

            </TouchableOpacity>
        </View>
    </View>
  )
}

export default function DrawerRouter( ){
  return (
    <Drawer.Navigator
        drawerContent={(props)} => <CustomDrawerContent {...props}/>}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1E88ES"
          },
    headerTintColor: "#fff",
    drawerActiveTintColor: "#1E88ES"
        }}>

        <Drawer.Screen>
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcom: ({color, size}) => (
              <Ionicons name="home-outline" size={size} color= {color}/>
            )
          }}
          <Drawer.Screen>
          name="Entidade"
          component={EntidadesScreen}
          options={{
            drawerIcom: ({color, size}) => (
              <Ionicons name="entidade-outline" size={size} color= {color}/>
            )
          }}
          <Drawer.Screen>
          name="Contas a Pagar"
          component={ContasPagarScreen}
          options={{
            drawerIcom: ({color, size}) => (
              <Ionicons name="ContasPagar-outline" size={size} color= {color}/>
            )
          }}
}