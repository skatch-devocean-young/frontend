import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import Text from "../../../components/MyText";
import {
  blackColor,
  mainColor,
  secondaryColor,
  whiteColor,
} from "../../../constant/colors";
import { boldFontFamily, mediumFontFamily } from "../../../constant/fonts";
import CustomImage from "../../../components/CustomImage";
import { useNavigation } from "@react-navigation/core";

import {
  CalendarIcon,
  MapIcon,
  PeopleIcon,
  TicketDateIcon,
} from "../../../constant/images/Festa";

export default function FestaPreview({ festa, mode }) {
  const navigation = useNavigation();
  const {
    title,
    host_name = hostName,
    date,
    place_address = placeAddress,
    capacity,
    start_date,
    end_date,
  } = festa;

  const handleNavigate = () => {
    navigation.navigate("FestaDetail", { item: festa, title: festa.title });
  };

  const ImgTextComponent = ({ icon, content }) => {
    return (
      <View style={styles.imgTextWrapper}>
        <CustomImage style={styles.img} source={icon} />
        <Text style={styles.text}>{content}</Text>
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={handleNavigate}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {mode == "user" && <Text style={styles.hostName}>{host_name}</Text>}
          <ImgTextComponent icon={CalendarIcon} content={date.substr(0, 10)} />
          <ImgTextComponent icon={MapIcon} content={place_address} />
          <ImgTextComponent icon={PeopleIcon} content={`${capacity}명`} />
          <ImgTextComponent
            icon={TicketDateIcon}
            content={`${start_date.substr(0, 10)} ~ ${end_date.substr(0, 10)}`}
          />
        </View>
        <View style={styles.imgContainer}>
          <CustomImage source={{ uri: festa.image }} style={styles.posterImg} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 159,
    paddingLeft: 40,

    backgroundColor: whiteColor,
    marginBottom: 1,
    color: secondaryColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    width: 230,
    paddingVertical: 20,
    // backgroundColor: "red",
    justifyContent: "center",
  },
  imgContainer: {
    width: 112,
    height: 159,
  },
  posterImg: {},
  date: {
    marginBottom: 6,
    fontFamily: mediumFontFamily,
    color: secondaryColor,
  },
  title: {
    fontSize: 20,
    fontFamily: boldFontFamily,
    ellipsizeMode: "tail",
    color: mainColor,
    marginBottom: 8,
  },
  hostName: {
    marginTop: -5,
    marginBottom: 2,
    color: secondaryColor,
  },

  imgTextWrapper: {
    flexDirection: "row",
    // backgroundColor: "red",
  },
  img: {
    width: 14,
    height: 12,
    marginTop: 3,
    marginRight: 6,
  },
  text: {
    color: blackColor,
    fontSize: 10,
    lineHeight: 18,
  },
});
