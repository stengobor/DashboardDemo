import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initalState = {
  search: false,
  chat: false,
  notification: false,
  userprofile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  const [isClicked, setIsClicked] = useState(initalState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initalState, [clicked]: true });
  };

  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize, 
        setScreenSize
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
