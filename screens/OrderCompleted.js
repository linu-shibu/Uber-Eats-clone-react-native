import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

const OrderCompleted = () => {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView style={styles.safeView}>
      <LottieView
        style={styles.lottieCheck}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text>
        Your Order at {restaurantName} has been placed for ${totalUSD}
      </Text>
      <LottieView
        style={styles.lottieKitch}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "white",
  },
  lottieCheck: {
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  lottieKitch: {
    height: 200,
    alignSelf: "center",
  },
});

export default OrderCompleted;
