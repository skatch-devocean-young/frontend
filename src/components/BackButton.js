import { StyleSheet, View } from "react-native";
import React from "react";
import CustomImage from "./CustomImage";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { BackArrow } from "../constant/images/Arrow";
import Text from "./MyText";
import { whiteColor } from "../constant/colors";
import { boldFontFamily } from "../constant/fonts";

const BackButton = ({ handlePress = null }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.goBack();
  };
  return (
    <TouchableWithoutFeedback
      onPress={handlePress !== null ? handlePress : handleClick}
    >
      <View style={styles.backButton}>
        <CustomImage source={BackArrow} style={styles.img} />
        <Text style={styles.text}>뒤로</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 8,
    flexDirection: "row",
  },
  img: {
    width: 10,
    height: 17,
    marginTop: 2,
    marginRight: 4,
  },
  text: {
    color: whiteColor,
    fontSize: 17,
  },
});
