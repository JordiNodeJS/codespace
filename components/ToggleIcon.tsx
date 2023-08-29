import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const ToggleIcon = () => {
  return (
    <Image
      style={styles.toggleIcon}
      contentFit="cover"
      source={require("../assets/toggle.png")}
    />
  );
};

const styles = StyleSheet.create({
  toggleIcon: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    right: 80,
    width: 96,
    height: 32,
  },
});

export default ToggleIcon;
