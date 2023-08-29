import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Inactive = () => {
  return (
    <View style={styles.inactive}>
      <Image
        style={styles.tagHeartIcon}
        contentFit="cover"
        source={require("../assets/tagheart.png")}
      />
      <View style={[styles.spCaptionRegular, styles.captionPosition]}>
        <Text style={[styles.caption, styles.captionPosition]}>Wishlist</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  captionPosition: {
    height: 14,
    left: 0,
    position: "absolute",
  },
  tagHeartIcon: {
    marginTop: -19.5,
    marginLeft: -12,
    left: "50%",
    width: 24,
    height: 24,
    opacity: 0.54,
    top: "50%",
    position: "absolute",
  },
  caption: {
    top: 0,
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    fontFamily: FontFamily.spBody1Regular,
    color: Color.textColor,
    textAlign: "center",
    width: 72,
    opacity: 0.64,
  },
  spCaptionRegular: {
    marginTop: 4.5,
    right: 0,
    display: "none",
    opacity: 0.87,
    top: "50%",
  },
  inactive: {
    height: "76.79%",
    width: "20%",
    top: "23.21%",
    right: "20%",
    bottom: "0%",
    left: "60%",
    position: "absolute",
  },
});

export default Inactive;
