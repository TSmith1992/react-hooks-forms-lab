import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterValue, setFilterValue] = useState("")

  function onSearchChange(e){
    setFilterValue(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && filterValue === "") return true;

    return (item.category === selectedCategory || item.name === filterValue);
  });

  return (
    <div className="ShoppingList">
      <ItemForm addItems={addItems}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} filterValue={filterValue} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
