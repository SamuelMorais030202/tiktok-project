import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NewUser from "./pages/newUser";
import WatchVideos from "./pages/WatchVideos";
import Password from "./pages/Password";
import Privete from "./pages/Privete";

export default function App () {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/about" component={ MainPage } />
        <Route path="/privacy-policy" component={ PrivacyPolicy } />
        <Route path="/terms" component={ TermsOfUse } />
        <Route path="/new-user" component={ NewUser } />
        <Route path="/watchVieos" component={ WatchVideos } />
        <Route path="/password" component={ Password } />
        <Route path="/privete" component={ Privete } />
      </Switch>
    </div>
  );
}