import React, { Component } from 'react';
import NavBar from './components/navBar.js'
import './css/dashboard.css';



class Book extends React.Component {
    constructor() {
        super(props);
            this.state = { data: this.props.initialData },
            this.handleSubmit = this.handleSubmit.bind(this)
        };



    getBook() {
         const xhr = new XMLHttpRequest();
         xhr.open('get', this.props.url, true); 
         xhr.onload = () => {
             const data = JSON.parse(xhr.responsetext);
             this.setState({ data: data });
         };

         xhr.send();

        }


    handleSubmit(book) {
        const books = this.state.data;
        book.bookId = books.length;
        
        const data = new FormData();
        data.append('bookId', book.bookId);
        data.append('bookName', book.bookName);
        data.append('content', book.content);

        
    }


    componentWillMount() {
        window.setInterval(() => this.getBook(), this.props.pollInterval);
        };


     render() {
         return (
             <div className="bookForm">
                <Book onBookSubmit={this.handleSubmit}></Book>
             </div>

         )
     }
}





class Course extends React.Component {
    constructor() {
        super(props);
        this.state = { data: this.props.initialData },
        this.handleSubmit = this.handleSubmit.bind(this)
    };
    

    getCourse() {
        const xhr = new XMLHttpRequest();
         xhr.open('get', this.props.url, true); 
         xhr.onload = () => {
             const data = JSON.parse(xhr.responsetext);
             this.setState({ data: data });
         };

         xhr.send();
    }

    handleSubmit() {

    }

    componentWillMount() {
        window.setInterval(() =>  this.getCourse(),
         this.props.pollInterval);
        };
    
    

   
    render() {
        return (
            <div className="courseList">
                <form>
                    <div>this is my Course component</div>
                    <div>
                    courseName={this.props.courseName},
                    garde={this.props.grade}   
                    <input type="text"></input>
                    <Book data={this.state.data}></Book>
                    <Book data={this.state.data}></Book>
                    <Book data={this.state.data}></Book>   
                       
                    </div>  
                </form>                
            </div>
            
        )

    }



}





class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {

        }

    }



    render() {
        return (            
            <div className="container">
            <NavBar username={username} score={score}></NavBar>
            <Course courseName={this.state.courseName}></Course>
            </div>
        )
        
    };

}




export default Dashboard;