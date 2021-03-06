import React from "react";

//Components
import MapMarkers from "../MapMarkers/MapMarkers";

const SetOfMapMarkers = ({users}) => {
  
    const markers = users.map((user) => (
      
      <MapMarkers
        key={user._id}
        nombre={user.nombrePunto}
        gerente={user.gerente}
        ubicacion={user.ubicacion}
        direccion={user.direccion}
        telefono={user.telefono}
        email={user.email}
        horario={user.horario}
        tipo={user.tipo}
        
      />
    ));
    return markers;

};

export default SetOfMapMarkers;
