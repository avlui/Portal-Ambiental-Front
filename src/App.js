/*
Libs install:
  react-leaflet , leaflet , leaflet-geosearch
  react-router
  react-circular-progressbar
  axios
*/
//Components
import MapView from './Views/MapView/MapView';
import DashBoardView from './Views/DashBoardView/DashBoardView';
import Login from "./Views/Login/login";
import ProfileView from './Views/ProfileView/ProfileView'

import NavBar from "./Components/Layout/NavBar/NavBar";

//Styles
import "bootstrap/dist/css/bootstrap.css";

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Switch>
              <Route path='/map' component ={MapView}/>
              <Route path="/login" component={Login} />
              <Route path='/profile' component={ProfileView}/>
              <Route path='/' component ={DashBoardView}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
