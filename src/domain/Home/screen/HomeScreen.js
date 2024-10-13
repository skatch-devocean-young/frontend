import {
  View,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Text from "../../../components/MyText";
import { useEffect } from "react";
import {
  boldFontFamily,
  boldFontSize,
  extraBoldFontSize,
} from "../../../constant/fonts";
import { backgroundColor, blackColor } from "../../../constant/colors";
import FestaThumbItem from "../../Festa/component/FestaThumbItem";
import FloatingTicket from "../components/FloatingTicket";
import FestaPreview from "../../Festa/component/FestaPreview";

const feedList = [
  {
    name: "데보션영 밋업",
  },
  {
    name: "1",
  },
  {
    name: "2",
  },
];

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
export default function HomeScreen({ festaList, topList }) {
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
          <Text style={styles.title}>행사 피드</Text>
        </View>
      </SafeAreaView>
    );
  };

  const renderItem = ({ item, index }) => {
    return <FestaThumbItem festa={item} />;
  };

  const handleFullContent = () => {
    navigaiton.navigate("FestaFeed");
    // navigaiton.navigate("TicketDeco");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {topList.length > 0 ? (
          <View style={styles.festaContainer}>
            <Text style={styles.topTitle}>요즘 뜨는 이벤트</Text>
            <FlatList
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              data={topList}
              horizontal
              disableVirtualization={false}
              contentContainerStyle={styles.itemWrapper}
              renderItem={({ item, index }) => renderItem({ item, index })}
              onEndReachedThreshold={0.7}
              keyExtractor={(item, index) => `${item.id}-${index}`}
            />
          </View>
        ) : (
          <View style={[styles.nullContainer]}>
            <Text>피드가 없습니다</Text>
          </View>
        )}

        <View style={styles.feedContainer}>
          <TouchableWithoutFeedback onPress={handleFullContent}>
            <View style={styles.fullContainer}>
              <Text style={styles.fullBtn}>전체보기 ></Text>
            </View>
          </TouchableWithoutFeedback>
          {festaList.length > 0 ? (
            festaList.map((item, index) => (
              <FestaPreview festa={item} key={index} />
            ))
          ) : (
            <View style={[styles.nullContainer]}>
              <Text>피드가 없습니다</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.floatContainer}>
        <FloatingTicket />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 1000,
  },
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
  festaContainer: {
    paddingTop: 16,
    paddingBottom: 26,
    height: 330,
    // backgroundColor: "red",
  },
  nullContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  topTitle: {
    paddingHorizontal: 26,
    marginBottom: 12,
    fontFamily: boldFontFamily,
    fontSize: boldFontSize,
    color: "black",
  },
  itemWrapper: {
    paddingHorizontal: 24,
  },
  floatContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  feedContainer: {
    // paddingTop: 21,
    paddingHorizontal: 20,
    paddingBottom: 500,
  },
  fullContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 12,
  },
  fullBtn: {
    color: blackColor,
    fontFamily: boldFontFamily,
  },
});
