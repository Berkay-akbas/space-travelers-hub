import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import '../style/navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navlinks">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="title">Space Travelers&apos; Hub</h1>
      <ul className="holder">
        <li>
          <Link to="/" className="link active">Rockets</Link>
        </li>
        <li>
          <Link to="/missions" className="link">Missions</Link>
        </li>
        <li>
          |
        </li>
        <li>
          <Link to="/my-profile" className="link">My Profile</Link>
        </li>
      </ul>
    </div>
    <hr/>
  </div>
);

export default Navbar;
