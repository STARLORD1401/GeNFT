import React, { createContext, useEffect, useState } from "react";
import jscoookie from "js-cookie";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [userDetails, setUserDetails] = useState(
    jscoookie.get("userDetails") ? JSON.parse(jscoookie.get("userDetails")) : {}
  );
  useEffect(() => {
    let user_details = jscoookie.get("userDetails");
    if (user_details) setUserDetails(JSON.parse(user_details));
  }, []);

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
