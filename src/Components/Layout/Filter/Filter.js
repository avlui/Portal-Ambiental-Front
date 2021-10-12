import React, { Component } from "react";
import IconIlustration from "../../Hooks/IconIlustration";

//Constante con residuos
import { residuos } from "../../../Cosnt/Waste"

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
            {
              residuos.map((residuo) => {
                return (
                  <li className="mx-1" key={`res${residuos.indexOf(residuo)}${residuo}`}>
                    <label>
                      <input
                        id={residuo}
                        type="radio"
                        name="filtro"
                        onChange={this.handleSearch}
                      />
                      <img src={IconIlustration(`${residuo}`)} alt={`${residuo}-icon`}></img>
                      <span> &nbsp;{residuo}</span>
                    </label>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
