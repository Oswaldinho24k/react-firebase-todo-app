import React from "react";
import { Switch, Route } from "react-router-dom";
import Todos from "./pages/Todos";
import Auth from "./pages/Auth";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import PrivateRoute from "./components/common/PrivateRoute";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <PrivateRoute component={Todos} path="/" exact />
        <Route path="/login">
          <Auth />
        </Route>
        <Route exact path="/todos">
          <Todos />
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
