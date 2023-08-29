import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const PortraitRating1 = () => {
  return (
    <View style={styles.portraitRating}>
      <View style={[styles.spCaptionRegular, styles.regularPosition]}>
        <Text style={[styles.caption, styles.captionPosition]}>
          <Text style={styles.us}>{`39,99 $US • `}</Text>
          <Text style={styles.off}>48% OFF</Text>
        </Text>
      </View>
      <View style={[styles.spSubheadingRegular, styles.regularPosition]}>
        <Text style={[styles.subheading, styles.captionPosition]}>
          Wrist Watch Swiss Made
        </Text>
      </View>
      <View style={[styles.spBody2Medium, styles.regularPosition]}>
        <Text style={[styles.body2, styles.body2Typo]}>19,99 $US</Text>
      </View>
      <Image
        style={[styles.imageIcon, styles.bgLightPosition]}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      <Image
        style={[styles.dotsVerticalIcon, styles.cartPosition]}
        contentFit="cover"
        source={require("../assets/dotsvertical.png")}
      />
      <View style={styles.discount}>
        <View style={[styles.accent, styles.lightPosition]}>
          <LinearGradient
            style={[styles.bgAccent, styles.accentPosition]}
            locations={[0, 1]}
            colors={["#232732", "#373e4f"]}
          />
        </View>
        <View style={styles.spCapsXsMedium}>
          <Text style={[styles.minicaps, styles.body2Typo]}>30% OFF</Text>
        </View>
      </View>
      <View style={[styles.cart, styles.cartPosition]}>
        <View style={[styles.light, styles.lightPosition]}>
          <View style={[styles.bgLight, styles.bgLightPosition]} />
        </View>
        <View style={[styles.light, styles.lightPosition]}>
          <LinearGradient
            style={styles.accentPosition}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  regularPosition: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  captionPosition: {
    textAlign: "left",
    fontFamily: FontFamily.spBody1Regular,
    width: 154,
    top: 0,
    left: 0,
    position: "absolute",
  },
  body2Typo: {
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  bgLightPosition: {
    borderRadius: Border.br_10xs,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  cartPosition: {
    display: "none",
    right: 0,
    position: "absolute",
  },
  lightPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  accentPosition: {
    backgroundColor: Color.accentColor,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  us: {
    color: Color.textColor,
  },
  off: {
    color: Color.crimson,
  },
  caption: {
    fontSize: FontSize.spCaptionRegular_size,
    lineHeight: 15,
    width: 154,
    height: 16,
  },
  spCaptionRegular: {
    bottom: 24,
    height: 16,
    left: 0,
  },
  subheading: {
    fontSize: FontSize.spSubheadingRegular_size,
    lineHeight: 21,
    height: 40,
    color: Color.textColor,
    width: 154,
  },
  spSubheadingRegular: {
    bottom: 66,
    height: 40,
    left: 0,
  },
  body2: {
    fontSize: FontSize.spBody1Regular_size,
    lineHeight: 18,
    height: 18,
    color: Color.textColor,
    width: 154,
  },
  spBody2Medium: {
    bottom: 40,
    height: 18,
    left: 0,
  },
  imageIcon: {
    bottom: 114,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dotsVerticalIcon: {
    width: 24,
    height: 24,
    opacity: 0.4,
    bottom: 0,
  },
  bgAccent: {
    borderRadius: Border.br_80xl,
  },
  accent: {
    width: 56,
    left: 0,
  },
  minicaps: {
    fontSize: FontSize.spMINICAPS_size,
    lineHeight: 13,
    textTransform: "uppercase",
    color: Color.lightColor,
    display: "flex",
    alignItems: "center",
    width: 83,
    height: 16,
  },
  spCapsXsMedium: {
    right: 8,
    left: 8,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  discount: {
    width: 99,
    bottom: 0,
    height: 16,
    left: 0,
    position: "absolute",
  },
  bgLight: {
    bottom: 0,
    backgroundColor: Color.lightColor,
  },
  light: {
    width: "100%",
    right: "0%",
    left: "0%",
  },
  cart: {
    width: 40,
    height: 40,
    top: 0,
  },
  portraitRating: {
    width: "44.77%",
    top: 8,
    right: "2.33%",
    bottom: 10,
    left: "52.91%",
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
});

export default PortraitRating1;
