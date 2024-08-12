import React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Text from './MyText';
import { boldFontFamily, boldFontSize } from '../constant/fonts';
import {
  backgroundColor,
  blackColor,
  borderColor,
  descriptionColor,
  emphasisColor,
  mainColor,
} from '../constant/colors';
import { windowHeight, windowWidth } from '../constant/styles';
import CustomImage from './CustomImage';
import CloseIcon from '../constant/images/Close';
import CustomButton from './CustomButton';

const CenterModal = ({
  mainText = '사용자님의 산책을\n기록할게요',
  content = '동선기록을 시작합니다.\n즐거운 산책경험을 만드세요!',
  isVisible = false,
  closeModal,
  handleConfirm,
  secondHandleConfirm = null,
  version = 1,
  renderMainBody = null,
  buttonText = '기록 시작',
  secondButtonText = null,
}) => {
  return (
    <Modal
      style={styles.modalContainer}
      animationIn="slideInUp"
      isVisible={isVisible}
      onBackdropPress={closeModal}
      hasBackdrop
      deviceHeight={windowHeight}
      deviceWidth={windowWidth}
      backdropColor="gray"
      backdropOpacity={0.5}
    >
      {renderMainBody ? (
        <View style={styles.modalWrapper}>{renderMainBody()}</View>
      ) : (
        <View style={styles.modalWrapper}>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>{mainText}</Text>
            <TouchableWithoutFeedback onPress={closeModal}>
              <CustomImage source={CloseIcon} style={styles.close} />
            </TouchableWithoutFeedback>
          </View>
          <View
            style={[
              styles.middleContainer,
              secondButtonText !== null && { marginBottom: 38 },
            ]}
          >
            <Text style={styles.content}>{content}</Text>
          </View>
          <CustomButton
            title={buttonText}
            style={styles.button}
            textStyle={{fontSize: 16, lineHeight: 31}}
            handlePress={handleConfirm}
          />
          {secondButtonText !== null && (
            <CustomButton
              title={secondButtonText}
              style={styles.button}
              textStyle={{fontSize: 16, lineHeight: 31}}
              handlePress={secondHandleConfirm}
              backgroundColor={'#AAAAAA'}
            />
          )}
        </View>
      )}
    </Modal>
  );
};

export default CenterModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 41,
  },
  modalWrapper: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 24,
    paddingHorizontal: 18,
    borderRadius: 15,
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: boldFontFamily,
    fontSize: 20,
    color: 'black',
    lineHeight: 31,
  },
  close: {
    width: 24,
    height: 24,
  },
  middleContainer: {
    marginTop: 10,
    marginBottom: 60,
  },
  content: {
    lineHeight: 20,
    color: descriptionColor,
  },
  button: {
    position: 'relative',
    width: '100%',
    marginTop: 13,
    paddingBottom: 0,
    paddingTop: 0,
    paddingHorizontal: 0,
    justifyContent: 'flex-start',
    shadowColor: 'rgba(0,0,0,0)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
  },
});
