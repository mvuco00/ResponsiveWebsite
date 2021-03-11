import "./App.css";
import Header from "../src/components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Pricing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
