import React, { Component } from "react";
import useIconIlustration from "../Hooks/useIconIlustration";

//Components
import CheckBox from "../Layout/Checkbox/Checkbox";

//Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Filter.css";
import { compact } from "lodash";

class Filter extends Component {
  state = {
    users: [],
  };

  handleSearch = (e) => {
    const { handleSearch } = this.props;
    console.log(this.props.allUsers, "filtro");

    if (document.getElementById("todos").checked) {
      const busqueda = this.props.allUsers;

      console.log(busqueda);
      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById(e.target.id).checked) {
      const busqueda = this.props.allUsers.filter(function (n) {
        return n.tipo.includes(e.target.id);
      });

      console.log(busqueda);
      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
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
                    onChange={this.handleSearch}
                  />
                  Carton
                </label>

                <br />
                <label>
                  <input
                    id="aceite"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch}
                  />
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
                  Plastico
                </label>

                <br />
                <label>
                  <input
                    id="cafe"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch}
                  />
                  Cafe
                </label>
                <br />
                <label>
                  <input
                    id="vidrio"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch}
                  />
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
                  Organico
                </label>
                <br />
                <label>
                  <input
                    id="papel"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch}
                  />
                  Papel
                </label>
                <br />
                <label>
                  <input
                    id="todos"
                    type="radio"
                    name="filtro"
                    onChange={this.handleSearch}
                  />
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
