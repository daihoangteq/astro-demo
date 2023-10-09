import React, { useEffect, useState } from "react";
import { CONSTANT_TYPE_VALUE, type IProperty } from "./ultil";
import Item from "../fake/Item";

const Form = () => {
  const [jsonData, setJsonData] = useState<
    { name: string; value: string; child?: any[] }[]
  >([]);
  const addJSONData = async (
    path: number[],
    property: string,
    value: string
  ) => {
    console.log(property, value);
    const currentJson = [...jsonData]
    let childArr = currentJson[path[0]].child || [];
    for (let i = 0; i < path.length; i++) {
      const newItem = {
        name: property,
        value: value,
        child: [],
      };
      if (path.length === 1) {
        console.log("Hello");
        currentJson[path[i]] = newItem;
      }else {
        if(i === path.length - 1 && childArr) {
          childArr[path[i]] = newItem
        }else {
          console.log(childArr, i);
          // childArr = childArr[path[i]].child
        }
        console.log(i, path[i], newItem, currentJson);
      }
    }
    console.log(jsonData);
    
    // const currentJson = [...jsonData];
    // let childArr = currentJson;
    // for (let i = 0; i < path.length - 1; i++) {
    //   if(path.length > 1) {
    //     childArr = childArr[path[i]].child || []
    //      const newItem = {
    //       name: property,
    //       value: value,
    //       child: [],
    //     };
    //     childArr[path[i]] = newItem;
    //   }
    // }
    // console.log("path", path);
    // const currentJson = [...jsonData];
    // const newItem = {
    //   index: index,
    //   name: property,
    //   value: value,
    // };
    // if(child) {
    //   console.log("into child");
    //     newItem["child"] = child
    // }
    // if(path) {
    //     if(path.length === 1) {
    //         currentJson[path[0]] = newItem;
    //     }
    //     if(path.length > 1) {
    //         path.forEach((item, idx) => {
    //             if(idx === path.length - 1) {
    //                 currentJson[item] = newItem;
    //             }
    //         })
    //     }
    // }
    // // if(index && path.length === 1) {
    // //     currentJson[Number(index) - 1] = newItem;
    // // }
    // console.log(childArr,currentJson);
    setJsonData(currentJson);
  };
  const addField = () => {
    const currentJson = [...jsonData];
    const newField = {
      name: "",
      value: "",
      child: [],
    };
    currentJson.push(newField);
    setJsonData(currentJson);
  };
  useEffect(() => {
    console.log("new", jsonData);
  }, [jsonData]);
  return (
    <div>
      {jsonData.map((item, idx) => {
        return (
          <Item
            path={[idx]}
            key={idx + item.name}
            data={{ name: item.name, value: item.value }}
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
