import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modal = document.querySelector('#modal');

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }

  onEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.onBackdrop}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="#" />
        </div>
      </div>,
      modal,
    );
  }
}

export default Modal;
