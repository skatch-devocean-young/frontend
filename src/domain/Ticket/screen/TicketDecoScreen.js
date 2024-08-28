import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import React, { useRef, useState } from "react";
import {
  accentColor,
  backgroundColor,
  blackColor,
  defaultColor,
  mainColor,
  secondaryColor,
  whiteColor,
} from "../../../constant/colors";
import Text from "../../../components/MyText";

import CustomImage from "../../../components/CustomImage";
import TextIcon from "../../../constant/images/Text";
import {
  boldFontFamily,
  lightFontFamily,
  mediumFontFamily,
} from "../../../constant/fonts";
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import CameraSelectModal from "../../../components/CameraSelectModal";
import ImageCropPicker from "react-native-image-crop-picker";
import { AfterPhoto, BeforePhoto } from "../../../constant/images/Sample";
import { CloseIcon, CloseColorIcon } from "../../../constant/images/Close";
import PhotoAlbumIcon from "../../../constant/images/PhotoAlbum";
import EffectIcon from "../../../constant/images/AiEffect";
import TextArrangeIcon from "../../../constant/images/Arrange";
import ColorIcon from "../../../constant/images/Color";
import MyTextInput from "../../../components/MyTextInput";

export default function TicketDecoScreen() {
  const navigaiton = useNavigation();
  const baseCameraOption = {
    mediaType: "photo",
    includeBase64: true,
    cropping: true,
    cropperCancelText: "취소",
    cropperChooseText: "선택",
    freeStyleCropEnabled: true,
    loadingLabelText: "",
  };
  const baseImageLibraryOption = {
    mediaType: "photo",
    includeBase64: true,
    // multiple: true,
    // maxFiles: 10,
    forceJpg: true,
    loadingLabelText: "",
  };

  const iosOptions = {
    height: 1000,
    width: 1000,
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isDecoVisible, setIsDecoVisible] = useState(false);
  const [isOrigin, setIsOrigin] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isArrangeVisible, setIsArrangeVisible] = useState(false);
  const [isColorVisible, setIsColorVisible] = useState(false);
  const [textInputFocus, setTextInputFocus] = useState(false);
  const [comment, setComment] = useState("코멘트를 입력해주세요.");
  const [isLoading, setIsLoading] = useState(false);

  const textInputRef = useRef();

  const openCamera = () => {
    ImageCropPicker.openCamera(
      Platform.OS === "ios"
        ? { ...baseCameraOption, ...iosOptions }
        : baseCameraOption
    ).then((images) => {
      const uri = `data:${images.mime};base64,${images.data}`;
      setImage(uri);
      dispatch(setImageFile(images));
      cancelModal();
    });
  };

  const openImageLibrary = () => {
    ImageCropPicker.openPicker(
      Platform.OS === "ios"
        ? { ...baseImageLibraryOption, ...iosOptions }
        : baseImageLibraryOption
    ).then((image) => {
      const uri = `data:${image.mime};base64,${image.data}`;
      setImage(uri);
      dispatch(setImageFile(image));
      const imageList = [];
      imageList.push({ imageData: image, image: image.path });

      navigation.navigate("DetailImage", {
        idx: 0,
        images: imageList,
        ver: "pin",
      });
      cancelModal();
    });
  };

  const openModal = () => {
    setIsVisible(true);
  };
  const cancelModal = () => {
    setIsVisible(false);
  };

  function OptionButton({ img, text, style, onPress }) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.btnItem}>
          <CustomImage source={img} style={style} />
          <Text style={styles.btnText}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  function PhotoDecoModal() {
    return (
      <View style={styles.decoContainer}>
        <TouchableWithoutFeedback onPress={handleDecoCloseButton}>
          <View style={styles.closeBtn}>
            <CustomImage source={CloseIcon} style={{ width: 17, height: 22 }} />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.decoBtnContainer}>
          <TouchableWithoutFeedback onPress={handleOriginButton}>
            <View style={styles.decoBtn}>
              <View style={styles.decoBtnItem}>
                <CustomImage
                  source={CloseColorIcon}
                  style={{ width: 18, height: 18 }}
                />
              </View>
              <Text style={styles.decoBtnText}>{"원본"}</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleEffectButton}>
            <View style={styles.decoBtn}>
              <View style={styles.decoBtnItem}>
                <CustomImage
                  source={EffectIcon}
                  style={{ width: 26, height: 22 }}
                />
              </View>
              <Text style={styles.decoBtnText}>{"생성형 AI"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  function TextDecoModal() {
    return (
      <View style={styles.decoContainer}>
        <TouchableWithoutFeedback onPress={handleTextCloseButton}>
          <View style={styles.closeBtn}>
            <CustomImage source={CloseIcon} style={{ width: 17, height: 22 }} />
          </View>
        </TouchableWithoutFeedback>
        {/* <View style={styles.arrangeContainer}>
            <TouchableWithoutFeedback onPress={setArrangeType("left")}>
                <View style={}
            </TouchableWithoutFeedback>
        </View> */}
        <View style={styles.decoBtnContainer}>
          <TouchableWithoutFeedback onPress={handleArrangeButton}>
            <View style={styles.decoBtn}>
              <View style={styles.decoBtnItem}>
                <CustomImage
                  source={TextArrangeIcon}
                  style={{ width: 18, height: 18 }}
                />
              </View>
              <Text style={styles.decoBtnText}>{"정렬"}</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleColorButton}>
            <View style={styles.decoBtn}>
              <View style={styles.decoBtnItem}>
                <CustomImage
                  source={ColorIcon}
                  style={{ width: 26, height: 22 }}
                />
              </View>
              <Text style={styles.decoBtnText}>{"글꼴 색상"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  const handleInitButton = () => {
    setIsOrigin(true);
    setIsVisible(true);
    setIsDecoVisible(true);
  };
  const handleDecoCloseButton = () => {
    setIsDecoVisible(false);
  };

  const handleOriginButton = () => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      setIsOrigin(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  const handleEffectButton = async () => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      setIsOrigin(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  const handleTextButton = () => {
    // setIsTextVisible(true);
    textInputRef.current.focus();
  };

  const handleTextCloseButton = () => {
    setIsTextVisible(false);
  };

  const handleArrangeButton = () => {
    setIsArrangeVisible(true);
  };

  const handleColorButton = () => {
    setIsColorVisible(true);
  };

  const handleSaveButton = () => {
    navigaiton.navigate("TicketSaveComplete");
  };

  return (
    <View style={styles.container}>
      <View style={styles.ticketContainer}>
        <View style={styles.ticket}>
          <View style={styles.imgContainer}>
            {isVisible &&
              (isOrigin ? (
                <CustomImage source={BeforePhoto} style={styles.img} />
              ) : (
                <CustomImage source={AfterPhoto} style={styles.img} />
              ))}
            {isLoading && (
              <Spinner
                visible={isLoading}
                textContent={isOrigin ? "효과 적용중" : "효과 해제중"}
                textStyle={{
                  fontFamily: mediumFontFamily,
                  fontSize: 16,
                  color: whiteColor,
                  opacity: 0.7,
                  marginTop: -50,
                }}
              />
            )}
          </View>
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>{comment}</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <OptionButton
          img={PhotoAlbumIcon}
          text={"사진 앨범"}
          style={{ width: 32, height: 24 }}
          onPress={handleInitButton}
        />

        <OptionButton
          img={TextIcon}
          text={"텍스트"}
          style={{ width: 37, height: 24 }}
          onPress={handleTextButton}
        />
      </View>
      <CustomButton title={"저장"} handlePress={handleSaveButton} />
      {/* <CameraSelectModal
        isVisible={isVisible}
        openCamera={openCamera}
        openImageLibrary={openImageLibrary}
        cancelModal={cancelModal}
      /> */}
      {isDecoVisible && <PhotoDecoModal />}
      {isTextVisible && <TextDecoModal />}
      <TextInput
        ref={textInputRef}
        style={{ opacity: 0, width: 0, height: 0 }}
        onChangeText={(text) => {
          setComment(text);
        }}
        onSubmitEditing={() => {
          setIsTextVisible(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  ticketContainer: {
    paddingTop: 40,
    paddingHorizontal: 45,
  },
  ticket: {
    backgroundColor: "rgba(217,217,217,0.57)",
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingBottom: 70,
    marginBottom: 27,
    height: 420,
  },
  imgContainer: {
    width: 252,
    height: 317,
    backgroundColor: secondaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  img: {
    transform: [{ rotate: "90deg" }],
    width: 317,
    height: 252,
  },
  commentContainer: {},
  comment: {
    fontFamily: mediumFontFamily,
    color: "rgba(17,17,17,0.67)",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // paddingTop: 20,
    paddingHorizontal: 45,
  },
  btnItem: {
    paddingTop: 18,
    paddingBottom: 10,
    backgroundColor: whiteColor,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#C1B9EF",
    width: 140,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    marginTop: 8,
    fontFamily: boldFontFamily,
    fontSize: 12,
    color: mainColor,
  },
  decoContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: whiteColor,
    width: "100%",
    height: 270,
    alignItems: "flex-end",
  },
  closeBtn: {
    margin: 10,
  },
  decoBtnContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    height: 120,
    justifyContent: "space-evenly",
  },
  decoBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  decoBtnItem: {
    width: 60,
    height: 60,
    backgroundColor: accentColor,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  decoBtnText: {
    fontSize: 12,
    fontFamily: lightFontFamily,
    color: blackColor,
  },
});
