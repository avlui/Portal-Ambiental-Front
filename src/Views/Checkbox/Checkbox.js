import React, { useState, Component } from "react";

/* 
const types = [
  {
    _id: 1,
    type: "paperboard",
  },
  {
    _id: 2,
    type: "oil",
  },
  {
    _id: 3,
    type: "plastic",
  },
  {
    _id: 4,
    type: "paperboard",
  },
  {
    _id: 5,
    type: "oil",
  },
  {
    _id: 6,
    type: "paperboard",
  },
]; */

class Checkbox extends Component {
  state = {
    users: [],
  };

  handleSearch = (props) => {
    const { handleSearch } = this.props;
    console.log(this.props.places);

    if (document.getElementById("periodico").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.tipo.includes("periodico");
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("aceite").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.tipo.includes("aceite");
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("plastico").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.tipo.includes("plastico");
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("cafe").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.tipo.includes("cafe");
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("vidrio").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.tipo.includes("vidrio");
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("organico").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.tipo.includes("organico");
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("papel").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.tipo.includes("papel");
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("todos").checked) {
      this.setState({ users: this.props.places }, () => {
        handleSearch(this.state.users);
      });
    } else {
      this.setState({ users: [] }, () => {
        console.log(this.state.users);
        handleSearch(this.state.users);
      });
    }
  };

  render() {
    return (
      <div className="TablaFiltro">
        <label>
          <input
            id="periodico"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          Periodico
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
    );
  }
}

export default Checkbox;
