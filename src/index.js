// From Index-fix branch
import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListBrowse } from "pages/ListBrowse/ListBrowse";
import { List } from "pages/List/List";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { App } from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<ListBrowse />} />
            <Route path="/list/:ListId" element={<List />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
