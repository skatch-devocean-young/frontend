import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import Text from "../../../components/MyText";
import { backgroundColor } from "../../../constant/colors";
import FestaPreview from "../component/FestaPreview";

const list = [
  {
    title: "Tech Day",
    host_name: "SKT",
    start_date: "2024-08-29",
    end_date: "2024-08-29",
    place_address: "서대문구 서대문로 80",
    hashs: ["IT", "개발"],
  },
  {
    title:
      "신영문화재단 건축문화상 포스터 디자인 공모전ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ",
    host_name: "신영문화재단",
    start_date: "2024-09-27",
    end_date: "2024-09-27",
    place_address: "용산구 원효로 80",
    hashs: ["건축", "디자인"],
  },
];

export default function FestaFeedScreen() {
  const navigaiton = useNavigation();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {list.length > 0 &&
          list.map((item, index) => <FestaPreview festa={item} key={index} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 1000,
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: 30,
  },
  container: {
    paddingHorizontal: 20,
  },
});
