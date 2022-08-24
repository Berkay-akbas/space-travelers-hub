import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assests/logo.png';
import '../style/navbar.css';

const Navbar = () => (
  <div className="homeNav">
    <div className="navlinks">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="title">Space Travelers&apos; Hub</h1>
      <ul className="holder">
        <li>
          <NavLink to="/" className="link">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions" className="link">Missions</NavLink>
        </li>
        <li>
          |
        </li>
        <li>
          <NavLink to="/my-profile" className="link">My Profile</NavLink>
        </li>
      </ul>
    </div>
    <hr />
  </div>
);

export default Navbar;
