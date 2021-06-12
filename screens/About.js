import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/index";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About me</Text>
      <View style={styles.email}>
        <Text style={styles.text}>
          lorem ipsum lorem ipsumlodosakdsadoask ddgfghsdfdig
          dsasasasasasasasasasasasasaopkop wepoaaaaaaak waop ekwpaoek okaweop
        </Text>
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
  text: {
    fontFamily: "firasans-regular",
    fontSize: 18,
    lineHeight: 20,
    color: "#fff",
  },
});
