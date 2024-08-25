import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import {
  backgroundColor,
  mainColor,
  secondaryColor,
  whiteColor,
} from "../../../constant/colors";
import Text from "../../../components/MyText";
import PhotoAlbum from "../../../constant/images/PhotoAlbum";
import CustomImage from "../../../components/CustomImage";
import TextIcon from "../../../constant/images/Text";
import { boldFontFamily } from "../../../constant/fonts";
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import CameraSelectModal from "../../../components/CameraSelectModal";
import ImageCropPicker from "react-native-image-crop-picker";
import { BeforePhoto } from "../../../constant/images/Sample";

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
  //   const [isOrigin, setIsOrigin] = useState(true)

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
      <TouchableWithoutFeedback
        onPress={onPress}
        style={{ backgroundColor: "red" }}
      >
        <View style={styles.btnItem}>
          <CustomImage source={img} style={style} />
          <Text style={styles.btnText}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  const handleSaveButton = () => {
    navigaiton.navigate("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.ticketContainer}>
        <View style={styles.ticket}>
          <View style={styles.imgContainer}>
            <CustomImage source={BeforePhoto} style={styles.img} />
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <OptionButton
          img={PhotoAlbum}
          text={"사진 앨범"}
          style={{ width: 32, height: 24 }}
          onPress={openModal}
        />

        <OptionButton
          img={TextIcon}
          text={"텍스트"}
          style={{ width: 37, height: 24 }}
        />
      </View>
      <CustomButton title={"저장"} handlePress={handleSaveButton} />
      <CameraSelectModal
        isVisible={isVisible}
        openCamera={openCamera}
        openImageLibrary={openImageLibrary}
        cancelModal={cancelModal}
      />
      {/* <PhotoDecoModal isVisible={isDecoVisible} isOrigin={isOrigin} /> */}
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
    paddingBottom: 27,
  },
  ticket: {
    backgroundColor: "rgba(217,217,217,0.57)",
    borderRadius: 20,
  },
  imgContainer: {
    width: 252,
    height: 317,
    backgroundColor: secondaryColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
    marginBottom: 80,
  },
  img: {
    transform: [{ rotate: "90deg" }],
    width: 317,
    height: 252,
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
});
