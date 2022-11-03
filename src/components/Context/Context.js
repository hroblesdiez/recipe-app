import React, { createContext } from "react";

export const myContext = createContext();


export const AppContext = ({children}) => {
  return (
    <myContext.Provider>{children}</myContext.Provider>
  )
}