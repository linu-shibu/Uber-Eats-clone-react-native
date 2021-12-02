import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function HeaderTabs(props) {
  // const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.view}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: props.text === props.activeTab ? "black" : "white" },
      ]}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={[
          styles.text,
          { color: props.text === props.activeTab ? "white" : "black" },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
  },
});

export default HeaderTabs;
