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
    title: "Al Faham Chicken",
    description:
      "Al Faham chicken, a popular Middle Eastern or Arabian grilled chicken…",
    price: "$25.20",
    image:
      "https://www.thasneen.com/cooking/wp-content/uploads/2020/08/Alfaham-chicken.jpg",
  },
  {
    title: "Rotisserie chicken",
    description:
      "A dish that is cooked on a rotisserie by using direct heat in which the chicken is placed next to the heat source",
    price: "$30.50",
    image:
      "https://www.foodiecrush.com/wp-content/uploads/2016/07/Rotisserie-Chicken-foodiecrush.com-014.jpg",
  },
  {
    title: "Saucy chicken lollipop",
    description:
      "Chicken Lollipops are fried on the perfect temperature to achieve the crispy outer coating and the sweet and tangy sauce makes it taste heavenly.",
    price: "$18.00",
    image:
      "https://www.masala.tv/wp-content/uploads/2020/12/Saucy-chicken-lollipopp.jpg",
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
