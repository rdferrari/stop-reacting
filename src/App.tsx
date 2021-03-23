import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
// pages
import Home from "./pages/Home";
import CardDetail from "./pages/CardDetail";
import Research from "./pages/Research";
import Engineer from "./pages/Engineer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/card/:id" component={CardDetail} />
        <Route path="/research" component={Research} />
        <Route path="/engineer" component={Engineer} />
      </Switch>
    </Router>
  );
}

export default App;
