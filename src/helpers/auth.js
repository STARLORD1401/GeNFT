import jsCookie from "js-cookie";

export const setUser = (user) => {
  console.log("user: ", user);
  jsCookie.set("userDetails", JSON.stringify(user));
  return true;
};
export const getUser = () => {
  if (jsCookie.get("userDetails")) {
    return JSON.parse(jsCookie.get("userDetails"));
  } else return null;
};
export const delUser = () => {
  jsCookie.remove("userDetails");
};
