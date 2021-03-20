import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
// pages
import Home from "./pages/Home";
import CardDetail from "./pages/CardDetail";
// Components
import Footer from "./components/Footer";

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
