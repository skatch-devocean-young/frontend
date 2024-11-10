import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import Text from "../MyText";
import {
  backgroundColorVer2,
  borderColor,
  descriptionColor,
  emphasisColor,
} from "../../constant/colors";
import { boldFontFamily } from "../../constant/fonts";

const PagerCategoryButton = ({
  title,
  isFocused = false,
  isLast = false,
  handleClick,
}) => {
  const borderRightStyle = {
    borderRightWidth: 1,
    borderRightColor: borderColor,
  };
  const focusedButtonStyle = {
    borderWidth: 1,
    borderColor,
    backgroundColor: "white",
  };
  const focusedTextStyle = {
    color: emphasisColor,
    fontFamily: boldFontFamily,
  };
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View
        style={[
          styles.filterButtonWrapper,
          isFocused && focusedButtonStyle,
          !isLast && borderRightStyle,
        ]}
      >
        <Text style={[styles.buttonText, isFocused && focusedTextStyle]}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const PagerCategoryButtons = ({ categories = [], handlePage }) => {
  const [focusedCategory, setFocusedCategory] = useState(categories[0].type);

  return (
    <View style={styles.container}>
      {categories.map(({ title, type }, idx) => {
        const handleClick = () => {
          setFocusedCategory(type);
          handlePage(idx);
        };
        return (
          <PagerCategoryButton
            handleClick={handleClick}
            key={title}
            title={title}
            isFocused={type === focusedCategory}
            isLast={idx === categories.length - 1}
          />
        );
      })}
    </View>
  );
};

export default PagerCategoryButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: backgroundColorVer2,
    borderRadius: 3,
  },
  filterButtonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 3,
    paddingVertical: 10,
  },
  buttonText: {
    color: descriptionColor,
  },
});
