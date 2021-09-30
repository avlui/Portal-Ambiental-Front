import React from "react";
import MapMarkers from "../MapMarkers/MapMarkers";

/* const Points = [
    {   name: 'PointX1',
        type: 'paperboard',
        coords: [6.648146825221466,-74.57318536758503]},
    {   name: 'PointX2',
        type: 'oil',
        coords: [5.248146825221466,-75.17318536758503]},
    {   name: 'PointX3',
        type: 'coffee',
        coords: [7.248146825221466,-72.57318536758503]},
    {   name: 'PointX4',
        type: 'organic',
        coords: [6.248146825221466,-75.57318536758503]},
    {   name: 'PointX5',
        type: 'glass',
        coords: [7.248555525221466,-70.57318536758503]},
    {   name: 'PointX6',
        type: 'paper',
        coords: [1.248146825221466,-71.5731853675503]},
    {   name: 'PointX7',
        type: 'plastic',
        coords: [3.548146825221466,-74.1731853675503]}
] */

const SetOfMapMarkers = (props) => {
  const { places } = props;
  const markers = places.map((place) => (
    //<Marker key={places.indexOf(place)} position={place.geometry} />
    <div className="SetOfMapMarkers">
      <MapMarkers
        key={place._id}
        position={place.coords}
        nameStore={place.name}
        type={place.type}
      />
    </div>
  ));
  return markers;
};

export default SetOfMapMarkers;
