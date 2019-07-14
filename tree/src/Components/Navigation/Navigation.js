import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from '../../index'
// import M from '../../../node_modules/materialize-css/dist/js/materialize'


class Navigation extends Component { 

  componentDidMount() { 
     var elem = document.querySelector(".sidenav"); 
     var instance = M.Sidenav.init(elem); 
  } 

  render() { 
     return ( 
        <div>
           <nav className="green darken-2">
              <div className="nav-wrapper container">
                 <span>
                    Order online or call us at +880 1758712370
                 </span>
                 <a 
                     style={{cursor: 'pointer'}}   data-target="mobile-links" className="sidenav-trigger"> 
                     <i className="material-icons">menu</i>
                 </a>
 
                 <ul id="mobile-nav"
                    className="right hide-on-med-and-down">
                    <li> <NavLink to="/"> Home </NavLink> </li>
                    <li> <NavLink to="/product"> Our Product </NavLink> </li>
                    <li> <NavLink to="/cart"> Cart </NavLink> </li>
                 </ul>
              </div>
           </nav>
 

           {/* For mobile view */}
           <ul id="mobile-links" className="sidenav">
               <li> <NavLink to="/"> Home </NavLink> </li>
               <li> <NavLink to="/product"> Our Product </NavLink> </li>
               <li> <NavLink to="/cart"> Cart </NavLink> </li>
           </ul>
        </div>
     )
  }
}
export default Navigation;

