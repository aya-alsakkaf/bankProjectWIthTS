import React, { createContext } from "react";

type UserContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
