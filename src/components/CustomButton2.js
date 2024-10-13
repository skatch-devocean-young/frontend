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

const CustomButton2 = ({
  title = "다음",
  handlePress,
  backgroundColor,
  fontColor,
  clickable = true,
  style: containerStyle = null,
  textStyle = null,
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
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CustomButton2;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingBottom: Platform.OS === "ios" ? 44 : 14.5,
    backgroundColor: "white",
    paddingTop: 14.5,
    paddingHorizontal: 20,

    // justifyContent: 'flex-start',
    ...topShadowStyle,

    position: "absolute",
    bottom: 0,
  },
  wrapper: {
    backgroundColor: mainColor,
    borderRadius: 20,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  text: {
    fontFamily: boldFontFamily,
    fontSize: 18,
    letterSpacing: -0.36,
    color: "white",
  },
});
