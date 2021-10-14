import React, { useEffect, useState } from "react";
import useUser from "../../Components/Hooks/useUser";
//Router
import { Link } from "react-router-dom";
import { useHistory  } from "react-router-dom";

//Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faKey,
  faAt,
} from '@fortawesome/free-solid-svg-icons'


function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const {isLogged, login} = useUser();
  const history = useHistory();

  useEffect(()=>{
    if(isLogged) history.push('/')
  },[history, isLogged])

  function handleSubmit(e){
    e.preventDefault();
    login(email, contrasena);
  }
  return (
    <div className="Register">
      <h1>Ingresar</h1>
      <form className="card" onSubmit={handleSubmit}>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
          </div>

        </div>
        <button className="btn btn-primary col-mr-auto">
          Login
        </button>
      </form>
      
      <div className="GoRegister">
        <small id="passwordHelpInline" className="text-muted">
          <Link className="nav-link" to="/Register">
            ¿No tienes cuenta? registrate aquí!!!
          </Link>
        </small>
      </div>
    </div>
  )
}

export default Login