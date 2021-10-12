//Components
import MapView from "./Views/MapView/MapView";
import DashBoardView from "./Views/DashBoardView/DashBoardView";
import Login from "./Views/Login/login";
import ProfileView from "./Views/ProfileView/ProfileView";
import Register from "./Views/Register/Register";

import NavBar from "./Components/Layout/NavBar/NavBar";

//Styles
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

//Router
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";

//Context
import {UsersContextProvider} from "./Context/UsersContext"


function App() {
  
  return (
    <UsersContextProvider>

      <div className="App">
        <Router>
          <ToastContainer/>
          <NavBar />
          <Switch>
            <Route path="/map"  component={MapView} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={ProfileView} />
            <Route path="/" component={DashBoardView} />
            <Route path="/log" render ={(rouerProops)=> <DashBoardView isTogle={true} {...rouerProops}/>} />
          </Switch>
        </Router>
      </div>

    </UsersContextProvider>
  );
}

export default App;
