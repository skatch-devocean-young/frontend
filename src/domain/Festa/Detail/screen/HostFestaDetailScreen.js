import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  accentColor,
  backgroundColor,
  secondaryColor,
  whiteColor,
} from "../../../../constant/colors";
import CameraSelectModal from "../../../../components/CameraSelectModal";
import CustomButton from "../../../../components/CustomButton";
import HostComment from "../../Edit/components/HostComment";
import InputItem from "../../Edit/components/InputItem";
import CustomImage from "../../../../components/CustomImage";
import { EditIcon, ShowIcon } from "../../../../constant/images/Festa/Edit";
import SelectModal from "../../../../components/SelectModal";

export default function HostFestaDetailScreen({
  festa,
  item,
  selectModalVisible,
  cancelModal,
  handleModify,
  handleManageBtn,
  handleQRBtn,

  //   id,
  //   setId,
  //   title,
  //   setTitle,
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
  const {
    // id,
    title,
    image,
    date,
    start_date: startDt,
    end_date: endDt,
    host_name,
    capacity,
    location,
    price,
    description,
    place_address,
    comment,
  } = item;
  const ref = useRef();
  //   const InfoItem = ({ title, value, handleValue, icon }) => {
  //     return (

  //     );
  //   };

  //   const [v, setV] = useState("");
  //   const [id, setId] = useState(null);
  //   const [title, setTitle] = useState("");
  //   // const [image, setImage] = useState("");
  //   const [date, setDate] = useState("");
  //   const [hostName, sethostName] = useState("");
  //   const [capacity, setCapacity] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [startDt, setStartDt] = useState("");
  //   const [endDt, setEndDt] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [placeAddress, setPlaceAddress] = useState("");

  useEffect(() => {
    console.log(selectModalVisible);
  }, []);

  const list = [
    {
      title: "공연 이름 ",
      value: title,
      //   icon: EditIcon,
    },
    {
      title: "공연 날짜 ",
      value: date,
      //   icon: ShowIcon,
    },
    {
      title: "금액 ",
      value: price,
      //   icon: EditIcon,
    },
    {
      title: "장소 ",
      value: location,
      //   icon: ShowIcon,
    },
    {
      title: "인원 ",
      value: capacity,
      //   icon: EditIcon,
    },
    {
      title: "예매날짜 ",
      value: startDt,
      //   icon: ShowIcon,
    },
    {
      title: "입금기한 ",
      value: endDt,
      //   icon: ShowIcon,
    },
  ];
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: backgroundColor }}
      // keyboardVerticalOffset={44}
      behavior={Platform.OS === "ios" && "padding"}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.posterWrapper}>
            <CustomImage
              source={{ uri: image }}
              style={styles.posterImg}
              resizeMode="cover"
            />
          </View>

          <View style={styles.infoContainer}>
            {list.map((item, index) => (
              <InputItem
                key={index}
                title={item.title}
                value={item.value}
                // handleValue={item.func}
                icon={item.icon}
                editable={false}
              />
            ))}

            <HostComment
              title={"주최자 한마디"}
              value={comment}
              editable={false}
            />
          </View>
        </View>

        <CustomButton
          title="공연 관리"
          handlePress={handleManageBtn}
          style={{ marginBottom: -24 }}
          backgroundColor={accentColor}
        />
        <CustomButton title="참석 QR 스캔" handlePress={handleQRBtn} />
        <SelectModal
          isVisible={selectModalVisible}
          openFirst={handleModify}
          firstTitle={"수정"}
          openSecond={handleModify}
          secondTitle={"삭제"}
          cancelModal={cancelModal}
        />
      </View>
    </ScrollView>
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
