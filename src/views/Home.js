import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import Blog from "./Blog";
import Team from "./Team";


class Home extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/team" component={Team} />
                <Route path="/blog" component={Blog} />
        </Switch>
        </Router>
      </div>
    );
  }
};

export default Home;



