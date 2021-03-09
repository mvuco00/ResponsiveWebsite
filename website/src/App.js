import "./App.css";
import Header from "../src/components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
