import React from "react";
import { View, Image } from "react-native";

export default function Header() {
  return (
    <View>
      <Image
        source={require("../../../assets/sky.jpg")}
        style={{ width: "100%", height: 200 }}
      ></Image>
    </View>
  );
}
