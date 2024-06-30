import React from 'react';
import './AboutUs.css';
import avatar1 from './images/zahid.png'; // Import your local images
import avatar2 from './images/amit.png'; // Import your local images
import avatar3 from './images/sahab.png'; // Import your local images

function AboutUs() {
    return (
        <div className="page-content">
            <h2>About Us</h2>
            <div className="avatar-container">
                <div className="avatar-box">
                    <img src={avatar1} alt="Avatar 1" className="avatar" />
                    <p>Name: ANM Zahid Milkan</p>
                    <p>Student ID: 200041202</p>
                </div>
                <div className="avatar-box">
                    <img src={avatar2} alt="Avatar 2" className="avatar" />
                    <p>Name: Amit Bin Tariqul</p>
                    <p>Student ID: 200041214</p>
                </div>
                <div className="avatar-box">
                    <img src={avatar3} alt="Avatar 3" className="avatar" />
                    <p>Name: Sahab al Chowdhury</p>
                    <p>Student ID: 200041255</p>
                </div>
            </div>
            <div className="common-text">
                <p>3rd Year, Department of CSE, IUT</p>
            </div>
        </div>
    );
}

export default AboutUs;
