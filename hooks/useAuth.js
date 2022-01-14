import { useContext } from "react";

import AuthContext from "../auth/context";
const useAuth = () => {
  const { token, setToken } = useContext(AuthContext);

  const getUserToken = (userToken) => {
    setToken(userToken);
  };

  return { token, getUserToken };
};

export default useAuth;
