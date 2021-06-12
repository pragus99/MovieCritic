import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/index";
import { MaterialIcons } from "@expo/vector-icons";

export default function Contact() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Contact me</Text>
      <View style={styles.email}>
        <MaterialIcons
          style={styles.icon}
          name="email"
          size={30}
          color="white"
        />
        <Text style={styles.text}>prayogosuntoro@gmail.com</Text>
      </View>
      <View style={styles.email}>
        <MaterialIcons
          style={styles.icon}
          name="phone"
          size={30}
          color="white"
        />
        <Text style={styles.text}>0895324811165</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  email: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontFamily: "firasans-regular",
    fontSize: 18,
    lineHeight: 20,
    color: "#fff",
  },
});
