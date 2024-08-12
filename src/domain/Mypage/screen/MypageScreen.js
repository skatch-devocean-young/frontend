import {
  View,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Text from "../../../components/MyText";
import { useEffect } from "react";
import { boldFontFamily } from "../../../constant/fonts";
import { backgroundColor, blackColor } from "../../../constant/colors";
import React from "react";

export default function MypageScreen() {
  const isDarkMode = useColorScheme() === "dark";
  const navigaiton = useNavigation();
  useEffect(() => {
    navigaiton.setOptions({
      header: () => headerComponent(),
    });
  }, []);

  const headerComponent = () => {
    return (
      <SafeAreaView
        edges={["top"]}
        style={{ backgroundColor: isDarkMode ? blackColor : backgroundColor }}
      >
        <View style={styles.topContainer}>
          <Text style={styles.title}>마이페이지</Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>{/* <Text>MypageScreen</Text> */}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: "center",
  },
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
    color: blackColor,
    marginEnd: 8,
  },
});
