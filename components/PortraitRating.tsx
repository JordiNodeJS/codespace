import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

type PortraitRatingType = {
  subheadingReguPointerEv?: string;
  price?: string;
  captionTestID?: string;
  rating?: string;
};

const PortraitRating = ({
  subheadingReguPointerEv = "Book",
  price = "10 €",
  captionTestID = "9",
  rating = "10",
}: PortraitRatingType) => {
  return (
    <View style={styles.portraitRating}>
      <View style={[styles.spCaptionRegular, styles.regularPosition]}>
        <Text
          style={[styles.caption, styles.body2Layout]}
          testID={captionTestID}
        >
          <Text style={styles.us}>{`39,99 $US • `}</Text>
          <Text style={styles.off}>48% OFF</Text>
        </Text>
      </View>
      <View
        style={[styles.spSubheadingRegular, styles.regularPosition]}
        pointerEvents={subheadingReguPointerEv}
      >
        <Text style={[styles.subheading, styles.body2Layout]}>
          Little Black Book For Perfect Reading
        </Text>
      </View>
      <View style={[styles.spBody2Medium, styles.regularPosition]}>
        <Text style={[styles.body2, styles.body2Position]}>{price}</Text>
      </View>
      <Image
        style={[styles.imageIcon, styles.bgLightPosition]}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <Image
        style={[styles.dotsVerticalIcon, styles.cartPosition]}
        contentFit="cover"
        source={require("../assets/dotsvertical.png")}
      />
      <View style={styles.rating} testID={rating}>
        <View style={styles.spCapsXsMedium}>
          <Text style={[styles.minicaps, styles.body2Position]}>12345</Text>
        </View>
        <View style={[styles.star, styles.starPosition]}>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <View style={[styles.iconsButton, styles.cartPosition]} />
          </View>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <LinearGradient
              style={[styles.iconsColorizer1, styles.bgAccentBg]}
              locations={[0, 1]}
              colors={["#1dde7d", "#72dfc5"]}
            />
          </View>
        </View>
        <View style={[styles.star1, styles.starPosition]}>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <View style={[styles.iconsButton, styles.cartPosition]} />
          </View>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <LinearGradient
              style={[styles.iconsColorizer1, styles.bgAccentBg]}
              locations={[0, 1]}
              colors={["#1dde7d", "#72dfc5"]}
            />
          </View>
        </View>
        <View style={[styles.star2, styles.starPosition]}>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <View style={[styles.iconsButton, styles.cartPosition]} />
          </View>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <LinearGradient
              style={[styles.iconsColorizer1, styles.bgAccentBg]}
              locations={[0, 1]}
              colors={["#1dde7d", "#72dfc5"]}
            />
          </View>
        </View>
        <View style={[styles.star3, styles.starPosition]}>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <View style={[styles.iconsButton, styles.cartPosition]} />
          </View>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <LinearGradient
              style={[styles.iconsColorizer1, styles.bgAccentBg]}
              locations={[0, 1]}
              colors={["#1dde7d", "#72dfc5"]}
            />
          </View>
        </View>
        <View style={[styles.star4, styles.starPosition]}>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <View style={[styles.iconsButton, styles.cartPosition]} />
          </View>
          <View style={[styles.iconsBackground, styles.iconsPosition]}>
            <View style={[styles.iconsColorizer9, styles.iconsPosition]} />
          </View>
        </View>
      </View>
      <View style={[styles.cart, styles.cartPosition]}>
        <View style={[styles.iconsBackground, styles.iconsPosition]}>
          <View style={[styles.bgLight, styles.bgLightPosition]} />
        </View>
        <View style={[styles.iconsBackground, styles.iconsPosition]}>
          <LinearGradient
            style={[styles.bgAccent, styles.bgAccentBg]}
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
  },
  body2Layout: {
    width: 154,
    textAlign: "left",
  },
  body2Position: {
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    color: Color.textColor,
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
  starPosition: {
    width: 12,
    top: "12.5%",
    height: "75%",
    bottom: "12.5%",
    position: "absolute",
  },
  iconsPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  bgAccentBg: {
    backgroundColor: Color.accentColor,
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
    fontFamily: FontFamily.spBody1Regular,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
    height: 16,
  },
  spCaptionRegular: {
    bottom: 24,
    height: 16,
    left: 0,
    position: "absolute",
  },
  subheading: {
    fontSize: FontSize.spSubheadingRegular_size,
    lineHeight: 21,
    height: 40,
    color: Color.textColor,
    fontFamily: FontFamily.spBody1Regular,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  spSubheadingRegular: {
    bottom: 66,
    height: 40,
    left: 0,
    position: "absolute",
  },
  body2: {
    fontSize: FontSize.spBody1Regular_size,
    lineHeight: 18,
    height: 18,
    width: 154,
    textAlign: "left",
  },
  spBody2Medium: {
    bottom: 40,
    height: 18,
    left: 0,
    position: "absolute",
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
  minicaps: {
    fontSize: FontSize.spMINICAPS_size,
    lineHeight: 13,
    textTransform: "uppercase",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 30,
    height: 11,
  },
  spCapsXsMedium: {
    height: "68.75%",
    top: "18.75%",
    right: 2,
    left: 67,
    opacity: 0.48,
    bottom: "12.5%",
    position: "absolute",
  },
  iconsButton: {
    borderRadius: 1,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: Color.lightColor,
  },
  iconsBackground: {
    position: "absolute",
  },
  iconsColorizer1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  star: {
    left: 0,
  },
  star1: {
    left: 13,
  },
  star2: {
    left: 26,
  },
  star3: {
    left: 39,
  },
  iconsColorizer9: {
    backgroundColor: Color.grayColor,
    position: "absolute",
  },
  star4: {
    left: 53,
    opacity: 0.24,
  },
  rating: {
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
  bgAccent: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  cart: {
    width: 40,
    height: 40,
    top: 0,
  },
  portraitRating: {
    width: "44.77%",
    top: 8,
    right: "52.91%",
    bottom: 10,
    left: "2.33%",
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
});

export default PortraitRating;
