import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import FestaEditScreen from "../screen/FestaEditScreen";
import { useNavigation } from "@react-navigation/core";
import ImageCropPicker from "react-native-image-crop-picker";

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
  maxFiles: 10,
  forceJpg: true,
  loadingLabelText: "",
};
const androidOptions = {
  compressImageMaxHeight: 1000,
  compressImageMaxWeight: 1000,
};
const iosOptions = {
  height: 1000,
  width: 1000,
  compressImageMaxHeight: 1000,
  compressImageMaxWeight: 1000,
};

export default function FestaCreateContainer({ navigation, route }) {
  const { params } = route;
  //   const { item } = params;
  //   const [id, setId] = useState(null);
  //   const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  //   const [date, setDate] = useState("");
  //   const [hostName, sethostName] = useState("");
  //   const [capacity, setCapacity] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [startDt, setStartDt] = useState("");
  //   const [endDt, setEndDt] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [placeAddress, setPlaceAddress] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [subModalVisible, setSubModalVisible] = useState(false);
  const [cameraModalVisible, setCameraModaVisible] = useState(false);

  const [festa, setFesta] = useState({
    id: null,
    title: "",
    image: "",
    date: "",
    host_name: "",
    capacity: 0,
    location: "",
    price: "",

    start_date: "",
    end_date: "",

    description: "",
    place_address: "",
  });

  const handleFestaInfo = (info) => {
    setFesta((prev) => {
      return {
        ...prev,
        info,
      };
    });
    console.log(festa);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "행사 신규 등록",
    });
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const openCamera = () => {
    ImageCropPicker.openCamera(
      Platform.OS === "ios"
        ? { ...baseCameraOption, ...iosOptions }
        : { ...baseCameraOption, ...androidOptions }
    ).then((image) => {
      const uri = `data:${image.mime};base64,${image.data}`;
      setImage({ image: uri });

      cancelModal();
    });
  };

  const openImageLibrary = () => {
    ImageCropPicker.openPicker(
      Platform.OS === "ios"
        ? { ...baseImageLibraryOption, ...iosOptions }
        : { ...baseImageLibraryOption, ...androidOptions }
    ).then((item) => {
      // let imageList = [];
      // images.map((item) =>
      //   imageList.push({ imageData: item, image: item.path })
      // );

      // const uri = `data:${item.mime};base64,${item.data}`;
      setImage({ image: item.path });
      // navigation.navigate("ReviewDetailImage", {
      //   idx: 0,
      //   reviewImageList: imageList,
      //   ver: "upload",
      // });

      console.log(image);
      // console.log(uri);
      cancelModal();
    });
  };

  const cancelModal = () => {
    setCameraModaVisible(false);
  };

  const openCameraModal = () => {
    setCameraModaVisible(true);
  };

  return (
    <FestaEditScreen
      festa={festa}
      handleFestaInfo={handleFestaInfo}
      cameraModalVisible={cameraModalVisible}
      openCameraModal={openCameraModal}
      cancelModal={cancelModal}
      openCamera={openCamera}
      openImageLibrary={openImageLibrary}
      openModal={openModal}
      closeModal={closeModal}
      //   id={id}
      //   setId={setId}
      //   title={title}
      //   setTitle={setTitle}
      image={image}
      //   setImage={setImage}
      //   date={date}
      //   setDate={setDate}
      //   hostName={hostName}
      //   sethostName={sethostName}
      //   capacity={capacity}
      //   setCapacity={setCapacity}
      //   location={location}
      //   setLocation={setLocation}
      //   price={price}
      //   setPrice={setPrice}
      //   startDt={startDt}
      //   setStartDt={setStartDt}
      //   endDt={endDt}
      //   setEndDt={setEndDt}
      //   description={description}
      //   setDescription={setDescription}
      //   placeAddress={placeAddress}
      //   setPlaceAddress={setPlaceAddress}
    />
  );
}

const styles = StyleSheet.create({});
