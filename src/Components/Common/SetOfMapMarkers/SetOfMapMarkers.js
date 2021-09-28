import React from "react";
import { Marker } from "react-leaflet";
import MapMarkers from "../MapMarkers/MapMarkers";

/* const Points = [
  [6.155606099269135, -75.59756291638067],
  [6.098250237268505, -75.63672853139313],
  [6.166984, -75.338459],
  [6.248146825221466, -75.57318536758503],
  [6.153549872907532, -75.39774134151186],
  [1.248146825221466, -71.5731853675503],
]; */

const SetOfMapMarkers = (props) => {
  const { places } = props;
  const markers = places.map((place) => (
    //<Marker key={places.indexOf(place)} position={place.geometry} />
    <MapMarkers
      key={places.indexOf(place)}
      position={place.geometry}
      nameStore={place.name}
    />
  ));
  return markers;
};

/* function SetOfMapMarkers() {
  return (
    <div className="SetOfMapMarkers">
      {Points.map((point) => {
        return (
          <MapMarkers
            key={Points.indexOf(point)}
            lat={point[0]}
            lgn={point[1]}
          />
        );
      })}
    </div>
  );
} */

export default SetOfMapMarkers;
