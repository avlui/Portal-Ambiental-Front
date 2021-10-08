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
  console.log(point, "puntooooo");
  var b = "";
  //Selecciona el tipo de marcador con base al lor residuos de la empresa
  if (typeof point.type === "undefined") {
    b = "default";
  } else {
    b = point.type[0];
  }

  const MarkerToIcon = useMarkerIlustration(b);

  const iconToUse = new L.Icon({
    iconUrl: MarkerToIcon,
    iconRetinaUrl: MarkerToIcon,
    iconSize: [55, 55],
  });
  // console.log(point.position, "aosjdoajsod");

  return (
    <Marker
      position={[point.position.latitud, point.position.longitud]}
      icon={iconToUse}
    >
      <Popup>
        <PopUpMarkerCard
          lat={point.position.latitud}
          lgn={point.position.longitud}
          /* name={point.name}
          type={point.type}  */
        />
      </Popup>
    </Marker>
  );
}
