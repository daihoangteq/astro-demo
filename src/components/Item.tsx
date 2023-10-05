import React from "react";

interface Props {
  data: {
    name: string;
    avatar: string;
  };
  index: number;
  children: any;
}
const Item: React.FC<Props> = ({ data, index, children }) => {
  console.log(index);
  const handleClick = () => {
    console.log(data);
  };
  return <div onClick={() => handleClick()}>{children}</div>;
};

export default Item;
