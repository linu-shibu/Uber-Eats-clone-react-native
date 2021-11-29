import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, { localRest } from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "LOt8vukfd0isdVNnCVBDA8OZyuzCL0X3lVUsGDwq0XrVUqnocDn6iRxMxvp_bct50CPVlQgK3MHt4nv_VCcCg-y7d82XsntI2-no56FhtqaKJYehWq1ozUFuJyulYXYx";

function Home() {
  const [restaurantData, setRestaurantData] = useState(localRest);

  const getRestaurantsFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurant&location=LosAngeles";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
