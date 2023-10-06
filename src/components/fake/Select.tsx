import React from "react";
import { CONSTANT_TYPE_VALUE, type IProperty } from "./ultil";
interface Props {
  referentRef: React.MutableRefObject<CONSTANT_TYPE_VALUE | undefined>;
}
const Select: React.FC<Props> = ({ referentRef }) => {
  const selectType = () => {
    referentRef.current = CONSTANT_TYPE_VALUE.STRING;
  };
  return <div onClick={() => selectType()}>Select</div>;
};

export default Select;
