import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ViewCart = () => {
  return (
    <View style={styles.view}>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  },
  btn: {
    marginTop: 5,
    backgroundColor: "black",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    width: 200,
    position: "relative",
  },
});

export default ViewCart;
