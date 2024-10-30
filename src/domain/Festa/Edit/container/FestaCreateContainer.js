import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import FestaEditScreen from "../screen/FestaEditScreen";
import { useNavigation } from "@react-navigation/core";

export default function FestaCreateContainer({ navigation, route }) {
  const { params } = route;
  //   const { item } = params;
  //   const [id, setId] = useState(null);
  //   const [title, setTitle] = useState("");
  //   const [image, setImage] = useState("");
  //   const [date, setDate] = useState("");
  //   const [hostName, sethostName] = useState("");
  //   const [capacity, setCapacity] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [startDt, setStartDt] = useState("");
  //   const [endDt, setEndDt] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [placeAddress, setPlaceAddress] = useState("");

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

  return (
    <FestaEditScreen
      festa={festa}
      handleFestaInfo={handleFestaInfo}
      //   id={id}
      //   setId={setId}
      //   title={title}
      //   setTitle={setTitle}
      //   image={image}
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
