import React from "react";
import Benefits from "./benefits";
import Mobial from "./mobialBen";
const IsMobial = () => {
  let windowWidth = window.outerWidth;
  console.log(windowWidth);
  let isMobail;
  if (windowWidth <= 420) {
    isMobail = true;
  } else {
    isMobail = false;
  }
  return isMobail ? <Mobial /> : <Benefits />;
};
export default IsMobial;
