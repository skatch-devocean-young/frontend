import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import Text from "../../../components/MyText";
import { mainColor, whiteColor } from "../../../constant/colors";
import { mediumFontFamily } from "../../../constant/fonts";
import { useNavigation } from "@react-navigation/core";
import CustomImage from "../../../components/CustomImage";

export default function FestaThumbItem({ festa }) {
  const navigaiton = useNavigation();
  const handlePress = () => {
    // TODO: 나중에는 정보도 같이 넘기기 (id로 조회할 수 있도록)
    // navigation.navigate('DetailPin', { id: id, index: index });
    navigaiton.navigate("FestaDetail", { item: festa, title: festa.title });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <CustomImage source={{ uri: festa.image }} style={styles.img} />
        <Text style={styles.title}>{festa.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 250,
    borderRadius: 20,
    backgroundColor: mainColor,
    marginRight: 16,
    paddingHorizontal: 16,
    paddingVertical: 36,
  },
  title: {
    fontFamily: mediumFontFamily,
  },
  img: {
    width: 180,
    height: 250,
    borderRadius: 20,
    position: "absolute",
  },
});
