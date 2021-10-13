import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
   return (
      <Router>
         <Sidebar></Sidebar>
         <Switch>
            <Route exact path="/"></Route>
         </Switch>
      </Router>
   );
}

export default App;
