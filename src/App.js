import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/homepage/homepage.component";
import SignIn from "./components/pages/sign-in/sign-in.component";
import SignUp from "./components/pages/sign-up/sign-up.component";
import Header from "./components/header/header.component";
import NavigationBar from "./components/header/navigationBar";
import Layout from "./components/Layout";
import Plp from './components/pages/plp/plp.component';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/orderNow" component={Plp} />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
