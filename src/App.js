/*
Libs install:
  react-leaflet
  react-router
  react-circular-progressbar
*/
//Components
import MapView from "./Views/MapView/MapView";
import DashBoardView from "./Views/DashBoardView/DashBoardView";
import Login from "./Views/Login/login";
import Navigation from "./Components/Layout/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.css";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/map" component={MapView} />
        <Route path="/login" component={Login} />
        <Route path="/" component={DashBoardView} />
      </Switch>
    </Router>
  );
}

export default App;
