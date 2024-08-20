import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/MyText";
import {
  mainColor,
  secondaryColor,
  whiteColor,
} from "../../../constant/colors";
import {
  boldFontFamily,
  boldFontSize,
  mediumFontFamily,
} from "../../../constant/fonts";
import CustomImage from "../../../components/CustomImage";
import AddressIcon from "../../../constant/images/Location";

export default function FestaPreview({ festa }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.date}>{festa.start_date}</Text>
        <Text numberOfLines={1} style={styles.title}>
          {festa.title}
        </Text>
        <Text style={styles.hostName}>{festa.host_name}</Text>
        <View style={styles.addressContainer}>
          <CustomImage source={AddressIcon} style={styles.addressIcon} />
          <Text style={styles.addressText}>{festa.place_address}</Text>
        </View>
        <View style={styles.hashContainer}>
          {festa.hashs.length > 0 &&
            festa.hashs.map((item, index) => (
              <View style={styles.hashItem} key={index}>
                <Text style={styles.hashText}>#{item}</Text>
              </View>
            ))}
        </View>
      </View>
      <View style={styles.imgContainer}>
        {/* <CustomImage source={img} style={styles.posterImg} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: whiteColor,
    marginBottom: 26,
    borderRadius: 20,

    color: secondaryColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    paddingHorizontal: 17,
    paddingVertical: 12,
    width: 230,
  },
  imgContainer: {
    width: 107,
    height: 150,
    backgroundColor: mainColor,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  date: {
    marginBottom: 6,
    fontFamily: mediumFontFamily,
    color: secondaryColor,
  },
  title: {
    fontSize: 18,
    fontFamily: boldFontFamily,
    ellipsizeMode: "tail",
    color: mainColor,
    marginBottom: 4,
  },
  hostName: {
    // marginBottom: 4,
    fontFamily: boldFontFamily,
    color: secondaryColor,
  },
  hashContainer: {
    display: "flex",
    flexDirection: "row",
  },
  hashItem: {
    backgroundColor: "rgba(73, 49, 212, 0.1)",
    paddingHorizontal: 8,
    marginRight: 3,
    borderRadius: 20,
  },
  hashText: {
    color: "rgba(73, 49, 212, 0.7)",
    fontSize: 12,
    lineHeight: 22,
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  addressIcon: {
    width: 16,
    height: 16,
  },
  addressText: {
    fontSize: 12,
    color: secondaryColor,
  },
});
