import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomeNavigator";
import Contact from "./ContactNavigator";
import About from "./AboutNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "#fff",
        }}
        drawerStyle={{
          backgroundColor: "#333",
          width: 180,
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
