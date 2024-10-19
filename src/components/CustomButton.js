import {
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { buttonColor, mainColor } from "../constant/colors";
import { boldFontFamily } from "../constant/fonts";
import {
  bottomShadowStyle,
  topShadowStyle,
  windowWidth,
} from "../constant/styles";
import Text from "./MyText";
import CustomImage from "./CustomImage";

const CustomButton = ({
  title = "다음",
  handlePress,
  backgroundColor,
  fontColor,
  clickable = true,
  style: containerStyle = null,
  textStyle = null,
  imagable = false,
  imgSource = null,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableWithoutFeedback onPress={clickable ? handlePress : null}>
        <View
          style={[
            styles.wrapper,
            backgroundColor && { backgroundColor },
            !clickable && { backgroundColor: "#9e9e9e" },
          ]}
        >
          {imagable && (
            <View style={styles.imgWrapper}>
              <CustomImage source={imgSource} style={styles.img} />
            </View>
          )}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingBottom: 24,
    paddingTop: 14.5,
    paddingHorizontal: 20,

    // justifyContent: 'flex-start',
    ...topShadowStyle,
  },
  wrapper: {
    backgroundColor: mainColor,
    borderRadius: 20,
    paddingVertical: 17,
    alignItems: "center",
    justifyContent: "center",
    height: 60,

    flexDirection: "row",
  },
  text: {
    fontFamily: boldFontFamily,
    fontSize: 18,
    letterSpacing: -0.36,
    color: "white",
  },
  imgWrapper: {
    backgroundColor: "white",
    borderRadius: 50,
    marginRight: 8,
    marginBottom: 1,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  img: { width: 12, height: 12 },
});
