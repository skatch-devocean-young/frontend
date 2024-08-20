import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import {
  accentColor,
  mainColor,
  secondaryColor,
} from "../../../constant/colors";
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
import AddressIcon from "../../../constant/images/Location";
import CustomImage from "../../../components/CustomImage";

export default function FloatingTicket() {
  const navigaiton = useNavigation();
  const handlePress = () => {
    navigaiton.navigate("TicketDetail");
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.festaInfo}>
          <Text style={styles.text}>08/29</Text>
          {/* <Text style={styles.title}>Tech Day</Text> */}
          <Text numberOfLines={1} style={styles.title}>
            데보션 테크 밋업
          </Text>
          <View style={styles.addressContainer}>
            <CustomImage source={AddressIcon} style={styles.addressIcon} />
            <Text style={styles.addressText}>서대문구 서대문로</Text>
          </View>
        </View>
        <Text style={styles.text}>My 티켓 ></Text>
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
  festaInfo: {
    justifyContent: "center",

    height: 60,
  },
  title: {
    fontFamily: boldFontFamily,
    fontSize: extraBoldFontSize,
    color: mainColor,
    ellipsizeMode: "tail",
  },
  text: {
    fontFamily: mediumFontFamily,
    fontSize: 12,
    color: mainColor,
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: -2,
  },
  addressIcon: {
    width: 12,
    height: 12,
  },
  addressText: {
    fontSize: 10,
    color: secondaryColor,
  },
});
