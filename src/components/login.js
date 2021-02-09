import React, { Component } from 'react';
import { Link } from "react-router-dom";




class Login extends React.Component() {
    constructor(props) {
        super();
        this.state = {
            error: null,
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    } 


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:/Api/login/Login', {
            method: 'post',
            header: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
        .then((result) => {
            console.log(result);
            if (result.Status == 'Invalid')
            alert('Invalid user');
            else 
            this.props.history.push("/Dashboard");
        })
        
    }

    render() {
        return (
            <div id="container">
                <form
                autoComplete="off"
                onSubmit={this.handleSubmit}
                >
                    <h1>
                        login to 
                        <Link to="/">
                            Programa Aprendizaje de Lectura y Fonetica
                        </Link>
                    </h1>
                    <p>
                        Fill in the form below to login to your account
                    </p>
                    <div>
                        <input 
                        placeholder="Email"
                        name="email"
                        type="email"
                        onchange={this.handleChange}
                        value={this.state.email}
                        />
                    </div>
                    <div>
                    <input 
                        placeholder="Password"
                        name="password"
                        type="password"
                        onchange={this.handleChange}
                        value={this.state.password}
                        />
                    </div>
                    <div>
                        {this.state.error ? (
                            <p>{this.state.error}</p>
                        ) : null}
                        <button type="submit">Login</button>
                    </div>
                    <hr />
                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
                </div>
        );
    }

}


export default Login;