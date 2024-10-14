import { StyleSheet, View, useColorScheme, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import Text from "../../../components/MyText";
import { backgroundColor, blackColor } from "../../../constant/colors";
import NavHeader from "../../../components/NavHeader";

export default function HostHomeScreen() {
  const navigation = useNavigation();

  // useEffects -----------------------------------------------
  useEffect(() => {
    navigation.setOptions({
      header: () => <NavHeader title={"행사 관리"} />,
    });
  }, []);

  // return -----------------------------------------------
  return (
    <View>
      <Text>HostHomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
