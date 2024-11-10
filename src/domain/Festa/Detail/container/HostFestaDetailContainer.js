import { View, Text } from "react-native";
import React, { useEffect } from "react";
import HostFestaDetailScreen from "../screen/HostFestaDetailScreen";

export default function HostFestaDetailContainer({ navigation, route }) {
  const { params } = route;
  const { item } = params;

  useEffect(() => {
    console.log(item.capacity);
    navigation.setOptions({
      headerTitle: "행사 상세 정보",
    });
  }, []);

  return <HostFestaDetailScreen item={item} />;
}
