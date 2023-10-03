function Item({ name, quantity, category }) {
    return (
      <ul>
        <li className="p-4 m-4 bg-blue-900 py-2 max-w-md">
        <p className="text-white font-semibold">{name}</p>
        <p className="text-white">Buy {quantity}</p>
        <p className="text-white">{category}</p>
      </li>
      </ul>
    );
  }
  
  export default Item;
  