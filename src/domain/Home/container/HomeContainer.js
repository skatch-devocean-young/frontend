import React, { useEffect, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import HomeScreen from "../screen/HomeScreen";

export default function HomeContainer() {
  const [loading, setLoading] = useState(true);
  const [festaList, setFestaList] = useState([]);

  const handleFetchFesta = async () => {
    const res = await getFestaList();
    const { result } = res;
    setFestaList(result);
  };

  useEffect(() => {
    setLoading(true);
    handleFetchFesta();
    setLoading(false);
  }, []);
  return loading ? (
    <Spinner visible={loading} />
  ) : (
    <HomeScreen festaList={festaList} />
  );
}
