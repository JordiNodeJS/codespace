import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const BookOpenVariantIcon = () => {
  return (
    <Image
      style={styles.bookOpenVariantIcon}
      contentFit="cover"
      source={require("../assets/bookopenvariant.png")}
    />
  );
};

const styles = StyleSheet.create({
  bookOpenVariantIcon: {
    position: "absolute",
    marginTop: -19.5,
    marginLeft: -12,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    opacity: 0.54,
  },
});

export default BookOpenVariantIcon;
