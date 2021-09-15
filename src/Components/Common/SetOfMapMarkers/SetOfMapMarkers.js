import React from 'react';
import MapMarkers from '../MapMarkers/MapMarkers';

const Points = [[6.648146825221466,-74.57318536758503],[5.248146825221466,-75.17318536758503],[7.248146825221466,-72.57318536758503],[6.248146825221466,-75.57318536758503], [7.248555525221466,-70.57318536758503], [1.248146825221466,-71.5731853675503]]

function SetOfMapMarkers() {
    return (
        <div className="SetOfMapMarkers">
        {
            Points.map(point => {
                return(
                    <MapMarkers 
                        key = {Points.indexOf(point)}
                        lat = {point[0]}
                        lgn = {point[1]}
                    />
                )
            })
        }
        </div>
    );
}

export default SetOfMapMarkers;