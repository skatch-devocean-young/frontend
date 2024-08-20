import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  backgroundColor,
  borderColor,
  defaultColor,
  mainColor,
} from "../../../constant/colors";
import Devider from "../../../components/Devider";
import { boldFontFamily } from "../../../constant/fonts";
import CustomButton from "../../../components/CustomButton";

export default function FestaDetailScreen({ item }) {
  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.posterContainer}>
            <View style={styles.posterItem} />
          </View>
          <Devider />

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>일시</Text>
              <Text style={styles.contentText}>{item.start_date}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>주최</Text>
              <Text style={styles.contentText}>{item.host_name}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>인원</Text>
              <Text style={styles.contentText}>{item.start_date}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>장소</Text>
              <Text style={styles.contentText}>{item.place_address}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>가격</Text>
              <Text style={styles.contentText}>{item.start_date}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>신청일자</Text>
              <Text style={styles.contentText}>{item.start_date}</Text>
            </View>
          </View>

          <Devider />

          <View style={styles.detailContainer}>
            <Text> 상세정보</Text>
          </View>
        </View>
      </ScrollView>
      <CustomButton title={"참여하기"} />
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: backgroundColor,
  },
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: 16,
    paddingBottom: 300,
  },
  posterContainer: {
    paddingHorizontal: 20,
  },
  posterItem: {
    backgroundColor: borderColor,
    marginHorizontal: 5,
    width: 340,
    height: 476,
    borderRadius: 20,
  },
  infoContainer: {
    backgroundColor: "rgba(73, 49, 212, 0.1)",
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
  },
  contentTitle: {
    marginRight: 12,
    fontFamily: boldFontFamily,
    lineHeight: 30,
  },
  contentText: {
    lineHeight: 30,
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
