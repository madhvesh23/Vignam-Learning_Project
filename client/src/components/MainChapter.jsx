import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Topics from "./Topics";
import api from "../API"
function MainChapter() {
  const [chapter, setChapter] = useState([]);
  const { id } = useParams();
  
  const fetch = async () => {
    try {
      const response = await axios.get(
        `${api}/chapter/${id}`
      );
      setChapter(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };
  useEffect(() => {
    fetch();
  }, [id,chapter]);
  return (
    <>
     {chapter && <Topics chapter_id={id} chapter={chapter}/>}
    </>
  );
}

export default MainChapter;
