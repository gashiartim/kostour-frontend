import { User } from "../../../api/User";
import React, { useContext } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading?: boolean;
  user?: User;
  error?: any;
  login: (user: User, token?: string) => void;
  logout: () => void;
}

const voidFunction = () => {};

const AuthContextValues: AuthContextType = {
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  error: undefined,
  login: voidFunction,
  logout: voidFunction,
};

export const AuthContext =
  React.createContext<AuthContextType>(AuthContextValues);

export const useAuthContext = () => useContext(AuthContext);
