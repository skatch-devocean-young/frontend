import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import Text from "../../../components/MyText";
import { whiteColor } from "../../../constant/colors";
import { mediumFontFamily } from "../../../constant/fonts";
import { useNavigation } from "@react-navigation/core";

export default function FestaThumbItem({ item }) {
  const navigaiton = useNavigation();
  const handlePress = () => {
    // TODO: 나중에는 정보도 같이 넘기기 (id로 조회할 수 있도록)
    // navigation.navigate('DetailPin', { id: id, index: index });
    navigaiton.navigate("FestaDetail");
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 240,
    borderRadius: 20,
    backgroundColor: whiteColor,
    marginRight: 12,
    paddingHorizontal: 16,
    paddingVertical: 36,
  },
  title: {
    fontFamily: mediumFontFamily,
  },
});
