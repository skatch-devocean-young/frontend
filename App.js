/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
"use client";
import React, { useEffect, useRef } from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { backgroundColor } from "./src/constant/colors";
import { getAppMode, getIsHost } from "./src/function";
import { setAppMode, setIsHost } from "./src/redux/modules/status";
import { Provider, useDispatch } from "react-redux";
import store from "./src/redux/store";
import ErrorHandler from "./src/components/ErrorHandler";

const App = () => {
  const dispatch = useDispatch();

  const isDarkMode = useColorScheme() === "dark";

  const navigationRef = useRef();
  const routeNameRef = useRef();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : backgroundColor,
  };

  // Access Token 관리
  useEffect(() => {
    loadEssentialData();
    dispatch(setIsHost(true)); // 임시
  }, [loadEssentialData]);

  const loadEssentialData = async () => {
    // const isHostAsync = await getIsHost();
    // if (isHostAsync === null) {
    //   await setIsHost("0");
    //   dispatch(setIsHost(false));
    // } else {
    //   dispatch(setIsHost(isHostAsync));
    // }

    const appModeAsync = await getAppMode();
    if (appModeAsync === null) {
      await setAppMode("user");
      dispatch(setAppMode("user"));
    } else {
      dispatch(setAppMode(appModeAsync));
    }
  };

  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: '카메라 접근 권한 허용',
  //         message: 'GaDa가 카메라 접근 권한을 요청합니다.',
  //         buttonNegative: '취소',
  //         buttonPositive: '확인',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       // console.log('You can use the camera');
  //     } else {
  //       // console.log('Camera permission denied');
  //       // RNRestart.Restart();
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;

          routeNameRef.current = currentRouteName;
        }}
      >
        {/* <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        /> */}
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <ErrorHandler>
        <App />
      </ErrorHandler>
    </Provider>
  );
};
export default AppWrapper;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});
