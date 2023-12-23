import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function App() {

  const [inputValue,setInputValue] = useState("")

  function display(value){
    setInputValue(inputValue + value);
  }

  function calculate(){
    try {
      // Attempt to evaluate the expression in inputValue
      let answers = eval(inputValue);
      setInputValue(answers.toString()); // Ensure the answer is a string
    } catch (error) {
      // Handle errors (e.g., invalid expression)
      console.error("Error in calculation:", error);
      setInputValue("Error"); // Display an error message or reset the input
    }
  }

  function clear(){
    setInputValue("");
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
    <form name="calc" className="calculator">
    <input type="text" className="value" value={inputValue} onChange={handleChange}/>
    <span className="clear" onClick={clear}>c</span>
    <span onClick={() => display("/")} className="division">/</span>
    <span onClick={() => display("*")} className="multiplication">*</span>
    <span onClick={() => display("7")} >7</span>
    <span onClick={() => display("8")} >8</span>
    <span onClick={() => display("9")}>9</span>
    <span onClick={() => display("-")} className="substration">-</span>
    <span onClick={() => display("4")} >4</span>
    <span onClick={() => display("5")} >5</span>
    <span onClick={() => display("6")} >6</span>
    <span onClick={() => display("+")} className="addition">+</span>
    <span onClick={() => display("1")}>1</span>
    <span onClick={() => display("2")}>2</span>
    <span onClick={() => display("3")}>3</span>
    <span onClick={() => display("0")}>0</span>
    <span onClick={() => display("00")}>00</span>
    <span onClick={() =>display(".")}>.</span>
    <span onClick={() =>calculate()}className="equal">=</span> 
    </form>
    </>
  );

}

export default App;
