import React from "react";
import colors from "../../config/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// ------------------------------------------------------

export default function AppButton({ title, onPress, color, ...other }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text {...other}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
  text: {
    color: "brown",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
