import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { boldFontFamily } from "../constant/fonts";
import HomeContainer from "../domain/Home/container/UserHomeContainer";
import HostHomeContainer from "../domain/Home/container/HostHomeContainer";
import { getAppMode, getIsHost } from "../function";
import { useSelector } from "react-redux";
import UserHomeContainer from "../domain/Home/container/UserHomeContainer";

const Stack = createStackNavigator();
const userHomeScreen = {
  Home: UserHomeContainer,
};
const hostHomeScreen = {
  HostHome: HostHomeContainer,
};

const HomeNavigator = () => {
  const [isHost, setIsHost] = useState(false);

  const { appMode } = useSelector((state) => state.status);
  // const { isAuthenticated } = useSelector((state) => state.user);
  // const { statusBarHeight } = useSelector((state) => state.status);
  useEffect(() => {
    getIsHost().then((value) => {
      setIsHost(value);
    });
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        Object.entries({ ...userHomeScreen }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title: "행사 피드",
              headerLeft: null,
              headerRight: null,
              // header: () => <HeaderComponent title="피드" />,
            }}
          />
        ))}
      {appMode == "host" &&
        Object.entries({ ...hostHomeScreen }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title: "행사 피드",
              headerLeft: null,
              headerRight: null,
              // header: () => <HeaderComponent title="피드" />,
            }}
          />
        ))}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
