import './LoadingScreen.css';
import React from 'react';
import LogoNetlfix from '../assets/netflix.png'
const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div class ="img-loader">
            <img src={LogoNetlfix} alt="Netflix" className="Header-logo" />
            </div>
            <div className="loader">
            </div>
        </div>
    );
}

export default LoadingScreen;