import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
// pages
import Home from "./pages/Home";
import CardDetail from "./pages/CardDetail";
// componets
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/card/:id" component={CardDetail} />
      </Switch>
    </Router>
  );
}

export default App;
