import React from "react";
import { Image } from 'astro:assets';

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
      <Image src={data.avatar} alt={data.name} width={100} height={100} />
    </li>
  );
};

export default Item;
