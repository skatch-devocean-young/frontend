import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/MyText";
import CustomImage from "../../../components/CustomImage";
import {
  boldFontFamily,
  boldFontSize,
  extraBoldFontSize,
  smallFontSize,
} from "../../../constant/fonts";
import { greyColor, whiteColor } from "../../../constant/colors";

const info = {
  name: "크라잉넛",
  status: "주최자",
};
export default function MyInfo() {
  return (
    <View style={styles.container}>
      <CustomImage style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{info.name}</Text>
        <Text style={styles.text}>{info.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  img: {
    borderRadius: 50,
    backgroundColor: "grey",
    width: 74,
    height: 74,
  },
  textContainer: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: boldFontFamily,
    fontSize: extraBoldFontSize,
    marginBottom: 5,
  },
  text: {
    color: greyColor,
    fontSize: smallFontSize,
  },
});
