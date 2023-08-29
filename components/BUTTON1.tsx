import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily } from "../GlobalStyles";

const BUTTON1 = () => {
  return <Text style={styles.button}>Filter</Text>;
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.spBody1Regular_size,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.spBody2Medium,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 16,
  },
});

export default BUTTON1;
