import React, { useContext,useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import api from "../API"
const AppContext = createContext();

// export this context to use across React component tree
export const useAppContext = () => {
const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within appConetextProvider");
  } else {
    return context;
  }
};

function AppContextProvider(props) {
  const [chapters, setChapters] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/chapters`);
      setChapters(response.data);
      return response.data

    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
      <AppContext.Provider value={{ fetchData, chapters }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export default AppContextProvider;
