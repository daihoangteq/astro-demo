import React, { useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import type { CONSTANT_TYPE_VALUE, IProperty } from "./ultil";
interface Props {
  path: number[];
  data?: {
    name: string;
    value: string;
  };
  onAddProperty: (
    path: number[],
    property: string,
    value: string,
    child?: any[]
  ) => void;
  onRemoveProperty?: (property: string) => void;
}
const Item: React.FC<Props> = ({
  path,
  data,
  onAddProperty,
  onRemoveProperty,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const type = useRef<CONSTANT_TYPE_VALUE | undefined>();
  const [child, setChild] = useState<
    { index: string; name: string; value: string; child?: any[] }[]
  >([]);
  const name = useRef<HTMLInputElement | null>(null);
  const name2 = useRef<HTMLInputElement | null>(null);

  const addProperty = () => {
    if (name.current && name2.current) {
      onAddProperty(path, name.current?.value, name2.current?.value, child);
    }
  };
  const addField = () => {
    const currentJson = [...child];
    const newField = {
      index: `${currentJson.length + 1}`,
      name: "",
      value: "",
    };
    currentJson.push(newField);
    console.log("current", currentJson);
    setChild(currentJson);
  };
  // if (data && !isEdit) {
  //     return (
  //         <>
  //             <div>
  //                 {data?.name} {data?.value.type}
  //             </div>
  //             <button disabled={isEdit}>
  //                 Edit
  //             </button>
  //         </>
  //     );
  // }
  return (
    <div>
      <Input className="input" ref={name} defaultValue={data && data.name}/>
      <Input className="input" ref={name2} defaultValue={data && data.value}/>
      <div style={{ paddingLeft: "20px" }}>
        {child &&
          child.map((ie, idx) => {
            return (
              <Item
                path={[...path, idx]}
                data={ie}
                key={ie.value}
                onAddProperty={onAddProperty}
              />
            );
          })}
      </div>
      <div style={{ background: "pink" }}>
        <button onClick={() => addField()}>Add Child Field</button>
      </div>
      <button onClick={() => addProperty()}>Add Prototype</button>
    </div>
  );
};

export default React.memo(Item);
