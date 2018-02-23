import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./common/header";

import PostContent from "./components/postContent";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
          <BrowserRouter>
            <Switch>
              <Route path="/" component={PostContent} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
