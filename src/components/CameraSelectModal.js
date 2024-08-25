import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import Text from "./MyText";
import { borderColor } from "../constant/colors";
import { boldFontFamily } from "../constant/fonts";
import { shadowStyle, windowHeight, windowWidth } from "../constant/styles";

const CameraSelectModal = (props) => {
  const { isVisible, openCamera, openImageLibrary, cancelModal } = props;
  return (
    <Modal
      {...props}
      style={styles.modalContainer}
      animationIn="slideInUp"
      onBackdropPress={cancelModal}
      hasBackdrop
      deviceHeight={windowHeight}
      deviceWidth={windowWidth}
      backdropColor="gray"
      backdropOpacity={0.6}
      isVisible={isVisible}
      onBackButtonPress={() => cancelModal()}
    >
      <View style={styles.modalButtonContainer}>
        <Pressable
          onPress={openImageLibrary}
          style={[
            styles.modalButton,
            { borderBottomColor: borderColor, borderBottomWidth: 2 },
          ]}
        >
          <Text style={styles.modalButtonText}>갤러리에서 가져오기</Text>
        </Pressable>
        <Pressable onPress={openCamera} style={styles.modalButton}>
          <Text style={styles.modalButtonText}>지금 찍기</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default CameraSelectModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalButtonContainer: {
    width: 350,
    height: 105,
    backgroundColor: "white",
    alignItems: "center",

    marginBottom: 35,
    borderRadius: 12,
    borderColor,
    borderWidth: 2,

    ...shadowStyle,
  },
  modalButton: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonText: {
    fontFamily: boldFontFamily,
  },
});
