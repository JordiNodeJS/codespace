import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const IconsColorizer1 = () => {
  return <View style={styles.iconsColorizer} />;
};

const styles = StyleSheet.create({
  iconsColorizer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.grayColor,
  },
});

export default IconsColorizer1;
