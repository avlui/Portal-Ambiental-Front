import React, { Component } from "react";
import IconIlustration from "../../Hooks/IconIlustration";

//Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Filter.css";

class Filter extends Component {
  state = {
    filterUsers: [],
  };

  handleSearch = (rButton) => {
    const { getFilter } = this.props;

    if (document.getElementById("todos").checked) {

      const busqueda = this.props.allUsers;
      console.log(busqueda);
      this.setState({ filterUsers: busqueda }, () => {
        getFilter(this.state.filterUsers);
      });
    }
    else if (document.getElementById(rButton.target.id).checked) {
      const busqueda = this.props.allUsers.filter(function (place) {
        return place.tipo.includes(rButton.target.id);
      });

      console.log(busqueda);
      this.setState({ filterUsers: busqueda }, () => {
        getFilter(this.state.filterUsers);
      });
    }
  };

  render() {
    return (
      <div className="FilterButton">
        <div className="dropdown">
          <button
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <div className="TablaFiltro">
                <label>
                  <input
                    id="carton"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch} />
                  <img src={IconIlustration("carton")} alt="carton-icon"></img>
                  Carton
                </label>

                <br />
                <label>
                  <input
                    id="aceite"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch} />
                  <img src={IconIlustration("aceite")} alt="aceite-icon"></img>
                  Aceite
                </label>
                <br />
                <label>
                  <input
                    id="plastico"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch}
                  />
                  <img src={IconIlustration("plastico")} alt="plastico-icon"></img>
                  Plastico
                </label>

                <br />
                <label>
                  <input
                    id="cafe"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch} />
                  <img src={IconIlustration("cafe")} alt="cafe-icon"></img>
                  Cafe
                </label>
                <br />
                <label>
                  <input
                    id="vidrio"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch} />
                  <img src={IconIlustration("vidrio")} alt="vidrio-icon"></img>
                  Vidrio
                </label>
                <br />
                <label>
                  <input
                    id="organico"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch}
                  />
                  <img src={IconIlustration("organico")} alt="organico-icon"></img>
                  Organico
                </label>
                <br />
                <label>
                  <input
                    id="papel"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch} />
                  <img src={IconIlustration("papel")} alt="papel-icon"></img>
                  Papel
                </label>
                <br />
                <label>
                  <input
                    id="todos"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch} />
                  <img src={IconIlustration("todos")} alt="todos-icon"></img>
                  Todos
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
