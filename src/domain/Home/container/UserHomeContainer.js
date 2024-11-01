import React, { useEffect, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import NavHeader from "../../../components/NavHeader";
import UserHomeScreen from "../screen/UserHomeScreen";
const dummyEvents = [
  {
    id: 0,
    title: "Future 플러터 컨퍼런스",
    image:
      "https://cf.festa.io/img/2024-8-23/0623112a-0eaf-4f9e-a9c7-6b187f8f1eb5.jpg",
    date: "2024-09-15 14:00",
    start_date: "2024-09-01 09:00",
    end_date: "2024-09-14 23:59",
    host_name: "Flutter Korea",
    capacity: 500,
    location: "송도컨벤시아, 인천",
    price: "무료",

    description: `안녕하세요, 플러터 개발자 여러분. 👋
🎉😀🎉 한국 최대 Flutter 컨퍼런스, Future<Flutter>가 인천 송도에서 열립니다! :) 🎉😀🎉
🚀 9월 28일, 송도 컨벤시아에서 플러터의 미래를 함께 확인 해 볼 수 있는 시간을 마련 하였습니다!
많은 관심 부탁드립니다!

행사 홈페이지: https://future-flutter.dev/
[티켓은, Festa에서만 구매 가능합니다 :)]
📅 일시: 9월 15일 토요일 14:00 ~ 20:00
🕧 체크인 시작: 오후 13:30 (행사 30분 전)
📍 장소: 인천 연수구 센트럴로 123 송도컨벤시아 그랜드 볼룸

주요 안내사항:
- 환불 정책: 행사 1주일 전까지 가능
- 입장: Festa QR코드를 휴대폰으로 보여주셔야 합니다.
- 주차: 유료 주차 가능, 대중교통 이용 권장
- 식사: 제공되지 않음

문의: 010-3085-0969, future-flutter@googlegroup.com`,
    place_address: "인천광역시 연수구 센트럴로 123",
    hashs: ["Flutter", "컨퍼런스"],
  },
  {
    id: 2,
    title: "AI 기술 세미나",
    image:
      "https://aix.inha.ac.kr/wordpress/wp-content/uploads/mangboard/2021/04/05/F95_%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EC%9C%B5%ED%95%A9%EC%84%B8%EB%AF%B8%EB%82%98-%EC%B5%9C%EC%A2%85.jpg",

    date: "2024-09-25 18:30",
    start_date: "2024-09-01 09:00",
    end_date: "2024-09-24 23:59",

    host_name: "AI Korea",
    capacity: 200,
    location: "Busan International Convention Center",
    price: "30,000원",

    description:
      "최신 AI 기술 동향과 사례를 소개하는 세미나입니다. 업계 전문가들의 발표와 토론이 있을 예정입니다.",
    place_address: "부산광역시 광운로 80",
    hashs: ["AI", "세미나"],
  },
  {
    id: 3,
    title: "JavaScript 개발자 모임",
    image: "https://www.hanbit.co.kr/data/books/B8356303939_l.jpg",
    date: "2024-10-10 10:00",
    start_date: "2024-09-01 09:00",
    end_date: "2024-10-09 23:59",

    host_name: "JS Korea",
    capacity: 50,
    location: "Gangnam Tech Space",
    price: "15,000원",

    description:
      "JavaScript 개발자들을 위한 네트워킹 행사입니다. 최신 프레임워크와 라이브러리 소개 및 토론이 예정되어 있습니다.",
    place_address: "성동구 왕십리로 222",
    hashs: ["JS", "프레임워크"],
  },
  {
    id: 4,
    title: "스타트업 창업 워크샵",
    image:
      "https://hywiki.s3.amazonaws.com/e/eb/%ED%95%9C%EC%96%91_%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85_%EB%B6%80%EC%8A%A4%ED%8C%85_%EC%BA%A0%ED%94%84_2020_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    date: "2024-10-15 13:00",
    start_date: "2024-09-10 09:00",
    end_date: "2024-10-14 23:59",

    host_name: "Startup Hub Korea",
    capacity: 75,
    location: "Daejeon Creative Center",
    price: "50,000원",

    description:
      "스타트업 창업에 관심 있는 분들을 위한 워크샵입니다. 창업 과정과 관련된 다양한 주제를 다룹니다.",
    place_address: "대전광역시 원효로 80",
    hashs: ["스타트업", "창업"],
  },
  {
    id: 5,
    title: "UX/UI 디자인 세미나",
    image:
      "https://www.contestkorea.com/admincenter/files/meet/202404151031028991560.png",

    date: "2024-11-05 09:00",
    start_date: "2024-10-01 09:00",
    end_date: "2024-11-04 23:59",

    host_name: "Design Korea",
    capacity: 120,
    location: "Incheon Design Center",
    price: "20,000원",

    description:
      "UX/UI 디자인의 최신 트렌드와 실무 적용 방법에 대해 배우는 세미나입니다. 디자인 전문가들이 발표할 예정입니다.",
    place_address: "인천광역시 원효로 80",
    hashs: ["UX/UI", "사용자경험"],
  },
  {
    id: 1,
    title: "React Korea Meetup",
    image:
      "https://lh4.googleusercontent.com/LuNf1KRnH0mQ25LjBjYWinvrymegD71daXoLOm2UbkG9eZsqltqPscpjon4p08Fe68yC2CE8FisPwlV9_TodYM0MMFCeLifVExQUas9WnKbBNRxMWdKtg3bfCCZKe9P4Xg=w2044",
    date: "2024-12-15 14:00",
    host_name: "React Korea",
    capacity: 100,
    location: "Seoul Startup Hub",
    price: "무료",

    start_date: "2024-12-01 09:00",
    end_date: "2024-12-14 23:59",

    description:
      "React Korea에서 주최하는 정기 모임입니다. 다양한 React 관련 주제들에 대해 논의하고 네트워킹 할 수 있는 기회를 제공합니다.",
    place_address: "용산구 원효로 80",
    hashs: ["React", "FE"],
  },
];

const dummyEvents2 = [
  {
    id: 3,
    title: "JavaScript 개발자 모임",
    image: "https://www.hanbit.co.kr/data/books/B8356303939_l.jpg",
    date: "2024-09-25 18:30",
    host_name: "JS Korea",
    capacity: 50,
    location: "Gangnam Tech Space",
    price: "15,000원",

    start_date: "2024-09-01 09:00",
    end_date: "2024-09-24 23:59",

    description:
      "JavaScript 개발자들을 위한 네트워킹 행사입니다. 최신 프레임워크와 라이브러리 소개 및 토론이 예정되어 있습니다.",
    place_address: "성동구 왕십리로 222",
    hashs: ["JS", "프레임워크"],
  },
  {
    id: 4,
    title: "스타트업 창업 워크샵",
    image:
      "https://hywiki.s3.amazonaws.com/e/eb/%ED%95%9C%EC%96%91_%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85_%EB%B6%80%EC%8A%A4%ED%8C%85_%EC%BA%A0%ED%94%84_2020_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    date: "2024-11-05 09:00",
    host_name: "Startup Hub Korea",
    capacity: 75,
    location: "Daejeon Creative Center",
    price: "50,000원",

    start_date: "2024-10-01 09:00",
    end_date: "2024-11-04 23:59",

    description:
      "스타트업 창업에 관심 있는 분들을 위한 워크샵입니다. 창업 과정과 관련된 다양한 주제를 다룹니다.",
    place_address: "대전광역시 원효로 80",
    hashs: ["스타트업", "창업"],
  },
  {
    id: 5,
    title: "UX/UI 디자인 세미나",
    image:
      "https://www.contestkorea.com/admincenter/files/meet/202404151031028991560.png",
    date: "2024-10-15 13:00",
    host_name: "Design Korea",
    capacity: 120,
    location: "Incheon Design Center",
    price: "20,000원",

    start_date: "2024-09-10 09:00",
    end_date: "2024-10-14 23:59",

    description:
      "UX/UI 디자인의 최신 트렌드와 실무 적용 방법에 대해 배우는 세미나입니다. 디자인 전문가들이 발표할 예정입니다.",
    place_address: "인천광역시 원효로 80",
    hashs: ["UX/UI", "사용자경험"],
  },
  {
    id: 1,
    title: "React Korea Meetup",
    image:
      "https://lh4.googleusercontent.com/LuNf1KRnH0mQ25LjBjYWinvrymegD71daXoLOm2UbkG9eZsqltqPscpjon4p08Fe68yC2CE8FisPwlV9_TodYM0MMFCeLifVExQUas9WnKbBNRxMWdKtg3bfCCZKe9P4Xg=w2044",
    date: "2024-09-15 14:00",
    host_name: "React Korea",
    capacity: 100,
    location: "Seoul Startup Hub",
    price: "무료",

    start_date: "2024-09-01 09:00",
    end_date: "2024-09-14 23:59",

    description:
      "React Korea에서 주최하는 정기 모임입니다. 다양한 React 관련 주제들에 대해 논의하고 네트워킹 할 수 있는 기회를 제공합니다.",
    place_address: "용산구 원효로 80",
    hashs: ["React", "FE"],
  },
];

export default function UserHomeContainer({ navigation, routes }) {
  // const { props } = routes;
  // const {} = props;

  const [loading, setLoading] = useState(true);
  const [festaList, setFestaList] = useState([]);

  // const handleFetchFesta = async () => {
  //   const res = await getFestaList();
  //   const { result } = res;
  //   setFestaList(result);
  // };

  // useEffects -----------------------------------------------
  useEffect(() => {
    navigation.setOptions({
      header: () => <NavHeader title={"행사 피드"} />,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    // handleFetchFesta();
    setLoading(false);
  }, []);
  return loading ? (
    <Spinner visible={loading} />
  ) : (
    <UserHomeScreen festaList={dummyEvents} topList={dummyEvents2} />
  );
}
