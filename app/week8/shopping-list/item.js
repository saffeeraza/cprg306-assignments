export default function Item({name, quantity, category, onSelect}) {
  return (
    <ul>
      <li className="p-2 m-4 text-white bg-gray-800 max-w-sm" onClick={()=> onSelect()} >
        <h3 className="text-xl text-white font-bold">{name}</h3> 
        <p>Quantity: {quantity}</p> 
        <p>In {category} aisle</p> 
      </li>
    </ul>
  )
}