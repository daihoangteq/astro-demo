import React, { useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import type { CONSTANT_TYPE_VALUE, IProperty } from "./ultil";
interface Props {
  path: number[];
  data?: {
    index: string;
    name: string;
    value: string;
  };
  onAddProperty: (
    path: number[],
    index: string,
    property: string,
    value: string,
    child?:any[]
  ) => void;
  onRemoveProperty?: (property: string) => void;
}
const Item: React.FC<Props> = ({
  path,
  data,
  onAddProperty,
  onRemoveProperty,
}) => {
  console.log(path);
  const [isEdit, setIsEdit] = useState(false);
  const type = useRef<CONSTANT_TYPE_VALUE | undefined>();
  const [child, setChild] = useState<
    { index: string; name: string; value: string; child?: any[] }[]
  >([]);
  const name = useRef<HTMLInputElement | null>(null);
  const name2 = useRef<HTMLInputElement | null>(null);

  const addProperty = () => {
    console.log("child", child);
    if (data && data.index && name.current && name2.current) {
      onAddProperty(
        path,
        data?.index,
        name.current?.value,
        name2.current?.value,
        child
      );
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
      {data ? (
        <>
          <Input className="input" ref={name} defaultValue={data.name} />
          <Input className="input" ref={name2} defaultValue={data.value} />
        </>
      ) : (
        <>
          <Input className="input" ref={name} />
          <Input className="input" ref={name2} />
        </>
      )}
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
