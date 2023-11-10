"use client";
import Item from './item';
import React, { useState } from 'react';

export default function ItemList({items, onItemSelect}){

  const [sortBy, setSortBy] = useState("name");
  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if(sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return(
    <div>
      <label className= "text-white font-bold m-4">Sort By:</label>
      <button className="bg-white font-bold p-2 m-3 w-24 hover:bg-gray-500" onClick = {() => setSortBy('name') }>Name</button>
      <button className="bg-white font-bold p-2 m-3 w-24 hover:bg-gray-500"  onClick = {() => setSortBy('category')}>Category</button>
      <ul>
        <li>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)}/>
          ))}
          </li>
      </ul>
    </div>
  )
}