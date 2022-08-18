import React from "react";
import { useSelector } from "react-redux";
const Test = () => {
  const rdata = useSelector((state) => state.iconsData);
  console.log(rdata);
  return <div></div>;
};

export default Test;
