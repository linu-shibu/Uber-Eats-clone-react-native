import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const foods = [
  {
    title: "Tandoori Chicken",
    description: "Amazing chicken dish with tender chicken",
    price: "$19.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish.",
    price: "$14.50",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg",
  },
  {
    title: "Tandoori Dry Chicken",
    description: "Amazing chicken dish with tender chicken",
    price: "$19.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg",
  },
  {
    title: "Chilaquiles Special",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish.",
    price: "$14.50",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} />
      <ScrollView>
        <MenuItems restaurantName={route.params.name} foods={foods} />
      </ScrollView>
      <ViewCart navigation={navigation} />
    </View>
  );
}
