import React, { Component } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  MapConsumer,
} from "react-leaflet";

import "../MapView/MapView.css";
import "leaflet-geosearch/dist/geosearch.css";

import GeoSearch from "../../Components/Common/GeoSearch/GeoSearch";

import L from "leaflet";

const coords = [];
const b = L.marker([0, 0]);

export default function App() {
  return (
    <MapContainer
      center={[6.248146825221466, -75.57318536758503]}
      zoom={13}
      style={{
        height: "100vh",
        width: "100vh",
        left: "400px",
        top: "200px",
      }}
      // whenReady={(map) => {
      //   console.log(map);
      //   map.target.on("click", function (e) {
      //     const { lat, lng } = e.latlng;
      //     L.marker([lat, lng], { icon }).addTo(map.target);
      //   });
      // }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer>
        {(map) => {
          console.log("map center:", map.getCenter());
          map.on("click", function (e) {
            const { lat, lng } = e.latlng;

            b.setLatLng(e.latlng);
            b.addTo(map);
            coords[0] = b.getLatLng().lat;
            coords[1] = b.getLatLng().lng;
            console.log(coords);
          });
          return null;
        }}
      </MapConsumer>
      <GeoSearch />
    </MapContainer>
  );
}
