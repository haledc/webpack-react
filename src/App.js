import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./containers/Home";
import About from "./containers/About";

const App = () => (
  <>
    <BrowserRouter>
      <Nav />
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </BrowserRouter>
  </>
);

export default App;
