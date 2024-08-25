import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";
import BottomTab from "./BottomTab";

import BackButton from "../components/BackButton";
import CancelButton from "../components/CancelButton";

import { boldFontFamily } from "../constant/fonts";
import TicketDetailContainer from "../domain/Ticket/container/TicketDetailContainer";
import FestaDetailContainer from "../domain/Festa/container/FestaDetailContainer";
import FestaFeedContainer from "../domain/Festa/container/FestaFeedContainer";
import TicketDecoContainer from "../domain/Ticket/container/TicketDecoContainer";

const festaFeedScreen = {
  FestaFeed: FestaFeedContainer,
};
const festaDetailScreen = {
  FestaDetail: FestaDetailContainer,
};
const ticketDetailScreen = {
  TicketDetail: TicketDetailContainer,
};
const ticketDecoScreen = {
  TicketDeco: TicketDecoContainer,
};

const RootStack = createStackNavigator();
const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerMode: "float",
        gestureDirection: "horizontal",
        headerShown: false,
        cardStyle: { backgroundColor: "#fff", opacity: 1 },
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
        headerTitleAlign: "center",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        presentation: "modal",
      }}
      initialRouteName="BottomTab"
    >
      {Object.entries({
        ...festaFeedScreen,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "전체 행사 목록",
            headerShown: true,
            headerLeft: () => <BackButton />,
            headerTitle: "전체 행사 목록",
          }}
        />
      ))}
      {Object.entries({
        ...festaDetailScreen,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={({ route }) => {
            const { params } = route;
            const { title } = params;

            return {
              title: "행사 상세",
              headerShown: true,
              headerLeft: () => <BackButton />,
              headerTitle: title,
            };
          }}
        />
      ))}
      {Object.entries({
        ...ticketDetailScreen,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "티켓 상세",
            headerShown: true,
            headerLeft: () => <BackButton />,
            headerTitle: "티켓 상세",
          }}
        />
      ))}
      {Object.entries({
        ...ticketDecoScreen,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "티켓 꾸미기",
            headerShown: true,
            headerLeft: () => <BackButton />,
            headerTitle: "티켓 꾸미기",
          }}
        />
      ))}

      <RootStack.Screen name="BottomTab" component={BottomTab} />
    </RootStack.Navigator>
  );
};
export default RootNavigation;
