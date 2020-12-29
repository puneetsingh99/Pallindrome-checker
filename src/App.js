import React, { useState } from "react";
import "./styles.css";
let str;
export default function App() {
  const [message, setMessage] = useState("");

  function onChangeHandler(event) {
    str = event.target.value;
  }

  function onClickHandler() {
    pallidrome(str);
  }

  function pallidrome(inputStr) {
    let revStr = inputStr.split("").reverse().join("");
    if (revStr === inputStr) {
      setMessage("Pallindrome");
    } else {
      setMessage("Not a Pallindrome");
    }
  }

  return (
    <div className="App">
      <h1>Pallindrome Checker</h1>
      <input onChange={onChangeHandler} />
      <button onClick={onClickHandler}> Check </button>
      <h2> {message} </h2>
    </div>
  );
}
