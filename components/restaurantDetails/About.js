import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
  price: "$$",
  reviews: "1500",
  rating: 4.6,
  categories: [
    { title: "Thai" },
    { title: "Comfort Food" },
    { title: "Coffee" },
  ],
};

// const image =
//   "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80";
// const name = "Farmhouse Kitchen Thai Cuisine";
// const description = "Thai . Grill . $$ . 4 🤩 (1150+)";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(".");

  const description = `${formattedCategories} ${
    price ? "." + price + "." : ""
  }.🎟. ${rating}⭐(${reviews})`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={styles.image} />
);

const RestaurantName = (props) => (
  <Text style={styles.title}>{props.name}</Text>
);

const RestaurantDescription = (props) => (
  <Text style={styles.description}>{props.description}</Text>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
  },
});
