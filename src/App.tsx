import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </BrowserRouter>
      </TodoContextProvider>
    </div>
  );
}

export default App;
