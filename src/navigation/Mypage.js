import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { boldFontFamily } from "../constant/fonts";
import MypageContainer from "../domain/Mypage/container/MypageContainer";

const Stack = createStackNavigator();
const mypageScreen = {
  Mypage: MypageContainer,
};
const MypageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mypage"
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: "white" },
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: boldFontFamily,
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomColor: "#eaeaea",
          borderBottomWidth: 0.5,
        },
        unmountOnBlur: true,
        title: {},
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleAlign: "center",
        header: () => <SafeAreaView edges={["top"]}></SafeAreaView>,
      }}
    >
      {Object.entries({ ...mypageScreen }).map(([name, component]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "",
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MypageNavigator;
