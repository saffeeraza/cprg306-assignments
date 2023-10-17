// app/week5/item-list.js
"use client";
import React, { useState } from 'react';
import items from './items.json';
import Item from './item';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div>
        <button className = "bg-white font-bold p-1 m-2 w-28 hover:bg-gray-500  ml-4"
          onClick={() => setSortBy('name')}
        >
         Name
        </button>
        <button className = "bg-white font-bold p-1 m-2 w-28  hover:bg-gray-500 ml-4"
          onClick={() => setSortBy('category')}
        >
         Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
