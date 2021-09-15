import React from 'react';

/*
Leaflet components

    Marker: Marcador de ubicación en el mapa.
    Popup: Ventana emergente de los Markers 
*/
import { Marker, Popup} from 'react-leaflet';

//Components
import PopUpMarkerCard from '../../Layout/PopUpMarkerCard/PopUpMarkerCard';

export default function MapMarkers(point) {
    return(
        <Marker position={[point.lat,point.lgn]}>
            <Popup>
                <h3>Nombre de emresa ecologica. </h3>
                <br />
                <PopUpMarkerCard/>
                <br />
                <small>Cordenadas: ({point.lat} , {point.lgn})</small>
            </Popup>
        </Marker>                 
    )
}
