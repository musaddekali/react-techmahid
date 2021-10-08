import React from 'react';
import './Preloader.css';
import preloader from '../../../../images/preloader.gif';

export default function Preloader() {
    return (
        <div className="preloader">
            <img src={preloader} alt="preloader" />
        </div>
    )
}
