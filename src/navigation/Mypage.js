import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { boldFontFamily } from "../constant/fonts";
import HostMypageContainer from "../domain/Mypage/container/HostMypageContainer";
import UserMypageContainer from "../domain/Mypage/container/UserMypageContainer";
import { getIsHost } from "../function";
import { setIsHost } from "../redux/modules/status";

const Stack = createStackNavigator();
const userMypageScreen = {
  UserMyPage: UserMypageContainer,
};
const hostMypagescreen = {
  HostMyPage: HostMypageContainer,
};
const MypageNavigator = () => {
  const { appMode } = useSelector((state) => state.status);

  useEffect(() => {
    getIsHost().then((value) => {
      setIsHost(value);
    });
  }, []);

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
      {appMode == "user" &&
        Object.entries({ ...userMypageScreen }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title: "",
            }}
          />
        ))}
      {appMode == "host" &&
        Object.entries({ ...hostMypagescreen }).map(([name, component]) => (
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
