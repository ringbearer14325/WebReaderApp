import React, { Component } from "react";
import { Link } from "react-router-dom";



class Register extends React.Component() {
    constructor(props) {
        super(props);

        this.state = {

            error: null,
            email:  "",
            password: ""

        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleSubmit(event)  {
        fetch('http://localhost:51282/Api/login/InsertEmployee', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: this.state.email,
          password: this.state.password

    })
        }).then((Response) => Response.json())
        .then((Result) => {
    if (Result.Status == 'Success')
    this.props.history.push("/Dashboard");
    else 
    //alerts('Sorrryyy !!! un-autheticated user');
})
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }



    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h1>
                    Sign up to
                    <Link to="/">Programa Aprendizaje de Lectura y Fonetica</Link>
                </h1>
                <p>Fill in the form below to create an account</p>
                <div>
                    <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                </div>
                <div>
                    <input placeholder="Password"name="password" type="password" onChange={this.handleChange} value={this.state.password}></input> 
                </div>
                <div>
                    {this.state.error ? <p>{this.state.error}</p> : null}
                    <button type="submit">sign up</button>
                </div>
                <hr></hr>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
            </div> 
        );
    }
}


export default Register;