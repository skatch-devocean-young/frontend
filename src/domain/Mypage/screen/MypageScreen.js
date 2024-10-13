import {
  View,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Text from "../../../components/MyText";
import { useEffect, useState } from "react";
import { boldFontFamily } from "../../../constant/fonts";
import {
  backgroundColor,
  blackColor,
  greyColor,
  mainColor,
  whiteColor,
} from "../../../constant/colors";
import React from "react";
import MyInfo from "../component/MyInfo";
import Devider from "../../../components/Devider";
import CustomImage from "../../../components/CustomImage";
import { Arrow } from "../../../constant/images/Arrow";

const list = [
  {
    title: "푸시알림",
    toggle: 1,
  },
  {
    title: "로그아웃",
    toggle: 0,
  },
  {
    title: "앱 탈퇴",
    toggle: 0,
  },
];
export default function MypageScreen() {
  const isDarkMode = useColorScheme() === "dark";
  const navigation = useNavigation();

  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsPushEnabled((previousState) => !previousState);

  useEffect(() => {
    navigation.setOptions({
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

  const handleNavigate = (title) => {
    // navigation.navigate("Home", { refresh: {} });
    console.log(title);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.myInfoContainer}>
          <MyInfo />
        </View>
        <Devider color={mainColor} />
      </View>

      {list.map((item, index) => (
        <TouchableWithoutFeedback
          onPress={() => handleNavigate(item.title)}
          key={index}
        >
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            {item.toggle ? (
              <Switch
                trackColor={{ false: greyColor, true: mainColor }}
                thumbColor={whiteColor}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isPushEnabled}
              />
            ) : (
              <CustomImage source={Arrow} style={styles.itemIcon} />
            )}
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  container: {
    width: "100%",
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
    marginEnd: 8,
  },

  myInfoContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 8,
    paddingHorizontal: 20,
  },

  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemIcon: {
    width: 16,
    height: 16,
  },
});
