import React, { Component } from 'react'
import axios from 'axios'
import {
  MapContainer,
  TileLayer,
  MapConsumer,
} from "react-leaflet";
import L from "leaflet";

const coords = [];
const tipos = [];
const ids = [];
const b = L.marker([0, 0]);

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			nombre: '',
			contrasena: '',
			nit:'',
			nombrePunto:'',
			gerente:'',
			ubicacion:{},
			direccion:'',
			telefono:'',
			email:'',
			horario:'',
			desperdicios:[],
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	componentDidMount() {
    tipos.length = 0;
    ids.length = 0;
  }
  checkMail(email) {
    var re = /\S+@\S+.\S+/;
    return re.test(email);
  }
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSearch = (e) => {
    if (document.getElementById(e.target.id).checked) {
      tipos.push(e.target.id);
    } else {
      tipos.splice(tipos.indexOf(e.target.id), 1);

    }
  };
	handleSubmit(event) {
		if (tipos.length === 0) {
      alert("seleccione tipo(s) de residuo(s)")
      return;
    }
		if(coords.length===0){
			alert("selecciona la ubicacion del local en el mapa")
			return
		}
    if (!this.checkMail(document.getElementById("email").value)) {
      alert("revisa el email");
      return
    }

		axios.get("http://localhost:5000/desperdicios").then((result) => {
		 for (var i in result.data) {
			 for (var j in tipos) {
				 if (tipos[j].includes(result.data[i].tipo)) {

					 ids.push(result.data[i]._id);
				 }
			 }
		 }
		 event.preventDefault()

		 axios.post('http://localhost:5000/puntos/add', {
			 nombre: this.state.nombre,
			 contrasena: this.state.contrasena,
			 nit: this.state.nit,
			 nombrePunto:this.state.nombrePunto,
			 gerente:this.state.gerente,
			 ubicacion:{latitud:coords[0],longitud:coords[1]},
			 direccion:this.state.direccion,
			 telefono:this.state.telefono,
			 email:this.state.email,
			 horario:this.state.horario,
			 desperdicios:ids,
		 })
			 .then(response => {
				 if (!response.data.errmsg) {
					 console.log('registro guardado')
				 }
			 }).catch(error => {
				 console.log("signup error" )
				 alert("No has llenado todos los campos")
				 console.log(error)

			 })
	 });

	}


render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="usuario">Nombre de usuario: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="nombre"
							placeholder="Usuario"
							value={this.state.nombre}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="contraseña">contraseña: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="contrasena"
							value={this.state.contrasena}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="nit">nit: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="number"
							id="nit"
							name="nit"
							placeholder="nit"
							value={this.state.nit}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="nombre Punto">Nombre del punto: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="nombrePunto"
							name="nombrePunto"
							placeholder="nombrePunto"
							value={this.state.nombrePunto}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="gerente">Nombre del gerente: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="gerente"
							name="gerente"
							placeholder="nombre del gerente"
							value={this.state.gerente}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<label className="form-label" htmlFor="ubicacion">ubicacion: </label>
				<MapContainer
				      center={[6.248146825221466, -75.57318536758503]}
				      zoom={13}
				      style={{
				        height: "100vh",
				        width: "100vh",
								left: "25%"
				      }}
				    >
				      <TileLayer
				        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
				        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				      />
				      <MapConsumer>
				        {(map) => {
				          map.on("click", function (e) {
				            const { lat, lng } = e.latlng;

										b.setLatLng(e.latlng);
										b.addTo(map);
										if(b.getLatLng().lat>8.9000||b.getLatLng().lat<5.4000||b.getLatLng().lng<(-77.2000)||b.getLatLng().lng>(-73.8500)){
										alert("Seleccione dentro de el area de Antioquia")
									} else {
										coords[0] = b.getLatLng().lat;
										coords[1] = b.getLatLng().lng;
									}
				          });
				          return null;
				        }}
				      </MapConsumer>
				    </MapContainer>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="direccion">Direccion: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="direccion"
							name="direccion"
							placeholder="direccion"
							value={this.state.direccion}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="telefono">telefono: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="number"
							id="tel"
							name="telefono"
							placeholder="telefono"
							value={this.state.telefono}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="email">email</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="email"
							id="email"
							name="email"
							placeholder="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="horario">Horario: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="horario"
							name="horario"
							placeholder="horario"
							value={this.state.horario}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<label className="form-label" htmlFor="tipos desperdicios">tipos desperdicios</label>
				<div>
        <label>
          <input
            id="periodico"
            type="checkbox"
            name="filtro"
            onChange={this.handleSearch}
          />
          Periodico
        </label>
        <br />
        <label>
          <input
            id="aceite"
            type="checkbox"
            name="filtro"
            onChange={this.handleSearch}
          />
          Aceite
        </label>
        <br />
        <label>
          <input
            id="vidrio"
            type="checkbox"
            name="filtro"
            onChange={this.handleSearch}
          />
          Vidrio
        </label>
        <br />
        <label>
          <input
            id="plastico"
            type="checkbox"
            name="filtro"
            onChange={this.handleSearch}
          />
          Plastico
        </label>
      </div>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>


	)
}
}

export default Signup;
