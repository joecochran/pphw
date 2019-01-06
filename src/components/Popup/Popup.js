import React, { Component } from 'react';
import './Popup.scss'
import BaseButton from '../BaseButton/BaseButton';
import popupMessages from './popupMessages';

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      message: popupMessages[0],
    }
  }

  componentDidUpdate() {
    if((this.props.step === 1 || this.props.step === 3 || this.props.step === 5) && this.state.visible === false) {
      this.updateMessage();
      setTimeout(() => {
        this.setState({ visible: true });
      }, 333)
    }
  }

  updateMessage = () => {
    switch(this.props.step) {
      case 3:
        if(this.state.message !== popupMessages[1]) {
          this.setState({message: popupMessages[1]});
        }
        break;
      case 5:
        if(this.state.message !== popupMessages[2]) {
          this.setState({message: popupMessages[2]});
        }
        break;
      default:
        break;
    }
  }
  closePopup = () => {
    this.props.handleStepUpdate();
    this.setState({visible: false});
  }

  render() {
    return (
      <div className={"c-popup" + (this.state.visible ? '' : ' is-hidden') + (this.props.step > 1 ? ' c-popup--bar-steps' : '') }>
        <div className="c-popup__container">
          <button type="button" className="c-popup__close" onClick={this.closePopup}></button>
          {this.state.message.image && (<img src={this.state.message.image} alt="" className="c-popup__image"/>)}
          <div className="c-popup__title">{this.state.message.title}</div>
          <div className="c-popup__content">{this.state.message.message}</div>
          {this.state.message.action && (<div className="c-popup__action">{this.state.message.action}</div>)}
          <BaseButton handleClick={this.closePopup} content="Got it" />
        </div>
      </div>
    )
  }
}

export default Popup;
