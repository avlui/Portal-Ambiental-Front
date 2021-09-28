import React, { Component, useEffect } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

import { places } from "./../../assets/data.json";
import axios from "axios";

/*
Leaflet components
    Mapcontainer: Contenedor del mapa con caracteristicas generales de este.
    TileLayer: Carga y muestra capas de mosaicos de carreteras, terrenos, etc...
*/
import { MapContainer, TileLayer, useMap } from "react-leaflet";

//Components
import SetOfMapMarkers from "../../Components/Common/SetOfMapMarkers/SetOfMapMarkers";

//Styles
import "./MapView.css";
import icon from "./constants";
import App from "../../App";

function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        icon,
      },
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

class MapView extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/puntos");
    this.setState({ users: res.data });
    console.log(this.state.users);
  }

  render() {
    return (
      <div>
        <MapContainer
          className="leatlef-container"
          center={[6.248146825221466, -75.57318536758503]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //Layer utilizado
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' // autor del layer
          />

          <SetOfMapMarkers places={this.state.users} />
          <LeafletgeoSearch />
        </MapContainer>
      </div>
    );
  }
}

export default MapView;
