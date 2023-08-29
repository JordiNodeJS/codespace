import * as React from "react";
import { StyleSheet, View } from "react-native";
import PortraitRating from "./PortraitRating";
import PortraitRating1 from "./PortraitRating1";
import { Border, Color } from "../GlobalStyles";

const BackgroundDouble = () => {
  return (
    <View style={styles.backgroundDouble}>
      <View style={[styles.item, styles.itemShadowBox]}>
        <View style={[styles.colorsbgCard, styles.item1Position]}>
          <View style={styles.bgLight} />
        </View>
      </View>
      <PortraitRating
        subheadingReguPointerEv="Little Black Book"
        price="19,99 $US"
        captionTestID="9€"
        rating="12"
      />
      <View style={[styles.item1, styles.item1Position]}>
        <View style={[styles.colorsbgCard, styles.item1Position]}>
          <View style={styles.bgLight} />
        </View>
      </View>
      <PortraitRating1 />
    </View>
  );
};

const styles = StyleSheet.create({
  itemShadowBox: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(38, 50, 56, 0.12)",
    width: "49.42%",
  },
  item1Position: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bgLight: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  colorsbgCard: {
    width: "100%",
    left: "0%",
  },
  item: {
    right: "50.58%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(38, 50, 56, 0.12)",
    width: "49.42%",
    position: "absolute",
  },
  item1: {
    left: "50.58%",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(38, 50, 56, 0.12)",
    width: "49.42%",
    right: "0%",
  },
  backgroundDouble: {
    top: 112,
    right: 8,
    left: 8,
    height: 248,
    position: "absolute",
  },
});

export default BackgroundDouble;
