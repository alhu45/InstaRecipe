import React from 'react';
import video from '../Images/0518.mov';
import "../Styles/Background.css";

function Background() {
    return (
        <div className="video-container">
            <video src={video} autoPlay loop muted />
            <div className="overlay"></div>
            <div className="content">
                <h1 className="title" style={{ color: "white" }}>
                    <center>Welcome to InstaRecipe!</center>
                </h1>
                <p className="about" style={{ color: "white" }}>
                    <center>
                        Limited ingredients and don't know what to cook? InstaRecipe is here to
                        the rescue!
                    </center>
                </p>
            </div>
        </div>
    );
}

export default Background;
