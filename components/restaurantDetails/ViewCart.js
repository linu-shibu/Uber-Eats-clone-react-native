import { View, Text, StyleSheet, Modal } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";

const ViewCart = () => {
  const [modalVisible, setModalVisible] = useState(false);

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

  const addOrderToFireBase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={styles.checkoutView}>
              <TouchableOpacity
                style={styles.checkoutTouchable}
                onPress={() => {
                  addOrderToFireBase();
                }}
              >
                <Text style={styles.checkoutText}>Checkout</Text>
                <Text style={styles.checkoutTotal}>
                  {total ? `$${totalUSD}` : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  // console.log(totalUSD);
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.view}>
          <View style={styles.viewBtn}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.text}>{`$${totalUSD}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    zIndex: 100,
  },
  viewBtn: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 15,
    color: "white",
    marginRight: 20,
  },
  btn: {
    marginTop: 5,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
    width: 200,
    position: "relative",
  },
  modalView: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 30,
    width: 150,
    alignItems: "center",
  },
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 1,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  checkoutView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkoutTouchable: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  checkoutText: {
    color: "white",
    fontSize: 18,
  },
  checkoutTotal: {
    position: "absolute",
    right: 20,
    color: "white",
    fontSize: 15,
    top: 15,
  },
});

export default ViewCart;
