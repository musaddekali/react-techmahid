import React from 'react';
import './Preloader.css';

export default function Preloader() {
    return (
        <div class='loader-container'>
        <div class='loader'>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--dot'></div>
          <div class='loader--text'></div>
        </div>
      </div>
    )
}
