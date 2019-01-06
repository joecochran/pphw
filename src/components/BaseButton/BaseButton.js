import React from 'react';
import './BaseButton.scss'

export default function Popup(props) {
  return (
    <button type="button" onClick={props.handleClick} className="c-button">{props.content}</button>
  )
}
