import React ,{useState} from 'react';
import axios from "axios"; //Para hacer peticiones a un servidor
/*
Leaflet components
    Mapcontainer: Contenedor del mapa con caracteristicas generales de este.
    TileLayer: Carga y muestra capas de mosaicos de carreteras, terrenos, etc...
*/
import { MapContainer, TileLayer} from 'react-leaflet'

//Components
import SetOfMapMarkers from '../../Components/Common/SetOfMapMarkers/SetOfMapMarkers';
import GeoSearch from '../../Components/Common/GeoSearch/GeoSearch';

//Styles
import './MapView.css';
import "leaflet-geosearch/dist/geosearch.css";

export default function MapView(){
    const [users, setUsers] = useState([])
    
    const res = axios.get("http://localhost:5000/puntos").then(response => {
        setUsers({ users: res.data });
        console.log(users);
    })
    

    return (
        <div className='MapView'>
            {/*
            center: Centro o posición inicial del mapa (lat (y),lng (x))
            zoom: zoom por defecto para el mapa.
            scrollWheelZoom: determina si su puede hacer zoom sobre el mapa con el scroll del mouse.
            */}
            <MapContainer 
                className='leatlef-container' 
                center={[6.248146825221466,-75.57318536758503]} 
                zoom={13} 
                scrollWheelZoom={true}
            >
            
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //Layer utilizado
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' // autor del layer 
                />

                <SetOfMapMarkers/>
                <GeoSearch/>

            </MapContainer>
        </div>   
    )
}