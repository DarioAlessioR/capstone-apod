import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NASA from '../assets/images/NASA_logo.png';

const Navbar = (handleClick) => {
  return (
    <section className="nav">
      <div className="logo">
        <Link className="nav-item1" to="/pics">
          <div className="logo-container">
            <img src={NASA} alt="planet logo" className="logo-container__img" />
            <p className="logo-title">Astronomical Picture of the Day (APOD)</p>
          </div>
        </Link>
      </div>
      <nav className="nav-container">
        <ul className="nav-container__items">
          <li>
            <NavLink className="nav-item2" to="/pics">Home</NavLink>
          </li>
          <li>
            <form action="/action_page.php">
              <label form="cars">Choose media type: image, video or both (default)</label>
              <select id="cars" name="cars" onChange={handleClick}>
                {/*
  picList.forEeach((item) => {
    <option value={item}>{item}</option>
  })
*/}
                <option value="both">Both</option>
                <option value="image">Image</option>
                <option value="video">Video</option>

              </select>
            </form>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;
