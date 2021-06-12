import React from "react";
import { StyleSheet, View } from "react-native";

export default function Container({ children }) {
  return (
    <View style={styles.container}>
      <View style>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    backgroundColor: "rgba(0,0,0, 0.4)",
  },
});
