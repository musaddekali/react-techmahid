import React from 'react';
import './Preloader.css';

export default function Preloader() {
    return (
        <div className='loader-container'>
        <div className='loader'>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--dot'></div>
          <div className='loader--text'></div>
        </div>
      </div>
    )
}
