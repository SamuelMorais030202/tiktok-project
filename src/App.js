import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NewUser from "./pages/newUser";

export default function App () {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/about" component={ MainPage } />
        <Route path="/privacy-policy" component={ PrivacyPolicy } />
        <Route path="/terms" component={ TermsOfUse } />
        <Route path="/new-user" component={ NewUser } />
      </Switch>
    </div>
  );
}