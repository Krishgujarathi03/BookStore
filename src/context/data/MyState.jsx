import React, { useState } from "react";
import MyContext from "./MyContext";

function MyState({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );
  return (
    <MyContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </MyContext.Provider>
  );
}
export default MyState;
