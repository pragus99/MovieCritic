import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#333",
  },
  title: {
    fontFamily: "firasans-bold",
    fontSize: 24,
    color: "#fff",
    letterSpacing: 1,
  },
  text: {
    fontFamily: "firasans-regular",
    marginVertical: 8,
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 20,
    color: "#fff",
    textAlign: "justify",
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  error: {
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 3,
    color: "yellow",
  },
});

export const icon = {
  stars: {
    1: require("../assets/rating/1-star.png"),
    2: require("../assets/rating/2-star.png"),
    3: require("../assets/rating/3-star.png"),
    4: require("../assets/rating/4-star.png"),
    5: require("../assets/rating/5-star.png"),
  },
};
