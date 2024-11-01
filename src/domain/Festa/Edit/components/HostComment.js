import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Text from "../../../../components/MyText";
import { greyColor, mainColor, whiteColor } from "../../../../constant/colors";
import { boldFontFamily } from "../../../../constant/fonts";

export default function HostComment({ title, value, onChangeText }) {
  return (
    <View style={styles.hostCommentContainer}>
      <Text style={styles.hostCommentText}>{title}</Text>
      <View style={styles.hostCommentWrapper}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.hostCommentInput}
          placeholder={"입금 방법과 추가 내용을 상세히 적어주세요✏️"}
          multiline={true}
        >
          {/* <CustomImage source={EditIcon} style={styles.hostCommentIcon} /> */}
        </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hostCommentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: whiteColor,
    borderRadius: 15,
    marginBottom: 8,
  },
  hostCommentText: {
    color: mainColor,
    marginBottom: 5,
    fontFamily: boldFontFamily,
  },
  hostCommentWrapper: {
    flexDirection: "row",
  },
  hostCommentInput: {
    backgroundColor: greyColor,
    borderRadius: 15,
    width: "100%",
    height: 55,
    paddingHorizontal: 23,
    paddingVertical: 18,
  },

  hostCommentIcon: {
    width: 24,
    height: 24,
  },
});
