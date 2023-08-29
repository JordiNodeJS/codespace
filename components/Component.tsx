import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ControlBar from "./ControlBar";
import BackgroundDouble from "./BackgroundDouble";
import FormContainer from "./FormContainer";
import BookOpenVariantIcon from "./BookOpenVariantIcon";
import IconsColorizer from "./IconsColorizer";
import Inactive from "./Inactive";
import IconsColorizer1 from "./IconsColorizer1";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Component = () => {
  return (
    <View style={styles.view}>
      <ControlBar />
      <BackgroundDouble />
      <View style={styles.backgroundDouble}>
        <View style={styles.itemShadowBox}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
        </View>
        <View style={[styles.portraitRating, styles.portraitPosition]}>
          <View style={styles.spCaptionRegular}>
            <Text style={[styles.caption, styles.body1Typo]}>
              <Text style={styles.us}>{`39,99 $US • `}</Text>
              <Text style={styles.off}>48% OFF</Text>
            </Text>
          </View>
          <View style={[styles.spSubheadingRegular, styles.subheadingPosition]}>
            <Text style={[styles.subheading, styles.subheadingPosition]}>
              Little Black Book For Perfect Reading
            </Text>
          </View>
          <View style={styles.spBody2Medium}>
            <Text style={styles.body2}>19,99 $US</Text>
          </View>
          <Image
            style={[styles.imageIcon, styles.bgLightPosition]}
            contentFit="cover"
            source={require("../assets/image2.png")}
          />
          <Image
            style={styles.dotsVerticalIcon}
            contentFit="cover"
            source={require("../assets/dotsvertical.png")}
          />
          <View style={styles.rating}>
            <View style={styles.spCapsXsMedium}>
              <Text style={styles.minicaps}>12345</Text>
            </View>
            <View style={[styles.star, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star1, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star2, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star3, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star4, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsColorizer9, styles.iconsPosition]} />
              </View>
            </View>
          </View>
          <View style={[styles.cart, styles.cartLayout]}>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <View style={[styles.bgLight, styles.bgLightPosition]} />
            </View>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <LinearGradient
                style={[styles.bgAccent, styles.accentBg]}
                locations={[0, 1]}
                colors={["#1dde7d", "#72dfc5"]}
              />
            </View>
          </View>
        </View>
        <View style={styles.itemPosition}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
        </View>
        <View style={[styles.portraitRating1, styles.portraitPosition]}>
          <View style={styles.spCaptionRegular}>
            <Text style={[styles.caption, styles.body1Typo]}>
              <Text style={styles.us}>{`39,99 $US • `}</Text>
              <Text style={styles.off}>48% OFF</Text>
            </Text>
          </View>
          <View style={[styles.spSubheadingRegular, styles.subheadingPosition]}>
            <Text style={[styles.subheading, styles.subheadingPosition]}>
              Wrist Watch Swiss Made
            </Text>
          </View>
          <View style={styles.spBody2Medium}>
            <Text style={styles.body2}>19,99 $US</Text>
          </View>
          <Image
            style={[styles.imageIcon, styles.bgLightPosition]}
            contentFit="cover"
            source={require("../assets/image3.png")}
          />
          <Image
            style={styles.dotsVerticalIcon}
            contentFit="cover"
            source={require("../assets/dotsvertical.png")}
          />
          <View style={styles.rating}>
            <View style={[styles.accent1, styles.iconsPosition1]}>
              <LinearGradient
                style={[styles.bgAccent1, styles.accentBg]}
                locations={[0, 1]}
                colors={["#232732", "#373e4f"]}
              />
            </View>
            <View style={[styles.spCapsXsMedium1, styles.backgroundPosition]}>
              <Text style={styles.minicaps1}>30% OFF</Text>
            </View>
          </View>
          <View style={[styles.cart, styles.cartLayout]}>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <View style={[styles.bgLight, styles.bgLightPosition]} />
            </View>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <LinearGradient
                style={[styles.bgAccent, styles.accentBg]}
                locations={[0, 1]}
                colors={["#1dde7d", "#72dfc5"]}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.backgroundDouble1, styles.backgroundPosition]}>
        <View style={styles.itemShadowBox}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
        </View>
        <View style={[styles.portraitRating, styles.portraitPosition]}>
          <View style={[styles.spBody1Regular, styles.homeLayout]}>
            <Text style={[styles.body1, styles.homeLayout]}>
              Nikon EOD. Digital Camera For Good Guys
            </Text>
          </View>
          <View style={[styles.spTitleMedium, styles.titlePosition]}>
            <Text style={[styles.title, styles.titleTypo]}>256,99 $US</Text>
          </View>
          <Image
            style={[styles.imageIcon, styles.bgLightPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Image
            style={styles.dotsVerticalIcon}
            contentFit="cover"
            source={require("../assets/dotsvertical.png")}
          />
          <View style={styles.rating}>
            <View style={styles.spCapsXsMedium}>
              <Text style={styles.minicaps}>12345</Text>
            </View>
            <View style={[styles.star, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star1, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star2, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star3, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star4, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsColorizer9, styles.iconsPosition]} />
              </View>
            </View>
          </View>
          <View style={[styles.cart, styles.cartLayout]}>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <View style={styles.lightShadowBox} />
            </View>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <LinearGradient
                style={[styles.bgAccent, styles.accentBg]}
                locations={[0, 1]}
                colors={["#1dde7d", "#72dfc5"]}
              />
            </View>
          </View>
        </View>
        <View style={styles.itemPosition}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
        </View>
        <View style={[styles.portraitRating1, styles.portraitPosition]}>
          <View style={[styles.spBody1Regular, styles.homeLayout]}>
            <Text style={[styles.body1, styles.homeLayout]}>
              AF Nikkor, 24-50mm, 1:3.3-4.5. Hyper Lens, Free shipping
            </Text>
          </View>
          <View style={[styles.spTitleMedium, styles.titlePosition]}>
            <Text style={[styles.title, styles.titleTypo]}>256,99 $US</Text>
          </View>
          <Image
            style={[styles.imageIcon, styles.bgLightPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <Image
            style={styles.dotsVerticalIcon}
            contentFit="cover"
            source={require("../assets/dotsvertical.png")}
          />
          <View style={styles.rating}>
            <View style={styles.spCapsXsMedium}>
              <Text style={styles.minicaps}>12345</Text>
            </View>
            <View style={[styles.star, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star1, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star2, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star3, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <LinearGradient
                  style={[styles.iconsColorizer1, styles.accentBg]}
                  locations={[0, 1]}
                  colors={["#1dde7d", "#72dfc5"]}
                />
              </View>
            </View>
            <View style={[styles.star4, styles.starPosition]}>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsButton, styles.lightBg]} />
              </View>
              <View style={[styles.colorsbgCard, styles.iconsPosition]}>
                <View style={[styles.iconsColorizer9, styles.iconsPosition]} />
              </View>
            </View>
          </View>
          <View style={[styles.cart, styles.cartLayout]}>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <View style={styles.lightShadowBox} />
            </View>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <LinearGradient
                style={[styles.bgAccent, styles.accentBg]}
                locations={[0, 1]}
                colors={["#1dde7d", "#72dfc5"]}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.lightHamburger, styles.homeLayout]}>
        <View style={[styles.colorsbgCard, styles.iconsPosition]}>
          <View style={[styles.bgLight8, styles.lightBg]} />
        </View>
        <View style={[styles.spTitleMedium2, styles.titlePosition]}>
          <Text style={[styles.title2, styles.titleTypo]}>New arrivals</Text>
        </View>
        <View style={[styles.miscAvatar40x40Ab, styles.backgroundPosition]}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <LinearGradient
              style={[styles.bgAccent1, styles.accentBg]}
              locations={[0, 1]}
              colors={["#d500f9", "#ff1744"]}
            />
          </View>
          <View style={styles.spTitleMedium3}>
            <Text style={[styles.title3, styles.title3FlexBox]}>NA</Text>
          </View>
        </View>
        <View style={[styles.search, styles.cartLayout]}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.iconsButton15, styles.lightBg]} />
          </View>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.iconsColorizer9, styles.iconsPosition]} />
          </View>
        </View>
        <View style={[styles.cart4, styles.cartLayout]}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.iconsButton15, styles.lightBg]} />
          </View>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.iconsColorizer9, styles.iconsPosition]} />
          </View>
        </View>
        <Image
          style={styles.logoSampleIcon}
          contentFit="cover"
          source={require("../assets/logo-sample.png")}
        />
      </View>
      <View style={[styles.backgroundTriple, styles.backgroundPosition]}>
        <View style={[styles.bg, styles.bgShadowBox]}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
        </View>
        <View style={[styles.bg1, styles.bgShadowBox]}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
        </View>
        <View style={[styles.bg2, styles.bgShadowBox]}>
          <View style={[styles.colorsbgCard, styles.iconsPosition]}>
            <View style={[styles.bgLight, styles.bgLightPosition]} />
          </View>
        </View>
        <FormContainer
          price="9,99 $US "
          shoeDescription="Perfect Shoes For Every Season"
          priceLabel="5,99 $US"
          shoeImageUrl={require("../assets/rectangle-22.png")}
        />
        <FormContainer
          price="89,99 $US "
          shoeDescription="Amazing Shoes For Every Season"
          priceLabel="29,99 $US"
          shoeImageUrl={require("../assets/rectangle-23.png")}
          propRight="36.05%"
          propLeft="36.05%"
        />
        <FormContainer
          price="25,99 $US "
          shoeDescription="Leather Shoes For Last Year"
          priceLabel="19,99 $US"
          shoeImageUrl={require("../assets/rectangle-24.png")}
          propRight="2.33%"
          propLeft="69.77%"
        />
      </View>
      <View style={[styles.home, styles.homeLayout]}>
        <View style={[styles.colorsbgCard, styles.iconsPosition]}>
          <View style={[styles.bgLight8, styles.lightBg]} />
        </View>
        <View style={[styles.inactive, styles.inactivePosition]}>
          <BookOpenVariantIcon />
          <View style={[styles.spCaptionRegular2, styles.regularPosition]}>
            <Text style={[styles.caption2, styles.body12Position]}>
              Catalogue
            </Text>
          </View>
        </View>
        <View style={[styles.inactive1, styles.inactivePosition]}>
          <View style={[styles.cart5, styles.cart5Position]}>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <View style={[styles.iconsButton15, styles.lightBg]} />
            </View>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <IconsColorizer />
            </View>
          </View>
          <View style={[styles.spCaptionRegular2, styles.regularPosition]}>
            <Text style={[styles.caption2, styles.body12Position]}>Cart</Text>
          </View>
        </View>
        <Inactive />
        <View style={[styles.inactive2, styles.inactivePosition]}>
          <View style={[styles.cart5, styles.cart5Position]}>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <View style={[styles.iconsButton15, styles.lightBg]} />
            </View>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <IconsColorizer1 />
            </View>
          </View>
          <View style={[styles.spCaptionRegular2, styles.regularPosition]}>
            <Text style={[styles.caption2, styles.body12Position]}>
              Account
            </Text>
          </View>
        </View>
        <View style={styles.active}>
          <View style={[styles.spBody1Regular2, styles.regularPosition]}>
            <Text style={[styles.body12, styles.body12Position]}>Discover</Text>
          </View>
          <View style={[styles.shopping, styles.cart5Position]}>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <View style={[styles.iconsButton15, styles.lightBg]} />
            </View>
            <View style={[styles.colorsbgCard, styles.iconsPosition]}>
              <View style={[styles.iconsColorizer9, styles.iconsPosition]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsPosition: {
    width: "100%",
    right: "0%",
    left: "0%",
  },
  bgLightPosition: {
    borderRadius: Border.br_10xs,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  portraitPosition: {
    bottom: 10,
    width: "44.77%",
    top: 8,
    position: "absolute",
    backgroundColor: Color.lightColor,
  },
  body1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.spBody1Regular,
    width: 154,
    top: 0,
  },
  subheadingPosition: {
    height: 40,
    left: 0,
    position: "absolute",
  },
  starPosition: {
    width: 12,
    top: "12.5%",
    height: "75%",
    bottom: "12.5%",
    position: "absolute",
  },
  lightBg: {
    backgroundColor: Color.lightColor,
    bottom: 0,
  },
  accentBg: {
    backgroundColor: Color.accentColor,
    position: "absolute",
  },
  cartLayout: {
    width: 40,
    height: 40,
  },
  iconsPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  backgroundPosition: {
    left: 8,
    position: "absolute",
  },
  homeLayout: {
    height: 56,
    position: "absolute",
  },
  titlePosition: {
    bottom: 16,
    position: "absolute",
  },
  titleTypo: {
    lineHeight: 26,
    fontSize: FontSize.spTitleMedium_size,
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    color: Color.textColor,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  title3FlexBox: {
    justifyContent: "center",
    display: "flex",
  },
  bgShadowBox: {
    width: "32.56%",
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(38, 50, 56, 0.12)",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 33,
    },
  },
  inactivePosition: {
    top: "23.21%",
    height: "76.79%",
    width: "20%",
    bottom: "0%",
    position: "absolute",
  },
  regularPosition: {
    top: "50%",
    left: 0,
    right: 0,
    position: "absolute",
  },
  body12Position: {
    width: 72,
    textAlign: "center",
    color: Color.textColor,
    fontFamily: FontFamily.spBody1Regular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cart5Position: {
    marginLeft: -12,
    left: "50%",
    top: "50%",
    height: 24,
    width: 24,
    position: "absolute",
  },
  bgLight: {
    bottom: 0,
    backgroundColor: Color.lightColor,
  },
  colorsbgCard: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  itemShadowBox: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(38, 50, 56, 0.12)",
    right: "50.58%",
    width: "49.42%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 33,
    },
  },
  us: {
    color: Color.textColor,
  },
  off: {
    color: Color.crimson,
  },
  caption: {
    width: 154,
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
    height: 16,
    left: 0,
    position: "absolute",
  },
  spCaptionRegular: {
    bottom: 24,
    height: 16,
    left: 0,
    right: 0,
    position: "absolute",
  },
  subheading: {
    fontSize: FontSize.spSubheadingRegular_size,
    lineHeight: 21,
    color: Color.textColor,
    width: 154,
    textAlign: "left",
    fontFamily: FontFamily.spBody1Regular,
    top: 0,
  },
  spSubheadingRegular: {
    bottom: 66,
    right: 0,
  },
  body2: {
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.spBody1Regular_size,
    height: 18,
    color: Color.textColor,
    width: 154,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  spBody2Medium: {
    bottom: 40,
    height: 18,
    left: 0,
    right: 0,
    position: "absolute",
  },
  imageIcon: {
    bottom: 114,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  dotsVerticalIcon: {
    opacity: 0.4,
    display: "none",
    height: 24,
    width: 24,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  minicaps: {
    textAlign: "right",
    width: 30,
    height: 11,
    alignItems: "center",
    display: "flex",
    textTransform: "uppercase",
    lineHeight: 13,
    fontSize: FontSize.spMINICAPS_size,
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    color: Color.textColor,
    left: 0,
    top: 0,
    position: "absolute",
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
    display: "none",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  iconsColorizer1: {
    right: "0%",
    width: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
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
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  star4: {
    left: 53,
    opacity: 0.24,
  },
  rating: {
    width: 99,
    height: 16,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  bgAccent: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
  },
  cart: {
    display: "none",
    right: 0,
    top: 0,
    position: "absolute",
  },
  portraitRating: {
    right: "52.91%",
    left: "2.33%",
  },
  itemPosition: {
    left: "50.58%",
    right: "0%",
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(38, 50, 56, 0.12)",
    bottom: "0%",
    top: "0%",
    width: "49.42%",
    height: "100%",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 33,
    },
  },
  bgAccent1: {
    borderRadius: Border.br_80xl,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
  },
  accent1: {
    width: 56,
    left: 0,
    position: "absolute",
  },
  minicaps1: {
    width: 83,
    color: Color.lightColor,
    alignItems: "center",
    display: "flex",
    textTransform: "uppercase",
    lineHeight: 13,
    fontSize: FontSize.spMINICAPS_size,
    fontFamily: FontFamily.spBody2Medium,
    fontWeight: "500",
    textAlign: "left",
    height: 16,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spCapsXsMedium1: {
    right: 8,
    bottom: 0,
    top: 0,
  },
  portraitRating1: {
    right: "2.33%",
    left: "52.91%",
  },
  backgroundDouble: {
    width: "95.56%",
    top: 916,
    right: "2.22%",
    left: "2.22%",
    height: 248,
    position: "absolute",
  },
  body1: {
    lineHeight: 18,
    fontSize: FontSize.spBody1Regular_size,
    color: Color.textColor,
    width: 154,
    textAlign: "left",
    fontFamily: FontFamily.spBody1Regular,
    top: 0,
    left: 0,
  },
  spBody1Regular: {
    bottom: 50,
    left: 0,
    right: 0,
  },
  title: {
    height: 26,
    width: 154,
  },
  spTitleMedium: {
    height: 26,
    left: 0,
    right: 0,
  },
  lightShadowBox: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(33, 33, 33, 0.08)",
    borderRadius: Border.br_10xs,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 33,
    },
    backgroundColor: Color.lightColor,
  },
  backgroundDouble1: {
    top: 572,
    height: 328,
    right: 8,
  },
  bgLight8: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  title2: {
    width: 216,
    height: 24,
  },
  spTitleMedium2: {
    top: 16,
    right: 72,
    left: 72,
  },
  title3: {
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    justifyContent: "center",
    lineHeight: 26,
    fontSize: FontSize.spTitleMedium_size,
    color: Color.lightColor,
    width: 40,
    alignItems: "center",
    fontWeight: "500",
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spTitleMedium3: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  miscAvatar40x40Ab: {
    width: 40,
    height: 40,
    top: 8,
  },
  iconsButton15: {
    borderRadius: Border.br_11xs,
    display: "none",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  search: {
    right: 56,
    top: 8,
    width: 40,
    position: "absolute",
  },
  cart4: {
    right: 8,
    top: 8,
    width: 40,
    position: "absolute",
  },
  logoSampleIcon: {
    marginTop: -12,
    marginLeft: -59,
    width: 117,
    height: 29,
    left: "50%",
    top: "50%",
    display: "none",
    position: "absolute",
  },
  lightHamburger: {
    top: 0,
    right: "0%",
    width: "100%",
    left: "0%",
  },
  bg: {
    right: "67.44%",
    left: "0%",
    width: "32.56%",
  },
  bg1: {
    right: "33.72%",
    left: "33.72%",
  },
  bg2: {
    left: "67.44%",
    right: "0%",
  },
  backgroundTriple: {
    top: 376,
    height: 180,
    right: 8,
  },
  caption2: {
    opacity: 0.64,
    height: 14,
    lineHeight: 15,
    fontSize: FontSize.spCaptionRegular_size,
  },
  spCaptionRegular2: {
    marginTop: 4.5,
    opacity: 0.87,
    height: 14,
    display: "none",
  },
  inactive: {
    right: "60%",
    left: "20%",
  },
  cart5: {
    marginTop: -19.5,
    opacity: 0.54,
  },
  inactive1: {
    right: "40%",
    left: "40%",
  },
  inactive2: {
    left: "80%",
    right: "0%",
  },
  body12: {
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    lineHeight: 18,
    fontSize: FontSize.spBody1Regular_size,
    height: 16,
  },
  spBody1Regular2: {
    marginTop: 2,
    height: 16,
  },
  shopping: {
    marginTop: -22,
  },
  active: {
    right: "80%",
    width: "20%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  home: {
    left: 0,
    bottom: 0,
    right: 0,
  },
  view: {
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 43,
    elevation: 43,
    width: 360,
    height: 720,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 33,
    },
    backgroundColor: Color.lightColor,
  },
});

export default Component;
