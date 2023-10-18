import React, { useEffect } from "react";

const Button = () => {
  //   const getApi = async () => {
  //     const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  //     const repo = await res.json();
  //     console.log("Button", repo);
  //   };
  useEffect(() => {
    console.log("Hello Button");
  }, []);
  const handleClick = () => {
    console.log("Clicked");
  };
  return <button onClick={() => handleClick()}>Button</button>;
};

export default Button;
