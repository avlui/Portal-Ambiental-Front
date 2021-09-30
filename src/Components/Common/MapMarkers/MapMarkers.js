import React from "react";

/*
Leaflet components
    Marker: Marcador de ubicación en el mapa.
    Popup: Ventana emergente de los Markers 
*/
import { Marker, Popup } from "react-leaflet";
import L from "leaflet"; //leaftletIcon

//Components
import PopUpMarkerCard from "../../Layout/PopUpMarkerCard/PopUpMarkerCard";
import useMarkerIlustration from "../../Hooks/useMarkerIlustration";

export default function MapMarkers(point) {
  //Selecciona el tipo de marcador con base al lor residuos de la empresa
  const MarkerToIcon = useMarkerIlustration(point.type);
  const iconToUse = new L.Icon({
    iconUrl: MarkerToIcon,
    iconRetinaUrl: MarkerToIcon,
    iconSize: [55, 55],
  });

  return (
    <Marker position={point.position} icon={iconToUse}>
      <Popup>
        <PopUpMarkerCard
          lat={point.position[0]}
          lgn={point.position[1]}
          name={point.name}
          type={point.type}
        />
      </Popup>
    </Marker>
  );
}
