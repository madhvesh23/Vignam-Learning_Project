import React, { useEffect, useState, useContext } from "react";
import { useAppContext } from "./ContextApi";
import Chapters from "./Chapters"
function MainPage() {
const {chapters} = useAppContext()



  return (
    <div>

      <Chapters />
    </div>
  );
}

export default MainPage;
