import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  backgroundColor,
  borderColor,
  defaultColor,
  mainColor,
} from "../../../constant/colors";
import Devider from "../../../components/Devider";
import {
  boldFontFamily,
  defaultFontFamily,
  defaultFontSize,
} from "../../../constant/fonts";
import CustomButton from "../../../components/CustomButton";
import CustomImage from "../../../components/CustomImage";
import { useNavigation } from "@react-navigation/core";
import Spinner from "react-native-loading-spinner-overlay";

export default function FestaDetailScreen({ item }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate("Complete", {
        content: `참여신청을\n 완료하였습니다.`,
      });
      setIsLoading(false);
    }, 250);
  };

  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.posterContainer}>
            {/* <View style={styles.posterItem} /> */}
            <CustomImage
              source={{ uri: item.image }}
              style={styles.posterItem}
            />
          </View>
          <Devider />

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>일시</Text>
              <Text style={styles.contentText}>{item.date}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>주최</Text>
              <Text style={styles.contentText}>{item.host_name}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>인원</Text>
              <Text style={styles.contentText}>{item.capacity}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>장소</Text>
              <Text style={styles.contentText}>{item.place_address}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>가격</Text>
              <Text style={styles.contentText}>{item.price}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.contentTitle}>신청일자</Text>
              <Text style={styles.contentText}>{item.end_date}</Text>
            </View>
          </View>

          <Devider />

          <View style={styles.detailContainer}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          {isLoading && <Spinner visible={isLoading} />}
        </View>
      </ScrollView>
      <CustomButton title={"참여하기"} handlePress={handlePress} />
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
    width: 70,
  },
  contentText: {
    lineHeight: 30,
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 24,
  },
  description: {
    textAlign: "left",
    fontSize: defaultFontSize,
    fontFamily: defaultFontFamily,
    lineHeight: 22,
  },
});
