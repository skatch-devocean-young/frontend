import { SafeAreaView, StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import Text from "./MyText";
import { backgroundColor, blackColor } from "../constant/colors";
import { boldFontFamily } from "../constant/fonts";

export default function NavHeader({ title }) {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ backgroundColor: isDarkMode ? blackColor : backgroundColor }}
    >
      <View style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 11,
    paddingTop: 20,
  },
  title: {
    fontFamily: boldFontFamily,
    fontSize: 20,
    lineHeight: 31,
    marginEnd: 8,
  },
});
