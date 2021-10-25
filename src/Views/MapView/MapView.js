//Hooks
import React, { Component } from "react";

//Components
import Spinner from "../../Components/Common/Spinner/Spinner";
import SetOfMapMarkers from "../../Components/Common/SetOfMapMarkers/SetOfMapMarkers";
import GeoSearch from "../../Components/Common/GeoSearch/GeoSearch";
import Filter from "../../Components/Layout/Filter/Filter";

//leaft let components
import {
  MapContainer, //Mapcontainer: Contenedor del mapa con caracteristicas generales de este.
  TileLayer, // TileLayer: Carga y muestra capas de mosaicos de carreteras, terrenos, etc..
} from "react-leaflet";

//Services
import axios from "axios";

//Styles
import "./MapView.css";
import "leaflet-geosearch/dist/geosearch.css";

class MapView extends Component {
  state = {
    allUsers: [], //Estado para guardar en un arreglo todos los usuarios registrados en la DB
    usersToFilter: [], //Estado para guardar en un arreglo una copia de los usuarios para filtrar información
    isLoading: true, //Estado para no mostrar mapa hasta tener los datos cargados
    actualType: "todos",
  };

  //Función para cargar todos los usuarios cada que el componente se rederiza y para para restablecer el arreglo con la copia de los usuarios y poder filtrar información nuevamente
  async componentDidMount() {
    const response = await axios.get("/puntos"); //Solicitando las notas guardadas en el servidor para mostrarlas en pantalla.
    const users = response.data; //Datos de los usuarios registrados en la DB
    await users.forEach((user) => {
      const wastesOfUser = []; // Arreglo para guardar los tipos de residuos que genera el usuario
      const directionOfwastes = user.desperdicios; //Arreglo que contiene las direcciones hacia otra tabla que guarda la información sobre los residuos que genera el usuario
      directionOfwastes.forEach((wasteDirection) => {
        axios
          .get(`/desperdicios/${wasteDirection}`)
          .then((currentWaste) => {
            const typeOfWaste = currentWaste.data.tipo; //Variable que guarda el tipo de residuo de los residuos que genera el usuario
            wastesOfUser.push(typeOfWaste);
            if (directionOfwastes.length === wastesOfUser.length) {
              //Si ya se agregaron todos los tipos de residuos que general el usuario al arreglo wastesOfUser

              user["tipo"] = wastesOfUser; //se agrega a los atributos del usuario el arreglo que contiene los tipos de residuos que este genera.
              this.setState({ allUsers: users }, () => {
                this.setState({ usersToFilter: this.state.allUsers }, () => {
                  this.setState({ isLoading: false }, () => {
                    console.log("Data load successfully.");
                  });
                });
              });
            }
          });
      });
    });
  }

  handleSearch = (filter, typeFilter) => {
    this.setState({ usersToFilter: [] }, () => {
      this.setState({ usersToFilter: filter }, () => {
        this.setState({ actualType: typeFilter });
      });
    });
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <div className="spinner">
            <Spinner />
          </div>
        ) : (
          <div className="MapView">
            <MapContainer
              className="leatlef-container"
              center={[6.248146825221466, -75.57318536758503]} // center: Centro o posición inicial del mapa (lat (y),lng (x))
              zoom={6} // zoom: zoom por defecto para el mapa.
              scrollWheelZoom={true} //scrollWheelZoom: determina si su puede hacer zoom sobre el mapa con el scroll del mouse.
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //Layer utilizado
                attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors' // autor del layer
              />
              <GeoSearch />
              <SetOfMapMarkers
                users={this.state.usersToFilter}
                actualType={this.state.actualType}
              />
            </MapContainer>
            <div className="filter">
              <Filter
                allUsers={this.state.allUsers}
                usersToFilter={this.state.usersToFilter}
                getFilter={this.handleSearch}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
export default MapView;
