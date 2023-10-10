import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Item from "../fake/Item";

const Form = () => {
  // const [jsonData, setJsonData] = useState<
  //   { name: string; value: string; child: any[] }[]
  // >([]);
  const [fakeData, setFakeData] = useState<
    { name: string; value: string; child: any[] }[]
  >([]);
  useLayoutEffect(() => {
    const jsonData = localStorage.getItem("jsonData" || "");
    if (!jsonData) {
      localStorage.setItem("jsonData", JSON.stringify([]));
    } else {
      setFakeData(JSON.parse(jsonData))
    }
  }, []);
  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem("jsonData")
  //   }
  // },[])
  const addJSONData = useCallback(
    (path: number[], property: string, value: string) => {
      const jsonData = JSON.parse(localStorage.getItem("jsonData" || "") || "");
      const currentJson = [...jsonData];
      let childArr = currentJson[path[0]].child || [];
      for (let i = 0; i < path.length; i++) {
        const newItem = {
          name: property,
          value: value,
          child: [],
        };
        if (path.length === 1) {
          currentJson[path[i]] = newItem;
        } else {
          if (i === path.length - 1 && childArr) {
            childArr[path[i]] = newItem;
          } else {
            if (childArr.length && i + 1 !== path.length - 1) {
              childArr = childArr[path[i]].child;
            }
          }
        }
      }
      localStorage.setItem("jsonData", JSON.stringify(currentJson));
    },
    []
  );
  const showData = () => {
    const jsonData = JSON.parse(localStorage.getItem("jsonData" || "") || "");
    console.log(jsonData);
    
  }
  const addField = () => {
    const jsonData = JSON.parse(localStorage.getItem("jsonData" || "") || "");
    const currentJson = [...jsonData];
    const fake = [...fakeData];
    const newField = {
      name: "",
      value: "",
      child: [],
    };
    currentJson.push(newField);
    localStorage.setItem("jsonData", JSON.stringify(currentJson));
    fake.push(newField);
    setFakeData(fake);
  };
  // useEffect(() => {
  //   console.log("new", jsonData);
  // }, [jsonData]);
  return (
    <div>
      {fakeData.map((item, idx) => {
        return (
          <Item
            path={[idx]}
            key={idx + item.name}
            data={item}
            onAddProperty={addJSONData}
          />
        );
      })}
      <div style={{ background: "red" }}>
        <button onClick={() => addField()}>Add Field</button>
      </div>
      <div>
        <button onClick={() => showData()}>Show</button>
      </div>
    </div>
  );
};

export default Form;
