import React from "react";
import FestaDetailScreen from "../screen/FestaDetailScreen";

export default function FestaDetailContainer({ navigation, route }) {
  const { params } = route;
  const { item } = params;

  return <FestaDetailScreen item={item} />;
}
