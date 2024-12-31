/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { API } from "../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const { children } = props;
  const [user, setUser] = useLocalStorage("user", null);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const history = useHistory();

  function logInUser(data) {
    API.post("/users", data)
      .then((response) => {
        toast.success("Login başarılı. id:" + response.data.id);
        //token servisten gelmiyor. varmış yapalım.
        const loggedUser = {
          ...response.data,
          token: "kjdshglkjasdhfkladshfklasdhfkljasdhflkjasdhflkjhasdf",
        };
        setUser(loggedUser);
        history.push("/feed");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  function logOutUser() {
    setUser(null);
    history.push("/login");
  }

  const isUserLoggedIn = user ? true : false;

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logInUser,
        isUserLoggedIn,
        logOutUser,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
