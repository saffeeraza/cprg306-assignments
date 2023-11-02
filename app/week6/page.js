"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import React from "react";

export default function Page() {
  const [items, setItems] = React.useState(itemsData);

  const handleAddItem = newItem => {
    setItems([...items, newItem]);
  };

  return(
    <main className = "bg-slate-950">
      <h1 className="font-bold text-3xl text-white ml-4 py-4">Shopping List</h1>
      <h2 className="text-white text-xl font-bold ml-6 py-2">Add New Item</h2>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items}/>
    </main>
  );
}