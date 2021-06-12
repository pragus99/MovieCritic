import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./header/Header";
import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createStackNavigator();

export default function Navigation({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#c42424",
          height: 70,
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="MovieCritic" />
          ),
        }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
