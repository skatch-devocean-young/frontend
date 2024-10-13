import { StyleSheet, View } from "react-native";
import React from "react";
import { whiteColor } from "../constant/colors";
import Text from "./MyText";

export default function Devider({ color }) {
  return <View style={[styles.container, { backgroundColor: color }]} />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: whiteColor,
    height: 8,
    marginVertical: 16,
  },
});
