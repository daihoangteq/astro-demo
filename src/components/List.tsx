import React from "react";
import Item from "./Item";
interface Props {
  data: {
    name: string;
    id: string;
    avatar: string
  }[];
}
const List: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => {
        return <Item key={item.id} data={item} index={index} />;
      })}
    </ul>
  );
};

export default List;
