import React, { Component } from "react";


class NavBar extends React.Component() {
    constructor() {
        super();
        this.state = {
            username: "",
            score: "",
            age: ""
        };

    }




    render() {
        return (
            <div id="container">
                <div className="searchBar" >
                    <form onSubmit={this.handleSubmit}>
                        <input type="textbox" value="search">search</input>
                    </form>
                </div>
            <p>{  }</p>
            <p>{  }</p>
            <p>{ }</p>
            </div>


        );
    }
    

}



export default NavBar;