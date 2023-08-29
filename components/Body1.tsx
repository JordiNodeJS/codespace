import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Body1 = () => {
  return <Text style={styles.body1}>Newest first</Text>;
};

const styles = StyleSheet.create({
  body1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.spBody1Regular_size,
    lineHeight: 18,
    fontFamily: FontFamily.spBody1Regular,
    color: Color.textColor,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 77,
    height: 24,
  },
});

export default Body1;
