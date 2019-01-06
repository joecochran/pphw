import React from 'react';
import Search from '../Search/Search';
import logo from './logo.svg';
import './Header.scss';

function Header(props) {
  return (
    <header className="c-header">
      <div className="c-header__brand">
        <img className="c-header__logo" src={logo} alt=""/>
      </div>
      <div className="c-header__foo">
        <p>Candidate Roadmap</p>
        <Search />
      </div>
    </header>
  )
}

export default Header;
