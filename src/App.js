import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/homepage/homepage.component";
import SignIn from "./components/pages/sign-in/sign-in.component";
import SignUp from "./components/pages/sign-up/sign-up.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
