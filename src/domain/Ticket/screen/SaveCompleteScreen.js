import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { backgroundColor, defaultColor } from "../../../constant/colors";
import CustomImage from "../../../components/CustomImage";
import { Check } from "../../../constant/images/Check";
import { boldFontFamily, mediumFontFamily } from "../../../constant/fonts";
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";

export default function SaveCompleteScreen() {
  const navigaiton = useNavigation();
  const handlePress = () => {
    navigaiton.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View sylte={styles.itemContainer}>
        <CustomImage source={Check} style={styles.img} />
      </View>
      <Text style={styles.text}>{`티켓 저장이\n완료되었습니다`}</Text>
      <CustomButton title="완료" handlePress={handlePress} />
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
