import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetails/MenuItems";

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Tandoori Chicken",
        description: "Amazing chicken dish with tender chicken",
        price: "$19.20",
        image:
          "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg",
      },
    ],
  });
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

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.secView}>
        <LottieView
          style={styles.lottieCheck}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.infoText}>
          Your Order at {restaurantName} has been placed for ${totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={12}
          />
        </ScrollView>
        <LottieView
          style={styles.lottieKitch}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </View>
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
    marginBottom: 10,
  },
  lottieKitch: {
    height: 180,
    alignSelf: "center",
    marginBottom: 18,
  },
  secView: {
    margin: 15,
    alignItems: "center",
    height: "100%",
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default OrderCompleted;
