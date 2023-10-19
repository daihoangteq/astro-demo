import React, { useEffect, useState } from "react";

const Button = () => {
  const [hydrated, setHydrated] = useState(false);
  //   const getApi = async () => {
  //     const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  //     const repo = await res.json();
  //     console.log("Button", repo);
  //   };
  useEffect(() => {
    setHydrated(true);
    const isHydra = localStorage.getItem("hydrate");
    if (isHydra) {
      console.log("hydrate", isHydra);
    } else {
      localStorage.setItem("hydrate", "Button aFTER");
    }
    console.log("Hello Button after");
  }, []);
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <button
      style={{ backgroundColor: hydrated ? "green" : "red" }}
      onClick={() => handleClick()}
    >
      Button
    </button>
  );
};

export default Button;
