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
import FestaThumbItem from "../../Festa/component/FestaThumbItem";
import FloatingTicket from "../components/FloatingTicket";

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
export default function HomeScreen() {
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
    return <FestaThumbItem item={item} />;
  };

  return (
    <View style={styles.container}>
      {feedList.length > 0 ? (
        <View style={styles.festaContainer}>
          <FlatList
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            data={feedList}
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
      <View style={styles.floatContainer}>
        <FloatingTicket />
      </View>
    </View>
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
  festaContainer: {
    paddingVertical: 26,
    // backgroundColor: "red",
    height: 300,
  },
  nullContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
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
});
