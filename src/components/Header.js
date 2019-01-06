import React from 'react';
import logo from '../logo.svg';
import searchIcon from '../search.svg';

function Header(props) {
  return (
    <header className="c-header">
      <div className="c-header__brand">
        <img className="c-header__logo" src={logo} alt=""/>
      </div>
      <div className="c-header__foo">
        <p>Candidate Roadmap</p>
        <div className="c-search">
          <button className="c-search__trigger">
            <img src={searchIcon} alt="" className="c-search__icon"/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
