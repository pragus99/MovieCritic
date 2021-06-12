import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, icon } from "../styles/index";

export default function Details({ route }) {
  const star = route.params.rating;

  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <Text style={globalStyles.title}>{route.params.title}</Text>
        <Text style={globalStyles.text}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text style={styles.text}>Rating : </Text>
          <Image style={styles.icon} source={icon.stars[star]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
    marginVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  text: {
    fontFamily: "firasans-regular",
    fontSize: 20,
    color: "#fff",
  },
  icon: {
    marginLeft: 5,
    height: 33,
  },
  container: {
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    backgroundColor: "rgba(0,0,0, 0.4)",
  },
});
