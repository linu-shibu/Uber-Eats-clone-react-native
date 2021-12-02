import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.8} />
      <MenuItems />
    </View>
  );
}
