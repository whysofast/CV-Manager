import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CreateForm from "./pages/CreateForm";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
