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

const ticketDetailScreen = {
  TicketDetail: TicketDetailContainer,
};
const festaDetailScreen = {
  FestaDetail: FestaDetailContainer,
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
        ...festaDetailScreen,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "행사 상세",
            headerShown: true,
            headerLeft: () => <BackButton />,
            headerTitle: "행사 상세",
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

      <RootStack.Screen name="BottomTab" component={BottomTab} />
    </RootStack.Navigator>
  );
};
export default RootNavigation;
