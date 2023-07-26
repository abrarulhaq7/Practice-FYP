import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ItemCard from "./ItemCard";

const cardsData = [
  {
    id: "2",
    itemName: "Coke",
    companyName: "Coca cola",
    price: 190,
    weight: 1.5,
    imgURL:
      "https://www.alfatah.pk/cdn/shop/products/NewProject-2023-03-23T161603.218.png?v=1679570177",
  },
  {
    id: "1",
    itemName: "White bread",
    companyName: "Bunnys",
    price: 120,
    weight: 1.5,
    imgURL: "https://groce.pk/storage/product/2838.jpeg",
  },

  {
    id: "4",
    itemName: "Coke",
    companyName: "Coca cola",
    price: 190,
    weight: 1.5,
    imgURL:
      "https://www.alfatah.pk/cdn/shop/products/NewProject-2023-03-23T161603.218.png?v=1679570177",
  },
  {
    id: "3",
    itemName: "Milk pack",
    companyName: "Olpers",
    price: 160,
    weight: 1,
    imgURL:
      "https://cdnprod.mafretailproxy.com/sys-master-root/h8b/h1e/48379358412830/1700Wx1700H_36843_main.jpg",
  },
  {
    id: "5",
    itemName: "Coke",
    companyName: "Coca cola",
    price: 190,
    weight: 1.5,
    imgURL:
      "https://www.alfatah.pk/cdn/shop/products/NewProject-2023-03-23T161603.218.png?v=1679570177",
  },
  {
    id: "6",
    itemName: "Coke",
    companyName: "Coca cola",
    price: 190,
    weight: 1.5,
    imgURL:
      "https://www.alfatah.pk/cdn/shop/products/NewProject-2023-03-23T161603.218.png?v=1679570177",
  },
];
export default function ItemCards() {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      data={cardsData}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ItemCard
          key={item.id}
          itemName={item.itemName}
          companyName={item.companyName}
          price={item.price}
          weight={item.weight}
          image={item.image}
          imgURL={item.imgURL}
          onPress={() => console.log("Tapped", item)}
          //   renderRightActions={() => (
          //     <ListItemDeleteAction onPress={() => handleDelete(item)} />
          //   )}
        />
      )}
      //   ItemSeparatorComponent={<ListItemSeparator />} // Divider
      refreshing={refreshing}
      onRefresh={() => {
        setMessages([
          {
            id: 3,
            title: "Nabeel",
            description: "D3",
            // image: require("../assets/mosh.jpg"),
          },
        ]);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
