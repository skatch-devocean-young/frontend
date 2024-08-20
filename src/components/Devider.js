import { StyleSheet, View } from "react-native";
import React from "react";
import { whiteColor } from "../constant/colors";

export default function Devider() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    height: 8,
    marginVertical: 16,
  },
});
