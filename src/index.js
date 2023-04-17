import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/redux-store";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById("root")
);
