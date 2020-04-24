import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/auth"
import { BackgroundContainer } from "../styles/index"


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  const getColors = () => {
    axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then((res) => setColorList(res.data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
  getColors();
  }, []);
  return (
    <>
      <ColorList colors={colorList} updateColors={getColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
