import {
  StyleSheet,
  View,
  useColorScheme,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import Text from "../../../components/MyText";
import { backgroundColor } from "../../../constant/colors";
import NavHeader from "../../../components/NavHeader";
import CustomButton from "../../../components/CustomButton";
import { PlusIcon } from "../../../constant/images/icons";
import FestaPreview from "../../Festa/component/FestaPreview";

export default function HostHomeScreen({ festaList }) {
  const navigation = useNavigation();

  const handleNewFesta = () => {
    navigation.navigate("");
  };

  const renderItem = ({ item, index }) => {
    return <FestaPreview festa={item} mode={"host"} />;
  };
  // useEffects -----------------------------------------------
  useEffect(() => {
    navigation.setOptions({
      header: () => <NavHeader title={"행사 관리"} />,
    });
  }, []);

  // return -----------------------------------------------
  return (
    <View style={styles.container}>
      <CustomButton
        title={"신규 행사 등록하기"}
        handlePress={handleNewFesta}
        imagable={true}
        imgSource={PlusIcon}
      />
      <FlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        data={festaList}
        disableVirtualization={false}
        contentContainerStyle={styles.itemWrapper}
        renderItem={({ item, index }) => renderItem({ item, index })}
        onEndReachedThreshold={0.7}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
});
