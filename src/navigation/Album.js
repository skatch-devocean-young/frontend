import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { boldFontFamily } from "../constant/fonts";
import AlbumContainer from "../domain/Album/container/AlbumContainer";

const Stack = createStackNavigator();
const albumScreen = {
  Album: AlbumContainer,
};

const AlbumNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Album"
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
      {Object.entries({ ...albumScreen }).map(([name, component]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "",
            headerLeft: null,
            headerRight: null,
            // header: () => <HeaderComponent title="피드" />,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AlbumNavigator;
