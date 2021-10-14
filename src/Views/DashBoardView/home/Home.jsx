import Chart from "../../../Components/Common/chart/Chart.jsx";
import "./home.css";
import LatestUpdates from "../../../Components/Common/latestUpdates/LatestUpdates";
import React from "react";

export default function Home(props) {
  return (
    <div className="home">
      <Chart
        title="Impacto Ambiental"
        grid
        dataKey="Active User"
        param={{datos: props.datos, circulacionDatos: props.circulacionDatos}}
      />
      <div className="homeWidgets">
        <LatestUpdates
            param={props.tablaDatos}/>
      </div>
    </div>
  );
}
