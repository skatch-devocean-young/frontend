import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import BottomTab from "./BottomTab";

import BackButton from "../components/BackButton";

import { boldFontFamily } from "../constant/fonts";
import TicketDetailContainer from "../domain/Ticket/container/TicketDetailContainer";

import TicketDecoContainer from "../domain/Ticket/container/TicketDecoContainer";
import SaveCompleteScreen from "../domain/Ticket/screen/SaveCompleteScreen";
import CompleteScreen from "../components/CompleteScreen";
import FestaFeedContainer from "../domain/Festa/Feed/container/FestaFeedContainer";
import FestaDetailContainer from "../domain/Festa/Detail/container/FestaDetailContainer";
import FestaCreateContainer from "../domain/Festa/Edit/container/FestaCreateContainer";
import FestaModifyContainer from "../domain/Festa/Edit/container/FestaModifyContainer";
import { backgroundColor, whiteColor } from "../constant/colors";
import { headerStyle } from "../constant/styles";
import HostFestaDetailContainer from "../domain/Festa/Detail/container/HostFestaDetailContainer";
import FestaManageContainer from "../domain/Festa/Manage/container/FestaManageContainer";

const festaFeedScreen = {
  FestaFeed: FestaFeedContainer,
};
const festaDetailScreen = {
  FestaDetail: FestaDetailContainer,
};
const festaEditScreens = {
  FestaCreate: FestaCreateContainer,
  FestaModify: FestaModifyContainer,
};
const hostFestaDetailScreen = {
  HostFestaDetail: HostFestaDetailContainer,
};
const festaManageScreens = {
  FestaManage: FestaManageContainer,
};

const ticketDetailScreen = {
  TicketDetail: TicketDetailContainer,
};
const ticketDecoScreen = {
  TicketDeco: TicketDecoContainer,
};
const saveCompleteScreen = {
  TicketSaveComplete: SaveCompleteScreen,
};
const completeScreen = {
  Complete: CompleteScreen,
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
            ...headerStyle,
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
              ...headerStyle,
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
            ...headerStyle,
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
            ...headerStyle,
          }}
        />
      ))}
      {Object.entries({
        ...saveCompleteScreen,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "티켓 꾸미기 저장 완료",
            headerShown: false,
            headerLeft: () => <BackButton />,
            headerTitle: "티켓 꾸미기 저장 완료",
            ...headerStyle,
          }}
        />
      ))}
      {Object.entries({
        ...completeScreen,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "완료",
            headerShown: false,
            headerLeft: () => <BackButton />,
            headerTitle: "완료",
            ...headerStyle,
          }}
        />
      ))}
      {Object.entries({
        ...festaEditScreens,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "공연 정보 수정",
            headerShown: true,
            headerLeft: () => <BackButton />,
            headerTitle: "공연 정보 수정",
            ...headerStyle,
          }}
        />
      ))}
      {Object.entries({
        ...hostFestaDetailScreen,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "공연 상세 정보",
            headerShown: true,
            headerLeft: () => <BackButton />,
            headerTitle: "공연 상세 정보",
            ...headerStyle,
          }}
        />
      ))}
      {Object.entries({
        ...festaManageScreens,
      }).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: "공연 관리",
            headerShown: true,
            headerLeft: () => <BackButton />,
            headerTitle: "공연 관리",
            ...headerStyle,
          }}
        />
      ))}
      <RootStack.Screen name="BottomTab" component={BottomTab} />
    </RootStack.Navigator>
  );
};
export default RootNavigation;
