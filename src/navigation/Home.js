import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { boldFontFamily } from "../constant/fonts";
import HomeContainer from "../domain/Home/container/HomeContainer";

const Stack = createStackNavigator();
const homeScreen = {
  Home: HomeContainer,
};

const HomeNavigator = () => {
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
      {Object.entries({ ...homeScreen }).map(([name, component]) => (
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
