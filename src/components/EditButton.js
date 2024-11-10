import { StyleSheet, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Text from "./MyText";
import { mainColor } from "../constant/colors";
import { boldFontFamily } from "../constant/fonts";

const EditButton = ({ handlePress = null }) => {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.backButton}>
        <Text style={styles.text}>수정/삭제</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditButton;

const styles = StyleSheet.create({
  backButton: {
    marginRight: 8,
    flexDirection: "row",
  },
  text: {
    color: mainColor,
    fontSize: 16,
    fontFamily: boldFontFamily,
  },
});
