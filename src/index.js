import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import UsersProvider from "./contexts/UsersProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>
);
