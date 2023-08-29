import * as React from "react";
import { StyleSheet, View } from "react-native";
import Body1 from "./Body1";
import ToggleIcon from "./ToggleIcon";
import BUTTON1 from "./BUTTON1";
import { Color, Border } from "../GlobalStyles";

const ControlBar = () => {
  return (
    <View style={[styles.controlBar, styles.controlBarBg]}>
      <View style={[styles.spBody1Regular, styles.dropdownPosition]}>
        <Body1 />
      </View>
      <View style={[styles.dropdown, styles.dropdownPosition]}>
        <View style={styles.iconsPosition}>
          <View style={[styles.iconsButton, styles.buttonPosition]} />
        </View>
        <View style={styles.iconsPosition}>
          <View style={[styles.iconsColorizer1, styles.iconsPosition]} />
        </View>
      </View>
      <ToggleIcon />
      <View style={[styles.buttonsflatdefault, styles.spButtonPosition]}>
        <View style={[styles.spButton, styles.spButtonPosition]}>
          <BUTTON1 />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlBarBg: {
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  dropdownPosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
    position: "absolute",
  },
  buttonPosition: {
    left: 0,
    right: 0,
  },
  iconsPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  spButtonPosition: {
    top: "50%",
    position: "absolute",
  },
  spBody1Regular: {
    left: 16,
    width: 77,
  },
  iconsButton: {
    top: 0,
    bottom: 0,
    borderRadius: Border.br_11xs,
    display: "none",
    backgroundColor: Color.lightColor,
    position: "absolute",
    right: 0,
  },
  iconsColorizer1: {
    backgroundColor: Color.grayColor,
  },
  dropdown: {
    left: 93,
    width: 24,
  },
  spButton: {
    marginTop: -8,
    height: 16,
    left: 0,
    right: 0,
  },
  buttonsflatdefault: {
    marginTop: -20,
    right: 8,
    width: 64,
    height: 40,
  },
  controlBar: {
    top: 56,
    height: 48,
    overflow: "hidden",
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
});

export default ControlBar;
