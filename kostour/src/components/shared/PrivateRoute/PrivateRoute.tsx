import React from "react";
import router from "next/router";

interface Props {
  shouldHaveToken?: boolean;
  children: React.ReactNode;
}

export const PrivateRoute = ({ shouldHaveToken = false, children }: Props) => {
  const token = router.query.token;
  console.log({ token });
  console.log("router.query", router);

  if (shouldHaveToken && !token) {
    router.push("/");
  }

  if (shouldHaveToken && token) {
    return <>{children}</>;
  }

  return null;
};
