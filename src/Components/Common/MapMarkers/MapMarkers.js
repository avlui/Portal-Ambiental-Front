// Hooks
import React ,{useState, useEffect}  from "react";

//Leaftlet components
import { 
  Marker, //Marker: Marcador de ubicación en el mapa.
  Popup //Popup: Ventana emergente de los Markers 
} from "react-leaflet"; 

import L from "leaflet"; //leaftletIcon

//Components
import PopUpMarkerCard from "../../Layout/PopUpMarkerCard/PopUpMarkerCard";
import useMarkerIlustration from "../../Hooks/useMarkerIlustration";

export default function MapMarkers({
    nombre,
    gerente,
    ubicacion,
    direccion,
    telefono,
    email,
    horario,
    tipo
  }){
    
  const [wasteToIcon, setWasteToIcon] = useState();
  
  useEffect(()=>{
    //Selecciona el tipo de marcador con base al lor residuos de la empresa
    if (typeof(tipo) === "undefined") {
      setWasteToIcon("default")
    } 
    else {
      setWasteToIcon(tipo[0])
    }
  },[tipo, wasteToIcon])

  //Selecciona el tipo de marcador con base al los residuos de la empresa
  const iconToMarker = useMarkerIlustration(wasteToIcon);
  const iconToUse = new L.Icon({
    iconUrl: iconToMarker,
    iconRetinaUrl: iconToMarker,
    iconSize: [55, 55],
  });

  return (
    <Marker 
      position={[ubicacion.latitud,ubicacion.longitud]} 
      icon={iconToUse}
    >
      <Popup>
        <PopUpMarkerCard
          lat={ubicacion.latitud}
          lgn={ubicacion.longitud}
          nombre={nombre}
          gerente={gerente}
          direccion={direccion}
          telefono={telefono}
          email={email}
          horario={horario}
          tipo={tipo}
        />
      </Popup>
    </Marker>
  );
}
