import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { EditIcon } from "../../../../constant/images/Festa/Edit";
import { boldFontFamily, boldFontSize } from "../../../../constant/fonts";
import { mainColor, whiteColor } from "../../../../constant/colors";
import CustomImage from "../../../../components/CustomImage";
import Devider from "../../../../components/Devider";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function InputItem({ title, value, handleValue, icon }) {
  return (
    <View>
      <View style={styles.infoItemWrapper}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          value={value}
          onChangeText={(text) => {
            handleValue(text);
          }}
          style={styles.textInput}
        />
        <CustomImage source={icon} style={styles.icon} />
      </View>
      <Devider color={mainColor} style={styles.devider} />
    </View>
  );
}

const styles = StyleSheet.create({
  infoItemWrapper: {
    paddingHorizontal: 13,
    paddingVertical: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 4,
    color: whiteColor,
    minWidth: 60,
  },
  content: {},
  icon: {
    width: 24,
    height: 24,
  },
  devider: {
    height: 2,
  },
  textInput: {
    // backgroundColor: "red",
    width: 200,
    color: whiteColor,
    fontFamily: boldFontFamily,
    fontSize: boldFontSize,
  },
});
