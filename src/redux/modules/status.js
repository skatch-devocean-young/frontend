// action
const SET_IS_HOST = "status/SET_IS_HOST";
const SET_APP_MODE = "status/SET_APP_MODE";

// action 생성 함수
export const setIsHost = (value) => ({
  type: SET_IS_HOST,
  value,
});
export const setAppMode = (value) => ({
  type: SET_APP_MODE,
  value,
});

// reducer initial state
const initialState = {
  isHost: false,
  appMode: "user",
};

// reducer
export default function status(state = initialState, action) {
  switch (action.type) {
    case SET_IS_HOST:
      return {
        ...state,
        isHost: action.value,
      };
    case SET_APP_MODE:
      return {
        ...state,
        appMode: action.value,
      };

    default:
      return state;
  }
}
