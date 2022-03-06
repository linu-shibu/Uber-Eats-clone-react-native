import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const { title, price } = item;
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    opacity: 0.7,
    fontSize: 16,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomColor: "#999",
    borderBottomWidth: 2,
  },
});

export default OrderItem;
