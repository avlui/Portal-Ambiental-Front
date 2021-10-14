import React, { Component } from "react";

import axios from "axios"; //Para hacer peticiones a la DB
import IconIlustration from "../../Components/Hooks/IconIlustration";//Para usar los iconos de los residuos
import CheckEmail from "../../Components/Hooks/CheckEmail" //Para verificar si el imput es un email valido
import { toast } from 'react-toastify'; //Para notificaciones
import { withRouter } from "react-router"; //Para cambiar de rutas

//Constante con residuos
import { residuos } from "../../Cosnt/Waste"

// leaft-let components
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  MapConsumer
} from "react-leaflet";

//Styles
import "./Register.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faKey,
  faIdCardAlt,
  faBuilding,
  faUserTie,
  faAddressBook,
  faPhoneAlt,
  faAt,
  faClock,
  faMapMarkerAlt,
  faRecycle
} from '@fortawesome/free-solid-svg-icons'

const coords = [];
const tipos = [];
const ids = [];
const b = L.marker([0, 0]);

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      contrasena: '',
      nit: '',
      nombrePunto: '',
      gerente: '',
      ubicacion: {},
      direccion: '',
      telefono: '',
      email: '',
      horario: '',
      desperdicios: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    tipos.length = 0;
    ids.length = 0;
  }
  handleChange(event) {
    if(this.state.userAdded){
      this.setState({
        [event.target.name]: this.state.initialValue,
      });
      this.setState({userAdded:false})
    }
    else{
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
    
  }
  handleSearch = (e) => {
    if (document.getElementById(e.target.id).checked) {
      tipos.push(e.target.id);
    } else {
      tipos.splice(tipos.indexOf(e.target.id), 1);
    }
  };
  handleSubmit(event) {
    event.preventDefault(); //evita que el formulario siga su comportamiento por defecto de enviar los datos (POST) a otra pagina

    if (tipos.length === 0) {
      toast("seleccione tipo(s) de residuo(s)", {
        type: 'error',
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    if (coords.length === 0) {
      toast("Debes seleccionar la ubicacion del punto en el mapa", {
        type: 'error',
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    if (!CheckEmail(document.getElementById("email").value)) {
      toast("Email incorrecto", {
        type: 'error',
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    axios.get("http://localhost:5000/desperdicios").then((result) => {
      for (var i in result.data) {
        for (var j in tipos) {
          if (tipos[j].includes(result.data[i].tipo)) {
            ids.push(result.data[i]._id);
          }
        }
      }
      axios
        .post("http://localhost:5000/puntos/add", {
          nombre: this.state.nombre,
          contrasena: this.state.contrasena,
          nit: this.state.nit,
          nombrePunto: this.state.nombrePunto,
          gerente: this.state.gerente,
          ubicacion: { latitud: coords[0], longitud: coords[1] },
          direccion: this.state.direccion,
          telefono: this.state.telefono,
          email: this.state.email,
          horario: this.state.horario,
          desperdicios: ids,
        })
        .then((response) => {
          if (!response.data.errmsg) {
            console.log("registro guardado");
            toast("¡Registro Exitoso!", {
              type:'succes',
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            this.props.history.push('/') //Cuando se registre el usuario se redirige al usuario haceia la ruta log
          }
        })
        .catch((error) => {
          console.log("signup error");
          console.log(error);
          toast("No has llenado todos los campos", {
            type:'error',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    });
  }

  render() {
    return (
      <div className="SignupForm">

        <h1 className="title text-dark py-5">Bienvenido a Portal Ambiental</h1>
        <h2>Registro</h2>

        <form className="card card-body">

          <div className="accountInformation card card-body my-4">

            <div className="form-group form-group row my-2">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faUserPlus} />
                &nbsp;
                Nombre de usuario
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control "
                  type="text"
                  id="username"
                  name="nombre"
                  placeholder="Nombre de usuario"
                  value={this.state.nombre}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group  form-group row my-2">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faAt} />
                &nbsp;
                Email
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="Email@example.com"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group  form-group row my-2">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faKey} />
                &nbsp;
                Contraseña
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control input-group"
                  placeholder="Contraseña"
                  type="password"
                  id="password"
                  name="contrasena"
                  value={this.state.contrasena}
                  onChange={this.handleChange}
                />
              </div>
            </div>

          </div>

          <div className="puntoInformation card card-body my-4">

            <div className="form-group  form-group row my-2">
              <label htmlFor="nit" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faIdCardAlt} />
                &nbsp;
                Nit de la empresa
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="Nit de la empresa"
                  type="number"
                  id="nit"
                  name="nit"
                  value={this.state.nit}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group  form-group row my-2">
              <label htmlFor="nombrePunto" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faBuilding} />
                &nbsp;
                Nombre del punto
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="Nombre del punto"
                  type="text"
                  id="nombrePunto"
                  name="nombrePunto"
                  value={this.state.nombrePunto}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group  form-group row my-2">
              <label htmlFor="gerente" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faUserTie} />
                &nbsp;
                Nombre del gerente
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="Nombre del gerente"
                  type="text"
                  id="gerente"
                  name="gerente"
                  value={this.state.gerente}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group  form-group row my-2">
              <label htmlFor="direccion" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faAddressBook} />
                &nbsp;
                Dirección del punto
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="Dirección del punto"
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={this.state.direccion}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group  form-group row my-2">
              <label htmlFor="tel" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faPhoneAlt} />
                &nbsp;
                Telefono
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="Telefono (Celular o fijo)"
                  type="number"
                  id="tel"
                  name="telefono"
                  value={this.state.telefono}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group  form-group row my-2">
              <label htmlFor="horario" className="col-sm-2 col-form-label">
                <FontAwesomeIcon icon={faClock} />
                &nbsp;
                Horario de atención
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="xx:xx am - xx:xx pm "
                  type="text"
                  id="horario"
                  name="horario"
                  value={this.state.horario}
                  onChange={this.handleChange}
                />
              </div>
            </div>

          </div>

          <div className="puntoUnication card card-body my-4">
            <div className="form-group  form-group row my-2">

              <label id="ubicacion">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                &nbsp;
                Ubicacion
              </label>
              <div className="MapContainer">

                <MapContainer
                  className="leatlefContainer"
                  center={[6.248146825221466, -75.57318536758503]}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //Layer utilizado
                    attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors' // autor del layer
                  />
                  <MapConsumer>
                    {(map) => {
                      map.on("click", function (e) {
                        // const { lat, lng } = e.latlng;

                        b.setLatLng(e.latlng);
                        b.addTo(map);

                        coords[0] = b.getLatLng().lat;
                        coords[1] = b.getLatLng().lng;
                      });
                      return null;
                    }}
                  </MapConsumer>
                </MapContainer>

              </div>

            </div>
          </div>

          <div className="puntoUnication card card-body my-4">
            <label className="form-label" htmlFor="ResiduosCheckBox">
              <FontAwesomeIcon icon={faRecycle} />
              &nbsp;
              Tipos desperdicios
            </label>
            <ul className="ResiduosCheckBox">
              {
                residuos.map((residuo) => {
                  if (residuo !== 'todos') {
                    return (
                      <li key={`res${residuos.indexOf(residuo)}${residuo}`}>
                        <label className="Residuo my-2">
                          <input
                            id={residuo}
                            type="checkbox"
                            name="filtro"
                            onChange={this.handleSearch}
                          />
                          <img src={IconIlustration(`${residuo}`)} alt={`${residuo}-icon`}></img>
                          <span> &nbsp;{residuo}</span>
                        </label>
                      </li>
                    )
                  }
                  else return null
                })
              }
            </ul>
          </div>

          <button className="btn btn-primary col-mr-auto" onClick={this.handleSubmit}>
            Registrarse
          </button>

        </form>

      </div>
    );
  }
}

export default withRouter(Register);