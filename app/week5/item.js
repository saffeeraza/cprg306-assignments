// app/week5/item.js

import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <ul>
          <li className="p-2 m-4 bg-slate-800 max-w-sm">
            <h3 className="text-xl font-bold text-white">{name}</h3> 
            <p className= "text-white"> Amount: {quantity} , Located in: {category}</p>
          </li>
        </ul>
    )
}
export default Item;
