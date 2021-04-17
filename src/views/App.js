import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Examples from "seed/examples/components/Examples";
import css from "resources/css/App.module.css";
import Feed from "components/Feed"

const App = () =>
  <div class={css.module}>
    <BrowserRouter>
      <Switch>
        <Route path="/examples" component={Examples} />
        <Route path="/feed" component={Feed} />
        <Redirect to="/examples" />
      </Switch>
    </BrowserRouter>
  </div>;

App.propTypes = {};

export default App;