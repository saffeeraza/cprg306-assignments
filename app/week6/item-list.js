"use client";
import Item from './item';
import React, { useState } from 'react';

export default function ItemList({items}){

  const [sortBy, setSortBy] = useState("name");
  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if(sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }
  
  return(
    <main>
      <label className= "text-white font-bold m-5">Sort By</label>
      <button className="bg-white font-bold p-2 m-3 w-24 hover:bg-gray-500" onClick = {() => setSortBy('name') }>Name</button>
      <button className="bg-white font-bold p-2 m-3 w-24 hover:bg-gray-500"  onClick = {() => setSortBy('category')}>Category</button>
      <ul>
        {sortedItems.map((item, index) => (
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
      </ul>
    </main>
  )
}