import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/images/planet.png';

const Navbar = () => (
  <section className="nav">
    <div className="logo">
      <div className="logo-container">
        <img src={planet} alt="planet logo" className="logo-container__img" />
        <p>Space Travelers Hub</p>
      </div>
    </div>
    <nav className="nav-container">
      <ul className="nav-container__items">
        <li>
          <NavLink className="nav-item1" to="/rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink className="nav-item2" to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink className="nav-item3" to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </section>
);

export default Navbar;
