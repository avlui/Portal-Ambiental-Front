  import React, { Component } from 'react'
  import axios from 'axios'


  class Login extends Component{
    constructor(){
      super()
      this.state = {
        email:"",
        contrasena:""
      }
      this.handleSubmit = this.handleSubmit.bind(this)
  		this.handleChange = this.handleChange.bind(this)
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
  handleSubmit(event) {
    axios.post('http://localhost:5000/puntos/login', {
      email:this.state.email,
      contrasena: this.state.contrasena,

    }).then(response => {

         if (!response.data.errmsg) {
           console.log('logeado')
         }
       }).catch(error => {
         console.log("login error" )
         console.log(error)

       })
  }
  render(){
    return(
  <div className="SignupForm">
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
  </div>
  )
  }

  }
  export default Login;
