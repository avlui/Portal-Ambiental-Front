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

    if (document.getElementById("paperboard").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.type === "paperboard";
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("oil").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.type === "oil";
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("plastic").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.type === "plastic";
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("coffee").checked) {
      console.log("bandera 2");
      const busqueda = this.props.places.filter(function (n) {
        return n.type === "coffee";
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("glass").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.type === "glass";
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("organic").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.type === "organic";
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("paper").checked) {
      const busqueda = this.props.places.filter(function (n) {
        return n.type === "paper";
      });

      this.setState({ users: busqueda }, () => {
        handleSearch(this.state.users);
      });
    } else if (document.getElementById("all").checked) {
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
            id="paperboard"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          paperboard
        </label>
        <br />
        <label>
          <input
            id="oil"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          oil
        </label>
        <br />
        <label>
          <input
            id="plastic"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          plastic
        </label>

        <br />
        <label>
          <input
            id="coffee"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          coffee
        </label>
        <br />
        <label>
          <input
            id="glass"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          glass
        </label>
        <br />
        <label>
          <input
            id="organic"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          organic
        </label>
        <br />
        <label>
          <input
            id="paper"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          paper
        </label>
        <br />
        <label>
          <input
            id="all"
            type="radio"
            name="filtro"
            onChange={this.handleSearch}
          />
          all
        </label>
      </div>
    );
  }
}

export default Checkbox;
