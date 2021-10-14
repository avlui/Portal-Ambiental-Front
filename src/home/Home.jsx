import Chart from "../Components/Common/chart/Chart";
import "./home.css";
import LatestUpdates from "../Components/Common/latestUpdates/LatestUpdates";
import React from "react";

export default function Home(props) {
  return (
    <div className="home">
      
      <Chart title="Impacto Ambiental" grid dataKey="Active User" param={props.datos}/>
      <div className="homeWidgets">
        <LatestUpdates/>
      </div>
    </div>
  );
}
