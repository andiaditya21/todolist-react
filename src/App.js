import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TodoList from "./pages/TodoList";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
