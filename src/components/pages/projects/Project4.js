import '../../../App';
import './Project4.css';
import next_icon from '../../../images/decor/next_icon.png';
import prev_icon from '../../../images/decor/prev_icon.png';
import p4_video from '../../../videos/Trivia-game_demo.mp4';
import React, { useState } from 'react';

function Project4() {
    //Project 4: Trivia-Game
    const [currentIndex6, setCurrentIndex6] = useState(0); //index for p1_images list
    const p4_images = [
        require('../../../images/project4_images/Page1.png'),
        require('../../../images/project4_images/Page2.png'),
        require('../../../images/project4_images/Page3.png'),
        require('../../../images/project4_images/Page4.png'),
        require('../../../images/project4_images/Page5.png'),
        require('../../../images/project4_images/Page6.png'),
        require('../../../images/project4_images/Page7.png'),
        require('../../../images/project4_images/Page8.png'),
        require('../../../images/project4_images/Page9.png'),
        require('../../../images/project4_images/Page10.png'),
        require('../../../images/project4_images/Page11.png'),
        require('../../../images/project4_images/Page12.png'),
        require('../../../images/project4_images/Page13.png'),
        require('../../../images/project4_images/Page14.png'),
    ];
    const nextP4Image = () => {
        setCurrentIndex6((prevIndex) => (prevIndex === p4_images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevP4Image = () => {
        setCurrentIndex6((prevIndex) => (prevIndex === 0 ? p4_images.length - 1 : prevIndex - 1));
    };
  return (
    <>
        <div className = "p4-tab-container">
            <h1 className = "p2-caption">
                Project 4: Trivia Game
            </h1>
        </div>

        <div className = "p4-tab-layout">
            <div className = "p4-credits-container">
                <h1 className = "presentation-caption">
                    Credits
                </h1>
            </div>

            <div className = "p4-full-credits-container">
                <h1 className = "p4-explanation-text">
                    <h1 className = "p1-credits-role">Engineers:</h1> 
                    <h1 className = "my-name">Julianne Lee</h1>
                    Aneesh Sanghai
                    <p/>
                    Unnati Goyal
                    <p/>
                    Vaibhav Rungta
                    <p/>
                    Will Wei 
                    <p/>
                    Yashvi Jaju 
                </h1> 
            </div>

            <div className = "p4-my-role-container">
                <h1 className = "p4-explanation-text">
                    <h1 className = "p1-credits-role">Engineer:</h1> 
                    <h1 className = "my-name">Julianne Lee</h1>
                    I coded the backend of the game. I was also in charge of making the UI for the game and the 
                    frontend part of the website. Some UI changes I made were adding 
                    color to indicate what questions players answered correct or wrong. 
                    I also styled the UI buttons. 
                </h1> 
            </div>
          

            <div className = "p4-presentation-role-container">
                <h1 className = "presentation-caption">
                    My Role
                </h1>
            </div>  

            <div className = "p4-presentation-caption-container">
                <h1 className = "presentation-caption">
                    Presentation
                </h1>
            </div>
            <button className = 'p4-next-button' onClick= {nextP4Image}>
                <img src = {next_icon} className = "next-icon" alt = ""/>
            </button>

            <button className = 'p4-prev-button' onClick= {prevP4Image}>
                <img src = {prev_icon} className = "prev-icon" alt = ""/>
            </button>

            <div className = "presentation-container">
                <img src = {p4_images[currentIndex6]} className = "p4-image" alt = ""/>
            </div>

            <div className = "p4-explanation-box">
                <h1 className = "p4-explanation-text">
                    Trivia Game is a react js, web game where players have to answer
                    as many correct questions as they can before time runs out. There are 
                    two modes on the website: singleplayer and multiplayer. Singleplayer mode
                    is for practicing, while multiplayer uses MongoDB to allow two players
                    to compete against each other. Players can save their score if they make
                    an account.
                </h1> 
            </div>

            <div className = "p4-demo-container">
                <h1 className = "p4-demo-caption">
                    Demo Video
                </h1>
                <video src={p4_video} className = "p4-demo-video-box" controls="controls" autoplay= {false} />

                <div className = "p4-resources-caption">
                    Resources
                </div>

                <h1 className = "p4-resources-text">
                    <h1 className = "p4-special-text">Repository:</h1> 
                    <p/>
                    <div className= "resource-link">
                        <a href="https://github.com/yashvijaju/trivia-game">
                            https://github.com/yashvijaju/trivia-game
                        </a>
                    </div>
                    <p/>
                    <h1 className = "p4-special-text-2">Documentation:</h1> 
                    <div className = "technical-button-align">
                        <a href="/Technical Specifications.pdf" download className= "documentation-button">
                            Technical Specification
                        </a>
                    </div>

                    <div className = "design-button-align">
                        <a href="/Design.pdf" download className= "documentation-button">
                            Design Documentation
                        </a>
                    </div>
                </h1>
            </div>
        </div>
    </>
  );
}

export default Project4;