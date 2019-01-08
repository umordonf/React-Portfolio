import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
     <nav>
         <h2 className="Logo" > React Project  </h2>
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
        
     </nav>

 
    );
  }
}

export default Navigation;
