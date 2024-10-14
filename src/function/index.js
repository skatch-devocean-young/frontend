import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from "react-native-restart";
import { reloadApp } from "./Error";
import store from "../redux/store";
import { setAppMode } from "../redux/modules/status";

export const storeInLocalStorage = async (accessToken, refreshToken) => {
  await AsyncStorage.setItem("access_token", accessToken);
  await AsyncStorage.setItem("refresh_token", refreshToken);
};

export const removeInLocalStorage = () => {
  try {
    AsyncStorage.removeItem("access_token");
    AsyncStorage.removeItem("refresh_token");
  } catch (error) {
    reloadApp();
  }
};

export const getAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem("access_token");
    return accessToken;
  } catch {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
    reloadApp();
  }
  return null;
};

export const storeIsHost = async (status) => {
  store.dispatch(setIsHost(status === "1"));
  await AsyncStorage.setItem("isHost", status);
};

export const removeIsHost = async () => {
  store.dispatch(setIsHost(false));
  await AsyncStorage.removeItem("isHost");
};

export const getIsHost = async () => {
  const isHost = await AsyncStorage.getItem("isHost");
  return isHost === "1";
};

export const changeIsHost = async (status) => {
  store.dispatch(setIsHost(status === "1"));
  await AsyncStorage.setItem("isHost", status);
  RNRestart.Restart();
};

export const getAppMode = async () => {
  const appMode = await AsyncStorage.getItem("appMode");
  return appMode;
};

export const changeAppMode = async (mode) => {
  store.dispatch(setAppMode(mode));
  await AsyncStorage.setItem("appMode", mode);
  RNRestart.Restart();
};

export const AddComma = (num) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ",");
};
