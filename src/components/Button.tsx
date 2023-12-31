import React, { useEffect, useState } from "react";

const Button = () => {
  const [hydrate, setHydrate] = useState(false);
  //   const getApi = async () => {
  //     const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  //     const repo = await res.json();
  //     console.log("Button", repo);
  //   };
  useEffect(() => {
    setHydrate(true);
    const isHydra = localStorage.getItem("hydrate");
    if (isHydra) {
      console.log("hydrate", isHydra);
    } else {
      localStorage.setItem("hydrate", "Button");
    }
    console.log("Hello Button");
  }, []);
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <button
      style={{ backgroundColor: hydrate ? "green" : "red" }}
      onClick={() => handleClick()}
    >
      Button
    </button>
  );
};

export default Button;
