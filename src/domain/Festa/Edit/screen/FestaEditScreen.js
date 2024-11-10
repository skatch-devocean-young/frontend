import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  backgroundColor,
  greyColor,
  mainColor,
  whiteColor,
} from "../../../../constant/colors";
import CustomImage from "../../../../components/CustomImage";
import { EditIcon, ShowIcon } from "../../../../constant/images/Festa/Edit";
import Text from "../../../../components/MyText";
import { boldFontFamily, boldFontSize } from "../../../../constant/fonts";
import Devider from "../../../../components/Devider";
import InputItem from "../components/InputItem";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CalendarIcon } from "../../../../constant/images/Festa";
import CustomButton from "../../../../components/CustomButton";
import HostComment from "../components/HostComment";
import CameraSelectModal from "../../../../components/CameraSelectModal";

// {
//     id: 2,
//     title: "AI 기술 세미나",
//     image:
//       "https://aix.inha.ac.kr/wordpress/wp-content/uploads/mangboard/2021/04/05/F95_%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EC%9C%B5%ED%95%A9%EC%84%B8%EB%AF%B8%EB%82%98-%EC%B5%9C%EC%A2%85.jpg",

//     date: "2024-09-25 18:30",
//     start_date: "2024-09-01 09:00",
//     end_date: "2024-09-24 23:59",

//     host_name: "AI Korea",
//     capacity: 200,
//     location: "Busan International Convention Center",
//     price: "30,000원",

//     description:
//       "최신 AI 기술 동향과 사례를 소개하는 세미나입니다. 업계 전문가들의 발표와 토론이 있을 예정입니다.",
//     place_address: "부산광역시 광운로 80",
// }
export default function FestaEditScreen({
  festa,
  handleFestaInfo,

  cameraModalVisible,
  openCameraModal,
  cancelModal,
  openCamera,
  openImageLibrary,
  openModal,
  closeModal,

  //   id,
  //   setId,
  //   title,
  //   setTitle,
  image,
  //   setImage,
  //   date,
  //   setDate,
  //   hostName,
  //   sethostName,
  //   capacity,
  //   setCapacity,
  //   location,
  //   setLocation,
  //   price,
  //   setPrice,
  //   startDt,
  //   setStartDt,
  //   endDt,
  //   setEndDt,
  //   description,
  //   setDescription,
  //   placeAddress,
  //   setPlaceAddress,
}) {
  //   console.log(festa);
  //   const {
  //     id,
  //     title,
  //     image,
  //     date,
  //     start_date,
  //     end_date,
  //     host_name,
  //     capacity,
  //     location,
  //     pricde,
  //     description,
  //     place_address,
  //   } = festa;
  const ref = useRef();
  //   const InfoItem = ({ title, value, handleValue, icon }) => {
  //     return (

  //     );
  //   };

  useEffect(() => {
    console.log("THIS------- ", image);
  }, [image]);

  const list = [
    {
      title: "공연 이름 ",
      value: title,
      handleValue: setTitle,
      icon: EditIcon,
    },
    {
      title: "공연 날짜 ",
      value: date,
      handleValue: setDate,
      icon: ShowIcon,
    },
    {
      title: "금액 ",

      value: price,
      handleValue: setPrice,
      icon: EditIcon,
    },
    {
      title: "장소 ",
      value: location,
      handleValue: setLocation,
      icon: ShowIcon,
    },
    {
      title: "인원 ",
      value: capacity,
      handleValue: setCapacity,
      icon: EditIcon,
    },
    {
      title: "예매날짜 ",
      value: startDt,
      handleValue: setStartDt,
      icon: ShowIcon,
    },
    {
      title: "입금기한 ",
      value: endDt,
      handleValue: setEndDt,
      icon: ShowIcon,
    },
  ];
  const [v, setV] = useState("");
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  // const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [hostName, sethostName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [startDt, setStartDt] = useState("");
  const [endDt, setEndDt] = useState("");
  const [description, setDescription] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");

  const [comment, setComment] = useState("");
  const handleComment = (text) => {
    setComment(text);
  };

  const handlePress = () => {};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: backgroundColor }}
      // keyboardVerticalOffset={44}
      behavior={Platform.OS === "ios" && "padding"}
    >
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        bounces={false}
        scrollEnabled
        enableOnAndroid
        enableAutomaticScroll
        // extraScrollHeight={Platform.OS === "android" ? 300 : 100}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <TouchableWithoutFeedback
              // onPress={() => handleFestaInfo({ id: "3" })}
              onPress={openCameraModal}
            >
              <View style={styles.posterWrapper}>
                <CustomImage
                  source={{ uri: image.image }}
                  style={styles.posterImg}
                  resizeMode="cover"
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.infoContainer}>
              {list.map((item, index) => (
                <InputItem
                  key={index}
                  title={item.title}
                  value={item.value}
                  handleValue={item.func}
                  icon={item.icon}
                  editable={true}
                />
              ))}
            </View>
            <HostComment
              title={"주최자 한마디"}
              value={comment}
              onChangeText={handleComment}
            />
          </View>

          {/* 카메라 선택 모달 */}
          <CameraSelectModal
            isVisible={cameraModalVisible}
            openCamera={openCamera}
            openImageLibrary={openImageLibrary}
            cancelModal={cancelModal}
          />

          <CustomButton title="등록하기" handlePress={handlePress} />
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    marginBottom: 50,
  },
  innerContainer: {
    paddingHorizontal: 25,
  },
  posterWrapper: {
    marginTop: 16,
    marginBottom: 50,
    height: 476,
    backgroundColor: "grey",
    borderRadius: 20,
  },
  infoContainer: {
    // backgroundColor: "red",
    marginBottom: 20,
  },
  posterImg: {
    width: "100%",
    borderRadius: 20,
  },
});
