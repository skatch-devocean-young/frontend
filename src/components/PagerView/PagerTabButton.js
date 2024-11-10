import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { boldFontFamily } from "../../constant/fonts";
import {
  borderColor,
  descriptionColor,
  emphasisColor,
} from "../../constant/colors";
import Text from "../MyText";

const PagerTabButton = ({
  isFocused = false,
  handlePress,
  title,
  buttonWidth,
}) => {
  const borderEmphasisStyle = {
    borderBottomColor: emphasisColor,
    borderBottomWidth: 2,
  };
  const textEmphasisStyle = {
    fontFamily: boldFontFamily,
    color: emphasisColor,
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[
          styles.titleWrapper,
          isFocused && borderEmphasisStyle,
          buttonWidth && { minWidth: buttonWidth },
        ]}
      >
        <Text style={[styles.title, isFocused && textEmphasisStyle]}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PagerTabButton;

const styles = StyleSheet.create({
  titleWrapper: {
    flex: 1,

    paddingTop: 22,
    paddingBottom: 13,
    // paddingHorizontal: 12,
    // paddingVertical: 22,

    alignItems: "center",
    justifyContent: "center",

    borderColor,
    borderBottomWidth: 1,
  },
  title: {
    // fontFamily: boldFontFamily,
    color: descriptionColor,
  },
});
