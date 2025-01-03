import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={myStore}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Provider>
  </BrowserRouter>
);
