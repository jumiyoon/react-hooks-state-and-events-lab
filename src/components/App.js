import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


// replace 'false' with a state variable that can be toggled between true and false
// this will be used for the Dark Mode Toggle feature

function App() {
  const [ mode, setMode ] = useState(false);

  function handleModeClick(){
    setMode((mode) => !mode)
  }
  
  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleModeClick}>{mode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
