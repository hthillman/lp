import { Route, Switch} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import React, {Component} from "react";
import Home from "./views/Home";
import Layout from "./Layout";

class App extends Component {
  render() {
    return (
        <Layout>
        <Home />
        </Layout>
    );
  }
}

export default App;
