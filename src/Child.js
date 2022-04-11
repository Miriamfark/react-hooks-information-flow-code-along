import React from "react";
import Parent from "./Parent.js";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {

  function handleClick() {
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }

  return (
    <div 
      onClick={handleClick} 
      className="child"  
      style={{ backgroundColor: color }} 
    />
    )
  }

export default Child;
