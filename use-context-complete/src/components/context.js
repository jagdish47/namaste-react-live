import { createContext } from "react";

const appContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <appContext.Provider value="Jagdish Kumawat">
      {children}
    </appContext.Provider>
  );
};

export { appContext, AppProvider };
