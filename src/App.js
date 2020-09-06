import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

import configureStore from "./modules/redux/root";
import ROUTES, { RenderRoutes } from "./modules/route/Routes";
import NavigationBar from "./utils/NavigationBar";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let store = configureStore();

  return (
    <Provider store={store}>
      <Router>
          <NavigationBar />
          <RenderRoutes routes={ROUTES} />
      </Router>
    </Provider>
  );
}

export default App;
