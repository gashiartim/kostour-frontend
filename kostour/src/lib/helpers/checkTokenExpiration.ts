import jwt_decode from "jwt-decode";

export const checkTokenExpiration = (token: string): boolean => {
  if (jwt_decode<any>(token).exp < Date.now() / 1000) {
    return true;
  }

  return false;
};
