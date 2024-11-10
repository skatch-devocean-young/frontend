import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";
import HostFestaDetailScreen from "../screen/HostFestaDetailScreen";
import Text from "../../../../components/MyText";
import EditButton from "../../../../components/EditButton";
import SelectModal from "../../../../components/SelectModal";
import FestaModifyContainer from "../../Edit/container/FestaModifyContainer";

export default function HostFestaDetailContainer({ navigation, route }) {
  const { params } = route;
  const { item } = params;

  const [selectModalVisible, setSelectModalVisible] = useState(false);
  const handleModify = () => {
    navigation.navigate("FestaModify", { item });
    cancelModal();
  };
  const handleHeaderBtn = () => {
    setSelectModalVisible(true);
  };
  const cancelModal = () => {
    setSelectModalVisible(false);
  };

  const handleManageBtn = () => {
    navigation.navigate("FestaManage");
  };
  const handleQRBtn = () => {};

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "공연 상세 정보",
      headerRight: () => <EditButton handlePress={handleHeaderBtn} />,
    });
  }, []);

  return (
    <HostFestaDetailScreen
      item={item}
      selectModalVisible={selectModalVisible}
      handleModify={handleModify}
      cancelModal={cancelModal}
      handleManageBtn={handleManageBtn}
      handleQRBtn={handleQRBtn}
    />
  );
}

const styles = StyleSheet.create({
  headerBtn: {},
});
