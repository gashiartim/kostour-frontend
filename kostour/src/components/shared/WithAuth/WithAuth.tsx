import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../lib/context/AuthContext/AuthContext";

const withAuth = (Component: any) => {
  const Auth = () => {
    const router = useRouter();
    const { isAuthenticated } = useAuthContext();

    useEffect(() => {
      // If user is not logged in, return login component
      if (!isAuthenticated) {
        router.push("/login");
        return;
      }
    }, []);

    return <Component />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
