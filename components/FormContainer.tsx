import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type FormContainerType = {
  price?: string;
  shoeDescription?: string;
  priceLabel?: string;
  shoeImageUrl?: ImageSourcePropType;

  /** Style props */
  propRight?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  price,
  shoeDescription,
  priceLabel,
  shoeImageUrl,
  propRight,
  propLeft,
}: FormContainerType) => {
  const portraitDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  return (
    <View style={[styles.portraitDefault, portraitDefaultStyle]}>
      <View style={styles.spCaptionRegular}>
        <Text style={styles.caption}>{price}</Text>
      </View>
      <View style={[styles.spCaptionRegular1, styles.bgLightPosition]}>
        <Text style={[styles.caption1, styles.body2Layout]}>
          {shoeDescription}
        </Text>
      </View>
      <View style={[styles.spBody2Medium, styles.body2Position]}>
        <Text style={[styles.body2, styles.body2Position]}>{priceLabel}</Text>
      </View>
      <Image
        style={[styles.portraitDefaultChild, styles.bgLightPosition]}
        contentFit="cover"
        source={shoeImageUrl}
      />
      <Image
        style={[styles.dotsVerticalIcon, styles.cartPosition]}
        contentFit="cover"
        source={require("../assets/dotsvertical.png")}
      />
      <View style={[styles.cart, styles.cartPosition]}>
        <View style={styles.light}>
          <View style={[styles.bgLight, styles.bgLightPosition]} />
        </View>
        <View style={styles.light}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgLightPosition]}
            locations={[0, 1]}
            colors={["#1dde7d", "#72dfc5"]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLightPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  body2Layout: {
    width: 96,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
  },
  body2Position: {
    height: 18,
    left: 0,
    position: "absolute",
  },
  cartPosition: {
    display: "none",
    right: 0,
    position: "absolute",
  },
  caption: {
    textAlign: "left",
    color: Color.textColor,
    fontFamily: FontFamily.spBody1Regular,
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    top: 0,
    height: 16,
    width: 129,
    left: 0,
    position: "absolute",
  },
  spCaptionRegular: {
    height: 16,
    width: 129,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  caption1: {
    display: "flex",
    alignItems: "center",
    height: 40,
    fontFamily: FontFamily.spBody1Regular,
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    width: 96,
    left: 0,
    position: "absolute",
  },
  spCaptionRegular1: {
    bottom: 42,
    height: 40,
    right: 0,
  },
  body2: {
    fontSize: FontSize.spBody1Regular_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.spBody2Medium,
    width: 96,
    textAlign: "left",
    color: Color.textColor,
    top: 0,
  },
  spBody2Medium: {
    bottom: 16,
    right: 0,
  },
  portraitDefaultChild: {
    bottom: 90,
    borderRadius: Border.br_10xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    right: 0,
    top: 0,
  },
  dotsVerticalIcon: {
    width: 24,
    height: 24,
    opacity: 0.4,
    bottom: 0,
  },
  bgLight: {
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(33, 33, 33, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Color.lightColor,
  },
  light: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  bgAccent: {
    backgroundColor: Color.accentColor,
    right: 0,
    top: 0,
    bottom: 0,
  },
  cart: {
    width: 40,
    height: 40,
    top: 0,
  },
  portraitDefault: {
    height: "91.11%",
    width: "27.91%",
    top: "4.44%",
    right: "69.77%",
    bottom: "4.44%",
    left: "2.33%",
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
});

export default FormContainer;
