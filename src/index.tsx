import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "redux/store";
import App from "./App";
import Layout from "components/Layout";
import "./styles/index.css";
import "./styles/animations.css";
import "react-toastify/dist/ReactToastify.css";

const rootDiv = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
