import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [residuo, setResiduo] = useState("");
  const [datos, setDatos] = useState({
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0,
  });
  const getId = (id) => {
    setId(id);
  };
  const getResiduo = (residuo) => {
    setResiduo(residuo);
    //setDatos([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  };
  const getDatos = (datos) => {
    return datos;
  };

  const requestDatos = async () => {
    let newDatos = {
      enero: 0,
      febrero: 0,
      marzo: 0,
      abril: 0,
      mayo: 0,
      junio: 0,
      julio: 0,
      agosto: 0,
      septiembre: 0,
      octubre: 0,
      noviembre: 0,
      diciembre: 0,
    };
    const { reportes: reportesIds } = await axios
      .get(`http://localhost:5000/puntos/${id}`)
      .then((res) => {
        if (res && res.data.reportes) {
          return res.data;
        }
      });

    for (const reporteId of reportesIds) {
      const reporteData = await axios
        .get(`http://localhost:5000/reportes/${reporteId}`)
        .then((res) => {
          if (residuo === res.data.desperdicio) {
            return res.data;
          }
        });
      if (reporteData)
        newDatos[reporteData.mes] = reporteData.cantidad_desperdicio;
    }
    setDatos(newDatos);
  };

  React.useEffect(() => {
    console.log("lolol");
    if (id && residuo) {
      console.log("lel");
      requestDatos();
    }
  }, [id, residuo]);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar getId={getId} getResiduo={getResiduo} />
        <Switch>
          <Route exact path="/">
            <Home datos={datos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
