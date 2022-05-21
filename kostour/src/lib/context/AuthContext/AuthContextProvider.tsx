import { checkTokenExpiration } from "../../helpers/checkTokenExpiration";
import React, { useEffect, useState } from "react";

import { getUserDetails, User } from "../../../api/User";
import axios from "axios";
import localforage from "localforage";
import { AuthContextType, AuthContext } from "./AuthContext";
import { useRouter } from "next/router";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

interface AuthContextProviderProps {
  children: React.ReactNode | null;
}

export const LOCAL_STORAGE_KEY = "KOSTOUR";

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    const userStorageDetails = await localforage.getItem<string>(
      LOCAL_STORAGE_KEY
    );

    // axios.defaults.headers.common.Authorization = `Bearer ${userStorageDetails}`;
    if (!userStorageDetails || checkTokenExpiration(userStorageDetails)) {
      setLoading(false);
      setUser(undefined);
      return;
    }
    axios.defaults.headers.common.Authorization = `Bearer ${userStorageDetails}`;

    try {
      const res = await getUserDetails();
      setUser(res);
    } catch (err: any) {
      setError(err);
      localforage.removeItem(LOCAL_STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  };

  const login = (user: any | User) => {
    setUser({ profile: { ...user }, token: user.token });
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    localforage.setItem(LOCAL_STORAGE_KEY, user.token);
    router.push("/");
  };

  const logout = async () => {
    setUser(undefined);
    await localforage.removeItem(LOCAL_STORAGE_KEY);

    await authenticate();
    router.push("/login");
  };

  if (loading) return <LoadingScreen />;

  const context: AuthContextType = {
    isAuthenticated: user !== undefined,
    isLoading: loading,
    error: error,
    user: user,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
