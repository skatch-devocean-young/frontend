import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { accentColor, mainColor } from "../../../constant/colors";
import Text from "../../../components/MyText";
import {
  boldFontFamily,
  boldFontSize,
  defaultFontSize,
  extraBoldFontSize,
  lightFontFamily,
  mediumFontFamily,
} from "../../../constant/fonts";
import { useNavigation } from "@react-navigation/core";
import { bottomShadowStyle } from "../../../constant/styles";

export default function FloatingTicket() {
  const navigaiton = useNavigation();
  const handlePress = () => {
    navigaiton.navigate("TicketDetail");
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.festaInfo}>
          <Text style={styles.text}>8/29</Text>
          {/* <Text style={styles.title}>Tech Day</Text> */}
          <Text style={styles.title}>데보션 테크 밋업</Text>
        </View>
        <Text style={styles.text}>티켓 보러가기 ></Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 80,
    borderRadius: 20,
    backgroundColor: accentColor,

    paddingHorizontal: 20,
    paddingVertical: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...bottomShadowStyle,
  },
  title: {
    fontFamily: boldFontFamily,
    fontSize: extraBoldFontSize,
    color: mainColor,
  },
  text: {
    fontFamily: mediumFontFamily,
    fontSize: 12,
    color: mainColor,
  },
});
