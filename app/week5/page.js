//import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className = "bg-slate-950" >
      <h1 className = "font-bold text-3xl text-white ml-4 py-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;

