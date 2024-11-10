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

export default function HostFestaDetailScreen({
  festa,
  item,

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
  //   console.log(festa);
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

  const handlePress = () => {};

  useEffect(() => {
    console.log("인원", capacity);
  }, []);

  const list = [
    {
      title: "공연 이름 ",
      value: title,
      //   handleValue: setTitle,
      icon: EditIcon,
    },
    {
      title: "공연 날짜 ",
      value: date,
      //   handleValue: setDate,
      icon: ShowIcon,
    },
    {
      title: "금액 ",
      value: price,
      //   handleValue: setPrice,
      icon: EditIcon,
    },
    {
      title: "장소 ",
      value: location,
      //   handleValue: setLocation,
      icon: ShowIcon,
    },
    {
      title: "인원 ",
      value: capacity,
      //   handleValue: setCapacity,
      icon: EditIcon,
    },
    {
      title: "예매날짜 ",
      value: startDt,
      //   handleValue: setStartDt,
      icon: ShowIcon,
    },
    {
      title: "입금기한 ",
      value: endDt,
      //   handleValue: setEndDt,
      icon: ShowIcon,
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
          </View>
        </View>

        <CustomButton
          title="인원 확인"
          handlePress={handlePress}
          style={{ marginBottom: -24 }}
          backgroundColor={accentColor}
        />
        <CustomButton title="참석 QR 스캔" handlePress={handlePress} />
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
