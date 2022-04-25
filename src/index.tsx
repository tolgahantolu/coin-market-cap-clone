import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk)); // redux'dan gelen applyMiddleware, thunk'ı parametre olarak alır. applyMiddleware sayesinde artık action creater'lar içeriisinden API'leri sorgu gönderip gelen yanıtları store'a kaydedebileceğiz. action'lar type değeri zorunlu, payload değeri opsiyonel olan bir objedir.

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
