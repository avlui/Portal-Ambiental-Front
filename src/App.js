/*
Libs install:
  react-leaflet , leaflet
  react-router
  react-circular-progressbar
*/
//Components
import MapView from './Views/MapView/MapView';
import DashBoardView from './Views/DashBoardView/DashBoardView';

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
          <Switch>

              <Route path='/map'>
                <MapView/>
              </Route>
                
              <Route path='/'>
                <DashBoardView/>
              </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
