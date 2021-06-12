import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./header/Header";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

export default function NavigationContact({ navigation }) {
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
        name="Contact"
        component={Contact}
        options={{
          headerTitle: () => <Header navigation={navigation} title="Contact" />,
        }}
      />
    </Stack.Navigator>
  );
}
