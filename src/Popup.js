import React from 'react';
import './Popup.css';

function Popup({ show, message }) {
  return show ? (
    <div className="popup-overlay">
      <div className="popup">
        <p>{message}</p>
      </div>
    </div>
  ) : null;
}

export default Popup;