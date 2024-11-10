import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import FestaEditScreen from "../screen/FestaEditScreen";
import { useNavigation } from "@react-navigation/core";

export default function FestaModifyContainer({ navigation, route }) {
  const { params } = route;
  const { item } = params;

  useEffect(() => {
    console.log("hi");
    console.log(item);
    navigation.setOptions({
      headerTitle: "행사 정보 수정",
    });
  }, []);

  return <FestaEditScreen />;
}

const styles = StyleSheet.create({});
