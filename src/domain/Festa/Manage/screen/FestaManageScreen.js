import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  backgroundColor,
  blackColor,
  descriptionColor,
  greyColor,
  mainColor,
  whiteColor,
} from "../../../../constant/colors";
import PagerTabButtons from "../../../../components/PagerView/PagerTabButtons";
import {
  boldFontFamily,
  boldFontSize,
  mediumFontFamily,
} from "../../../../constant/fonts";
import PagerView from "react-native-pager-view";
import Text from "../../../../components/MyText";
import { isTemplateExpression } from "typescript";

const mainTabs = [{ title: "티켓 관리" }, { title: "출석 관리" }];
const subTabs = [
  { title: "승인 대기중" },
  { title: "승인 완료" },
  { title: "취소 신청" },
  { title: "취소 완료" },
];
const subAttendTabs = [{ title: "참석" }, { title: "미참석" }];
export default function FestaManageScreen() {
  const tabTitles = ["진행중인 스타일링", "완료된 스타일링"];
  const ref = React.useRef(PagerView);
  const handlePage = (p) => {
    ref.current.setPage(p);
  };

  const [selectedMainIdx, setSelectedMainIdx] = useState(0);
  const [selectedSubIdx, setSelectedSubIdx] = useState(0);
  const [selectedSubAttendIdx, setSelectedSubAttendIdx] = useState(0);

  const handleMain = (idx) => {
    setSelectedMainIdx(idx);
  };
  const handleSub = (idx) => {
    setSelectedSubIdx(idx);
  };
  const handleSubAttend = (idx) => {
    setSelectedSubAttendIdx(idx);
  };

  const MainTabItem = ({ title, idx }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleMain(idx)}>
        <View
          style={[
            styles.mainTabWrapper,
            {
              borderBottomColor: selectedMainIdx == idx ? mainColor : greyColor,
              borderBottomWidth: 4,
            },
          ]}
        >
          <Text
            style={[
              styles.mainTabTitle,
              {
                color: selectedMainIdx == idx ? mainColor : whiteColor,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const SubTabItem = ({ title, idx }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleSub(idx)}>
        <View
          style={[
            styles.subTabWrapper,
            {
              backgroundColor: selectedSubIdx == idx ? mainColor : greyColor,
            },
          ]}
        >
          <Text
            style={[
              styles.subTabTitle,
              {
                color: selectedSubIdx == idx ? whiteColor : blackColor,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const SubAttendTabItem = ({ title, idx }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleSubAttend(idx)}>
        <View
          style={[
            styles.subAttendTabWrapper,
            {
              backgroundColor:
                selectedSubAttendIdx == idx ? mainColor : greyColor,
            },
          ]}
        >
          <Text
            style={[
              styles.subTabTitle,
              {
                color: selectedSubAttendIdx == idx ? whiteColor : blackColor,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  //   useEffect(() => {
  //     console.log(selectedMainIdx);
  //   }, [selectedMainIdx]);
  return (
    <View style={styles.container}>
      <View style={styles.mainTabContainer}>
        {mainTabs.map((item, index) => {
          return <MainTabItem key={index} title={item.title} idx={index} />;
        })}
      </View>
      {selectedMainIdx == 0 && (
        <View style={styles.subTabContainer}>
          {subTabs.map((item, index) => {
            return <SubTabItem key={index} title={item.title} idx={index} />;
          })}
        </View>
      )}
      {selectedMainIdx == 1 && (
        <View style={styles.subTabContainer}>
          {subAttendTabs.map((item, index) => {
            return (
              <SubAttendTabItem key={index} title={item.title} idx={index} />
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  pagerView: {
    flex: 1,
  },
  listContainer: {
    width: "100%",
    height: "100%",

    paddingHorizontal: 16,
    backgroundColor: backgroundColor,
  },
  nullContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 38,
    paddingHorizontal: 16.5,
  },
  nullText: {
    fontFamily: mediumFontFamily,
    fontSize: boldFontSize,
    color: descriptionColor,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    // backgroundColor: 'blue',
  },
  mainTabContainer: {
    flexDirection: "row",
  },
  mainTabWrapper: {
    width: "50%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  mainTabTitle: {
    fontFamily: boldFontFamily,
  },
  subTabContainer: {
    flexDirection: "row",
  },
  subTabWrapper: {
    width: "25%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    color: whiteColor,
    borderRightWidth: 0.2,
  },
  subTabTitle: {},
  subAttendTabWrapper: {
    width: "50%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    color: whiteColor,
    borderRightWidth: 0.2,
  },
});
