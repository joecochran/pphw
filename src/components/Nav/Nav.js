import React from 'react';
import './Nav.scss';

function Header(props) {
  return (
    <nav className="c-nav">
      <h1 className="c-nav__title">Product roadmap</h1>
      <ul className="c-nav__list">
        <li className="c-nav__item is-active">
          <a href="/roadmap" className="c-nav__link">Roadmap</a>
        </li>
        <li className="c-nav__item">
          <a href="/planning_board" className="c-nav__link">Planning board</a>
        </li>
        <li className="c-nav__item">
          <a href="/parking_lot" className="c-nav__link">Parking lot</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
