//Hooks
import React, {useContext} from "react";
import useIconIlustration from "../../Hooks/useIconIlustration";

//Context
import UsersContext  from "../../../Context/UsersContext";

//Styles
import "./Checkbox.css"

function Checkbox ({usersToFilter, allUsers}) {
  
  const [usersContext, setUsersContext] = useContext(UsersContext);

  function handleSearch () {

    usersToFilter = allUsers

    if (document.getElementById("carton").checked) {
      const busqueda = usersToFilter.filter(function (place) {
        return place.tipo !== undefined ?  place.tipo.includes("carton"): null
      });

      setUsersContext(busqueda)
      console.log(usersContext)
      
    } 
    else if (document.getElementById("aceite").checked) {
      const busqueda = usersToFilter.filter(function (place) {
        return place.tipo !== undefined ?  place.tipo.includes("aceite"): null
      });

      setUsersContext(busqueda)
      console.log(usersContext)
    } 
    else if (document.getElementById("plastico").checked) {
      const busqueda = usersToFilter.filter(function (place) {
        return place.tipo !== undefined ?  place.tipo.includes("plastico"): null
      });

      setUsersContext(busqueda)
      console.log(usersContext)
    } 
    else if (document.getElementById("cafe").checked) {
      const busqueda = usersToFilter.filter(function (place) {
        return place.tipo !== undefined ?  place.tipo.includes("cafe"): null
      });

      setUsersContext(busqueda)
      console.log(usersContext)
    } 
    else if (document.getElementById("vidrio").checked) {
      const busqueda = usersToFilter.filter(function (place) {
        return place.tipo !== undefined ?  place.tipo.includes("vidrio"): null
      });

      setUsersContext(busqueda)
      console.log(usersContext)
    } 
    else if (document.getElementById("organico").checked) {
      const busqueda = usersToFilter.filter(function (place) {
        return place.tipo !== undefined ?  place.tipo.includes("organico"): null
      });

      setUsersContext(busqueda)
      console.log(usersContext)
    } 
    else if (document.getElementById("papel").checked) {
      const busqueda = usersToFilter.filter(function (place) {
        return place.tipo !== undefined ?  place.tipo.includes("papel"): null
      });

      setUsersContext(busqueda)
      console.log(usersContext)
    } 
    else if (document.getElementById("todos").checked) {
      setUsersContext(allUsers)
      console.log(usersContext)  
    } 
  }

  return (
      <div className="TablaFiltro">
        
        <label>
          <input
            id="carton"
            type="radio"
            name="filtro"
            onChange={handleSearch}
          />
          <img src={useIconIlustration('carton')} alt='carton-icon'></img>Carton
        </label>

        <br />
        <label>
          <input
            id="aceite"
            type="radio"
            name="filtro"
            onChange={handleSearch}
          />
          <img src={useIconIlustration('aceite')} alt='aceite-icon'></img>Aceite
        </label>
        <br />
        <label>
          <input
            id="plastico"
            type="radio"
            name="filtro"
            onChange={handleSearch}
          />
          <img src={useIconIlustration('plastico')} alt='plastico-icon'></img>Plastico
        </label>

        <br />
        <label>
          <input
            id="cafe"
            type="radio"
            name="filtro"
            onChange={handleSearch}
          />
          <img src={useIconIlustration('cafe')} alt='cafe-icon'></img>Cafe
        </label>
        <br />
        <label>
          <input
            id="vidrio"
            type="radio"
            name="filtro"
            onChange={handleSearch}
          />
         <img src={useIconIlustration('vidrio')} alt='vidrio-icon'></img>Vidrio
        </label>
        <br />
        <label>
          <input
            id="organico"
            type="radio"
            name="filtro"
            onChange={handleSearch}
          />
          <img src={useIconIlustration('organico')} alt='organico-icon'></img>Organico
        </label>
        <br />
        <label>
          <input
            id="papel"
            type="radio"
            name="filtro"
            onChange={handleSearch}
          />
         <img src={useIconIlustration('papel')} alt='papel-icon'></img>Papel
        </label>
        <br />
        <label>
          <input
            id="todos"
            type="radio"
            name="filtro"
            onChange={handleSearch}
          />
          <img src={useIconIlustration('todos')} alt='todos-icon'></img>Todos
        </label>
      </div>
  );
  
}

export default Checkbox;
