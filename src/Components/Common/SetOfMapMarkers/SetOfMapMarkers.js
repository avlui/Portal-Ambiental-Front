import React from 'react';
import MapMarkers from '../MapMarkers/MapMarkers';

const Points = [
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
]


function SetOfMapMarkers() {
    return (
        <div className="SetOfMapMarkers">
        {
            Points.map(point => {
                return(
                    <MapMarkers 
                        key = {Points.indexOf(point)}
                        lat = {point.coords[0]}
                        lgn = {point.coords[1]}
                        name = {point.name}
                        type = {point.type}
                    />
                )
            })
        }
        </div>
    );
}

export default SetOfMapMarkers;