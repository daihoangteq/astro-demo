import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import type { CONSTANT_TYPE_VALUE, IProperty } from "./ultil";
interface Props {
  path: number[];
  data: {
    name: string;
    value: string;
    child: any[];
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
  console.log("Loop", data.name, path);
  const type = useRef<CONSTANT_TYPE_VALUE | undefined>();
  const [filed, setField] = useState<{
    name: string;
    value: string;
    child: any[];
  }>(data);
  const [child, setChild] = useState<
    { index: string; name: string; value: string; child: any[] }[]
  >(data?.child || []);
  const name = useRef<HTMLInputElement | null>(null);
  const name2 = useRef<HTMLInputElement | null>(null);
  const addProperty = () => {
    if (name.current && name2.current) {
      onAddProperty(path, name.current?.value, name2.current?.value, child);
      setField({
        name: name.current?.value,
        value: name2.current?.value,
        child: [],
      });
    }
  };
  const addChildField = () => {
    const currentJson = [...child];
    const newField = {
      index: `${currentJson.length + 1}`,
      name: "",
      value: "",
      child: [],
    };
    currentJson.push(newField);
    onAddProperty([...path, currentJson.length - 1], "", "");
    setChild(currentJson);
  };
  useEffect(() => {
    console.log(filed);
  }, [, filed]);
  return (
    <div>
      <Input className="input" ref={name} defaultValue={data && data.name} />
      <Input className="input" ref={name2} defaultValue={data && data.value} />
      <div style={{ display: "flex" }}>
        <button
          onClick={() => addChildField()}
          disabled={!Boolean(filed && filed.name)}
        >
          Add Child Field
        </button>
        <button onClick={() => addProperty()}>Add Prototype</button>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        {child &&
          child.map((ie, idx) => {
            return (
              <div>
                <Item
                  path={[...path, idx]}
                  data={ie}
                  key={ie.name + idx}
                  onAddProperty={onAddProperty}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(Item);
