import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Text from './MyText';
import { buttonColor } from '../constant/colors';
import { useState } from 'react';
import CenterModal from './CenterModal';
import { useNavigation } from '@react-navigation/core';

const CancelButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  const handleCancle = () => {
    navigation.navigate('Home', {refresh: {}});
  };
  return (
    <TouchableWithoutFeedback onPress={openModal}>
      <View style={styles.container}>
        <Text style={styles.text}>등록취소</Text>
        <CenterModal
          isVisible={isVisible}
          closeModal={closeModal}
          handleConfirm={closeModal} // 공유하기
          secondHandleConfirm={handleCancle}
          // renderMainBody={shareModalBody}
          mainText="작성을 취소하시겠어요?"
          content={`작성 내용과 산책기록이\n모두 사라집니다`}
          buttonText="계속 작성하기"
          secondButtonText="취소하기"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CancelButton;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  text: {
    color: buttonColor,
  },
});
