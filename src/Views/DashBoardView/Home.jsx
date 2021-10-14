import Chart from "../../Components/Common/Dashboard/chart/Chart";
import "./home.css";
import LatestUpdates from "../../Components/Common/Dashboard/latestUpdates/LatestUpdates";
import React from "react";

export default function Home(props) {
  return (
    <div className="home">
      
      <Chart title="Menú" grid dataKey="Active User" param={props.datos}/>
      <div className="homeWidgets">
        <LatestUpdates/>
      </div>
    </div>
  );
}
