import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import HostFestaDetailScreen from "../screen/HostFestaDetailScreen";
import Text from "../../../../components/MyText";
import EditButton from "../../../../components/EditButton";
import SelectModal from "../../../../components/SelectModal";
import FestaModifyContainer from "../../Edit/container/FestaModifyContainer";
import ScanQRPage from "../component/ScanQRPage";
import QRScanner from "../component/QRScanner";

export default function HostFestaDetailContainer({ navigation, route }) {
  const { params } = route;
  const { item } = params;

  const [selectModalVisible, setSelectModalVisible] = useState(false);
  const [qrScannerVisible, setQrScannerVisible] = useState(false);
  const [qrValue, setQrValue] = useState(false);

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

  const handleQRBtn = () => {
    setQrScannerVisible(true);
  };
  const closeQrScanner = () => {
    setQrScannerVisible(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "공연 상세 정보",
      headerRight: () => <EditButton handlePress={handleHeaderBtn} />,
    });
  }, []);

  useEffect(() => {
    console.log(qrScannerVisible);
  }, [qrScannerVisible]);

  const onQrRead = (qrtext) => {
    setQrValue(qrtext);
    setQrScannerVisible(false);
    if (qrtext !== null) {
      Alert.alert(`${qrtext}`);
    }
  };

  return (
    <>
      {qrScannerVisible ? (
        <QRScanner onRead={onQrRead} />
      ) : (
        <HostFestaDetailScreen
          item={item}
          selectModalVisible={selectModalVisible}
          handleModify={handleModify}
          cancelModal={cancelModal}
          handleManageBtn={handleManageBtn}
          handleQRBtn={handleQRBtn}
          qrScannerVisible={qrScannerVisible}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerBtn: {},
});
