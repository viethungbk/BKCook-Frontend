import React from "react";
import { Switch } from "react-router-dom";

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import axios from "axios";
if (localStorage.getItem("token")) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
} else {
  axios.defaults.headers.common["Authorization"] = ``;
}

const App = () => {
  return <Switch>{routes()}</Switch>;
};
export default App;
