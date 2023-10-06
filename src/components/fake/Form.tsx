import React, { useEffect, useState } from "react";
import { CONSTANT_TYPE_VALUE, type IProperty } from "./ultil";
import Item from "../fake/Item";

const Form = () => {
  const [jsonData, setJsonData] = useState<
    { index: string; name: string; value: string, child?:any[] }[]
  >([]);
  const addJSONData = (path:number[],index: string, property: string, value: string, child?:any[]) => {
    console.log("path", path);
    const currentJson = [...jsonData];
    const newItem = {
      index: index,
      name: property,
      value: value,
    };
    if(child) {
        newItem["child"] = child
    }
    if(path) {
        if(path.length === 1) {
            currentJson[path[0]] = newItem;
        }
        if(path.length > 1) {
            path.forEach((item, idx) => {
                if(idx === path.length - 1) {
                    currentJson[item] = newItem;
                }
            })
        }
    }
    // if(index && path.length === 1) {
    //     currentJson[Number(index) - 1] = newItem;
    // }
    setJsonData(currentJson);
  };
  const addField = () => {
    const currentJson = [...jsonData];
    const newField = {
      index: `${currentJson.length + 1}`,
      name: "",
      value: "",
    };
    currentJson.push(newField);
    setJsonData(currentJson)
  };
  useEffect(() => {
    console.log(jsonData);
  }, [jsonData]);
  return (
    <div>
      {jsonData.map((item, idx) => {
        return (
          <Item
            path={[idx]}
            key={item.index + item.name}
            data={{ index: item.index, name: item.name, value: item.value }}
            onAddProperty={addJSONData}
          />
        );
      })}
      <div style={{ background: "red" }}>
        <button onClick={() => addField()}>Add Field</button>
      </div>
    </div>
  );
};

export default Form;
