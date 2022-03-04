import { View, Text, StyleSheet, Modal } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import { set } from "react-native-reanimated";

const ViewCart = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const checkoutModalContent = () => {
    return (
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white" }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
});

export default ViewCart;
