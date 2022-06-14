/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from "react";

// type AppContextType = {

// };

const AppContext = createContext({});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
export default AppContext;
