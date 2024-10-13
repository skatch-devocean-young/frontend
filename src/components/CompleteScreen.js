import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";
import { mediumFontFamily } from "../constant/fonts";
import { backgroundColor, defaultColor } from "../constant/colors";
import { Check } from "../constant/images/Check";

export default function CompleteScreen({ route }) {
  const { params } = route;
  const { content } = params;

  const navigaiton = useNavigation();
  const handlePress = () => {
    navigaiton.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View sylte={styles.itemContainer}>
        <CustomImage source={Check} style={styles.img} />
      </View>
      <Text style={styles.text}>{content}</Text>
      <CustomButton title="확인" handlePress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: 20,
    paddingTop: 250,
    alignItems: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 60,
  },
  text: {
    marginTop: 15,
    textAlign: "center",
    lineHeight: 28,
    fontFamily: mediumFontFamily,
    color: defaultColor,
    fontSize: 18,
  },
});
