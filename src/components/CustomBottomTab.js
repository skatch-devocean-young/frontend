import React, {useEffect, useState} from 'react';
import {
  Platform,
  Keyboard,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import Text from './MyText';
//import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FeedFocusedIcon,
  FeedIcon,
  FriendsFocusedIcon,
  FriendsIcon,
  HomeFocusedIcon,
  HomeIcon,
  RecordFocusedIcon,
  RecordIcon,
} from '../constant/images/BottomTab';
import CustomImage from './CustomImage';
import {bottomShadowStyle, topShadowStyle} from '../constant/styles';

const getIcon = state => {
  switch (state) {
    case 'BottomTabHome':
      return HomeIcon;
    case 'BottomTabHomeFocused':
      return HomeFocusedIcon;
    case 'BottomTabAlbum':
      return FeedIcon;
    case 'BottomTabAlbumFocused':
      return FeedFocusedIcon;
    case 'BottomTabMypage':
      return FriendsIcon;
    case 'BottomTabMypageFocused':
      return FriendsFocusedIcon;
    case 'BottomTabRecord':
      return RecordIcon;
    case 'BottomTabRecordFocused':
      return RecordFocusedIcon;

    default:
      return HomeIcon;
  }
  // return Home;
};
const changeToKor = name => {
  switch (name) {
    case 'BottomTabHome':
      return '행사 피드';
    case 'BottomTabAlbum':
      return '티켓 앨범';
    case 'BottomTabMypage':
      return '마이페이지';
    default:
      return '';
  }
};
const BottomTabBar = ({state, handlePress}) => {
  return (
    //<SafeAreaView edges={['bottom']}>
    <View style={style.tabContainer}>
      {state.routes.map(({name, key}, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            activeOpacity={1.0}
            key={key}
            style={{flex: 1}}
            onPress={() => handlePress(key, name)}>
            <View style={style.tab}>
              {isFocused ? (
                <CustomImage
                  source={getIcon(`${name}Focused`)}
                  style={style.icon}
                />
              ) : (
                <CustomImage source={getIcon(`${name}`)} style={style.icon} />
              )}
              <View style={style.nameWrapper}>
                <Text style={[style.name]}>{changeToKor(name)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
    // </SafeAreaView>
  );
};
const CustomBottomTab = props => {
  const [visible, setVisible] = useState(true);
  const {state, navigation} = props;
  // const {bottomTabVisible} = useSelector(state => state.status);
  useEffect(() => {
    let keyboardEventListeners = [];
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners.length >= 1 &&
          keyboardEventListeners.forEach(eventListener =>
            eventListener.remove(),
          );
      }
    };
  }, []);
  const handlePress = (key, name) => {
    // setAlarmClose(name);
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
      unmountOnBlur: true,
    });

    // if ((name === 'Mypage' || name === 'Chatting') && !isAuthenticated) {
    //   UnkUserMeetSignUpMyPageBar();
    //   navigation.navigate('SignIn');
    // } else {
    //   navigation.navigate(name);
    // }
    navigation.navigate(name);
  };
  if (!visible) return null;
  return (
    <SafeAreaView edges={['bottom']}>
      <BottomTabBar state={state} handlePress={handlePress} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    ...topShadowStyle,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 29,
    height: 29,
  },
  nameWrapper: {
    marginTop: 3.5,
  },
  name: {
    fontSize: 10,
  },
});

export default CustomBottomTab;
