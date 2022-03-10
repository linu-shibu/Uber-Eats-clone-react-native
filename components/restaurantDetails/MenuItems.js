import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItem({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));
  return (
    <View>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.viewMenuItem}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{
                  borderColor: "lightgray",
                  borderRadius: 0,
                }}
                fillColor={"green"}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider width={2} />
        </View>
      ))}
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={styles.infoStyle}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <Image
    source={{
      uri: props.food.image,
    }}
    style={{ width: 135, height: 100, borderRadius: 8, marginLeft: marginLeft }}
  />
);

const styles = StyleSheet.create({
  infoStyle: {
    width: 220,
    justifyContent: "space-evenly",
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "bold",
  },
  viewMenuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 8,
  },
  // foodImageStyle: {
  //   width: 135,
  //   height: 100,
  //   borderRadius: 8,
  //   marginLeft: marginLeft,
  // },
});

{
  /* {foods.map((food, index) => (
  <View key={index}>
    <View style={styles.viewMenuItem}>
      <FoodInfo food={food} />
      <FoodImage food={food} />
    </View>
    <Divider width={2} />
  </View>
))} */
}
