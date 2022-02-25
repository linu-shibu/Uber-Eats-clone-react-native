import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import About from "../components/RestaurantDetails/About";
import MenuItems from "../components/RestaurantDetails/MenuItems";
import ViewCart from "../components/RestaurantDetails/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} />
      <ScrollView>
        <MenuItems />
      </ScrollView>
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
