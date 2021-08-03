import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Todos from "./pages/Todos";
import Auth from "./pages/Auth";

import "./App.scss";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          {currentUser ? <Redirect to="/auth" /> : <Todos />}
        </Route>
        {/* <Route path="/all">
          <Todos />
        </Route> */}
        <Route path="/auth">
          <Auth />
        </Route>
        <Route exact path="/">
          <Todos />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
