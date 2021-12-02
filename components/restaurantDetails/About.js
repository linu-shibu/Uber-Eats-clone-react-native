import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const image =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai . Grill . $$ . 4 🤩 (1150+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={styles.image} />
);

const RestaurantTitle = (props) => (
  <Text style={styles.title}>{props.title}</Text>
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
