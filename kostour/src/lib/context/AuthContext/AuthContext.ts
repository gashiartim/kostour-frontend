import { IProfile, LoginRegisterResponse, User } from "../../../api/User";
import React, { useContext } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading?: boolean;
  user?: IProfile;
  error?: any;
  login: (user: LoginRegisterResponse) => void;
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
