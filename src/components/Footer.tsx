import React, { useState } from "react";

const FooterReact = () => {
  const [number, setNumber] = useState(0);
  console.log("Footer");
  const handleChange = () => {
    console.log("change");
    let currentNumber = number;
    currentNumber++
    setNumber(currentNumber);
  };
  return <button onClick={() => handleChange()}>Footer {number}</button>;
};

export default FooterReact;
