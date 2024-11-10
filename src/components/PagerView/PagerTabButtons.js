import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import PagerTabButton from "./PagerTabButton";
import { windowWidth } from "../../constant/styles";

const PagerTabButtons = ({ handlePage, titles = [], initialIndex = 0 }) => {
  const [focusedIdx, setFocusedIdx] = useState(initialIndex);

  return (
    <View style={styles.container}>
      {titles.map((title, idx) => {
        const handlePress = () => {
          setFocusedIdx(idx);
          handlePage(idx);
        };
        return (
          <PagerTabButton
            key={title}
            title={title}
            isFocused={focusedIdx === idx}
            handlePress={handlePress}
          />
        );
      })}
    </View>
  );
};

export default PagerTabButtons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "space-between",
  },
});
