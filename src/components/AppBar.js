import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/appbar.css'

const AppBar = () => {   
  return (
    <div className={"appbar"} >
      <h1>Jaime León Rosado</h1>
      <div className={"navbar"}>
        <ul>
          <li><NavLink to="/" >My Life</NavLink></li>
          <li><NavLink to="/career" >Career</NavLink></li>
          <li><NavLink to="/education" >Education</NavLink></li>
          <li><NavLink to="/contact" >Contact</NavLink></li>
        </ul>
      </div>
      <h2>Software Engineer</h2>
    </div>
  );
};

export default AppBar;
