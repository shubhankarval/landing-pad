"use client";

import FilterButtons from "./FilterButtons";
import Card from "./Card";
import { useState } from "react";

const bestSellersData = [
  { id: 1, price: 200, category: "tops" },
  { id: 2, price: 150, category: "tshirts" },
  { id: 3, price: 250, category: "shoes" },
  { id: 4, price: 100, category: "pants" },
  { id: 5, price: 250, category: "pants" },
  { id: 6, price: 300, category: "tops" },
];

// const categories = [...new Set(bestSellersData.map((item) => item.category))];
const categories = Array.from(
  new Set(bestSellersData.map((item) => item.category)),
);

export default function BestSellers() {
  const [items, setItems] = useState(bestSellersData);

  const filterItems = (category?: string ) => {
    var newItems;
    if (category) {
      newItems = bestSellersData.filter(
        (newVal) => newVal.category === category,
      );
    } else {
      newItems = bestSellersData;
    }
    setItems(newItems);
  };

  return (
    <div className="flex flex-col items-center">
      <FilterButtons categories={categories} filterItems={filterItems} />
      <div className="grid grid-cols-3 gap-x-10 gap-y-14">
        {items.map((item) => (
          <Card
            key={item.id}
            imgUrl={`/fashion/best-seller-${item.id}`}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
