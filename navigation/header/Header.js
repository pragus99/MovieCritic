import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        style={styles.menuIcon}
        name="menu"
        size={40}
        onPress={openDrawer}
      />
      <View style={styles.headerContent}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: "100%",
  },
  menuIcon: {
    position: "absolute",
    left: 10,
  },
  headerContent: {
    flexDirection: "row",
  },
  headerTitle: {
    fontFamily: "firasans-bold",
    fontSize: 25,
    color: "#fff",
    letterSpacing: 1,
  },
  logo: {
    width: 45,
    height: 45,
  },
});
