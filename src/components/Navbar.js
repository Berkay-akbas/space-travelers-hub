import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';

const Navbar = () => (
  <div className="navbar">
    <div className="navlinks">

      <h1>Space Travelers&apos; Hub</h1>
      <img className="logo" src={logo} alt="logo" />
      <ul className="holder">
        <li>
          <Link to="/" className="link">Rockets</Link>
        </li>
        <li>
          <Link to="/missions" className="link">Missions</Link>
        </li>
        <li>
          <Link to="/my-profile" className="link">My Profile</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
