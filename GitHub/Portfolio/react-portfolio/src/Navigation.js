import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
     <nav>
         <h2 className="Logo" > React Project  </h2>
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        
     </nav>

 
    );
  }
}

export default Navigation;
