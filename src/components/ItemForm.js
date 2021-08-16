import React, { useState } from "react";
import { v4 as uuid } from "uuid";


//ItemForm part: You need to add what the user puts in to the cart, complete with their category. 
//Believe you will need to add event listeners to inputs and carry that info up to the App level,
//(where the items are) and use the spread operator to add the item, so that new item set travels to the 
//Shopping list
function ItemForm({ addItems }) {
  const [newItem, setNewItem]= useState({id: 1, name: "", category: "Produce"})

  function newItemAdd(e){
    let name = e.target.value
    let category = e.target.value
    if (e.target.name === "name"){
      name = e.target.value
    }
    if (e.target.name === "category"){
      category = e.target.value
    }
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category,
    };
    setNewItem(newItem)
    addItems(newItem)
  }

  function onItemFormSubmit(e){
    e.preventDefault()
    newItemAdd(e)
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name"  value={newItem.name} onChange={newItemAdd}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={newItemAdd} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
