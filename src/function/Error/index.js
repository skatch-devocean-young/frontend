import Toast from "react-native-toast-message";
import RNRestart from "react-native-restart";
import { Alert } from "react-native";

export const showErrorToastMessage = (title = null, err = null) => {
  Toast.show({
    type: "error",
    position: "bottom",
    text1: title || "에러발생",
    text2: err,
    autoHide: true,
    bottomOffset: 30,
  });
};

export const showSuccessToastMessage = (title = null, text = null) => {
  Toast.show({
    type: "success",
    position: "bottom",
    bottomOffset: 30,
    text1: title || "성공",
    text2: text,
  });
};

export const showInfoToastMessage = (title, body) => {
  Toast.show({
    type: "info",
    position: "top",
    topOffset: 40,
    text1: title,
    text2: body,
  });
};

export const reloadApp = () => {
  Alert.alert(
    "예기치 않은 문제가 발생하였습니다.",
    "어플을 다시 실행해주세요",
    [
      {
        text: "다시 시작하기",
        onPress: () => RNRestart.Restart(),
      },
    ]
  );
};
