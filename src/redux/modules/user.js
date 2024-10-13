// action
const SET_USER = 'user/SET_USER';
const SET_IS_AUTHENTICATED = 'user/SET_IS_AUTHENTICATED';
const SET_USER_ID = 'user/SET_USER_ID';
const SET_LOGIN_ID = 'user/SET_LOGIN_ID';
const SET_PW = 'user/SET_PW';
const SET_NICKNAME = 'user/SET_NICKNAME';
const SET_USER_IMAGE = 'user/SET_USER_IMAGE';

// action 생성 함수
export const setUser = value => ({
  type: SET_USER,
  value,
});

export const setIsAuthenticated = boolean => ({
  type: SET_IS_AUTHENTICATED,
  boolean,
});

export const setUserId = value => ({
  type: SET_USER_ID,
  value,
});

export const setLoginId = value => ({
  type: SET_LOGIN_ID,
  value,
})
export const setPW = value => ({
  type: SET_PW,
  value,
});

export const setNickname = value => ({
  type: SET_NICKNAME,
  value,
});

export const setUserImage = value=> ({
  type: SET_USER_IMAGE,
  value,
})

// reducer initial state
const initialState = {
  isAuthenticated: false,
  userId: '',
  loginId: '',
  pw: '',
  nickname: '',
  userImage: '',
};

// reducer
export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const user = action.value;
      return {
        ...state,
        userId: user.id,
        loginId: user.loginId,
        pw: user.pw,
        nickname: user.nickname,
        userImage: user.image,
      };
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.boolean,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.value,
      };
    case SET_LOGIN_ID:
      return {
        ...state,
        loginId: action.value,
      }
    case SET_PW:
      return {
        ...state,
        pw: action.value,
      };

    case SET_NICKNAME:
      return {
        ...state,
        nickname: action.value,
      };
    case SET_USER_IMAGE:
      return{
        ...state,
        userImage: action.value,
      }
    default:
      return state;
  }
}
