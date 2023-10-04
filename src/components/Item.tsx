import React from "react";

interface Props {
  data: {
    name: string;
    avatar: string;
  };
  index: number;
}
const Item: React.FC<Props> = ({ data, index }) => {
  console.log(index);
  const handleClick = () => {
    console.log(data);
  };
  return (
    <li onClick={() => handleClick()}>
      <img src={data.avatar} alt={data.name} />
    </li>
  );
};

export default Item;
