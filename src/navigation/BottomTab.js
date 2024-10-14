import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./Home";
import AlbumNavigator from "./Album";
import MypageNavigator from "./Mypage";
import CustomBottomTab from "../components/CustomBottomTab";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const userBottomTabScreens = {
  BottomTabHome: HomeNavigator,
  BottomTabAlbum: AlbumNavigator,
  BottomTabMypage: MypageNavigator,
};
const hostBottomTabScreens = {
  BottomTabHome: HomeNavigator,
  BottomTabMypage: MypageNavigator,
};
const BottomTab = () => {
  const { appMode } = useSelector((state) => state.status);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="BottomTabHome"
      tabBar={(props) => <CustomBottomTab {...props} />}
    >
      {appMode == "user" &&
        Object.entries({
          ...userBottomTabScreens,
        }).map(([name, component]) => (
          <Tab.Screen
            options={{
              unmountOnBlur: true,
            }}
            listeners={({ navigation }) => ({
              blur: () => navigation.setParams({ screen: undefined }),
            })}
            key={name}
            name={name}
            component={component}
          />
        ))}
      {appMode == "host" &&
        Object.entries({
          ...hostBottomTabScreens,
        }).map(([name, component]) => (
          <Tab.Screen
            options={{
              unmountOnBlur: true,
            }}
            listeners={({ navigation }) => ({
              blur: () => navigation.setParams({ screen: undefined }),
            })}
            key={name}
            name={name}
            component={component}
          />
        ))}
    </Tab.Navigator>
  );
};
export default BottomTab;
