import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import App from "./App";
import Layout from "components/Layout";
import "./styles/index.css";
import "./styles/animations.css";

const rootDiv = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Provider store={store}>
          <App />
        </Provider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
