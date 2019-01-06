import React from 'react';
import searchIcon from './search.svg';
import './Search.scss';

export default function Search(props) {
  return (
    <div className="c-search">
      <button className="c-search__trigger">
        <img src={searchIcon} alt="" className="c-search__icon"/>
      </button>
    </div>
  )
}
