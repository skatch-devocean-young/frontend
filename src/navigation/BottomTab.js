import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./Home";
import AlbumNavigator from "./Album";
import MypageNavigator from "./Mypage";
import CustomBottomTab from "../components/CustomBottomTab";
import { CardStyleInterpolators } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const bottomTabScreens = {
  BottomTabHome: HomeNavigator,
  BottomTabAlbum: AlbumNavigator,
  BottomTabMypage: MypageNavigator,
};
const BottomTab = () => {
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
      {Object.entries({
        ...bottomTabScreens,
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
