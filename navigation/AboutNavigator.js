import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./header/Header";
import About from "../screens/About";

const Stack = createStackNavigator();

export default function NavigationAbout({ navigation }) {
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
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header navigation={navigation} title="About" />,
        }}
      />
    </Stack.Navigator>
  );
}
