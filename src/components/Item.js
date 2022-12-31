import React , { useState } from "react";

function Item({ name, category }) {
  const [ cart, cartState ] = useState(false)
  function handleClick(){
    cartState((cart) => !cart)
  }

  const itemClass = cart ? "in-cart" : ""; 
  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={itemClass}> {cart ? "Remove From Cart" : "Add to Cart"} </button>
    </li>
  );
}

export default Item;
