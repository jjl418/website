import '../../../App';
import './Project1.css';
import cat_unknown from '../../../images/project1_images/cat_unknown.png';
import dog_unknown from '../../../images/project1_images/dog_unknown.png';
import rat_unknown from '../../../images/project1_images/rat_unknown.png';
import p1_video from '../../../videos/p1_demo_video.mp4';
import rabbit from '../../../images/project1_images/rabbit2.png';
import mint_icecream from '../../../images/project1_images/mint_icecream.png';
import chocolate_icecream from '../../../images/project1_images/chocolate_icecream.png';
import strawberry_icecream from '../../../images/project1_images/strawberry_icecream.png';
import vanilla_icecream from '../../../images/project1_images/vanilla_icecream.png';
import next_icon from '../../../images/decor/next_icon.png';
import prev_icon from '../../../images/decor/prev_icon.png';
import React, { useState } from 'react';

function Project1() {
    const [currentIndex, setCurrentIndex] = useState(0); //index for p1_images list
    const p1_images = [
        require('../../../images/project1_images/creamistry_menu.png'),
        require('../../../images/project1_images/creamistry_gameplay1.png'),
        require('../../../images/project1_images/creamistry_gameplay2.png'),
        require('../../../images/project1_images/next_level.png'),
        require('../../../images/project1_images/win.png'),
        require('../../../images/project1_images/lose.png'),
        require('../../../images/project1_images/tutorial1.png'),
        require('../../../images/project1_images/tutorial2.png'),
        require('../../../images/project1_images/tutorial3.png'),
    ];
    const nextP1Image = () => {
        setCurrentIndex((prevIndex) => (prevIndex === p1_images.length - 1 ? 0 : prevIndex + 1));
    };
    const prevP1Image = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? p1_images.length - 1 : prevIndex - 1));
    };

    const [currentIndex2, setCurrentIndex2] = useState(0); //index for changing p1 character profiles
    const profile_images = [
        require('../../../images/project1_images/cat.png'),
        require('../../../images/project1_images/dog.png'),
        require('../../../images/project1_images/rat.png'),
    ];
    const profile_alias = [
        'Mr. Cat',
        'Ms. Dog',
        'Mr. Rat',
    ];
    const profile_info = [
        'role: customer gender: male appears: all lvls difficulty: easy',
        'role: customer gender: female appears: lvls 2-3 difficulty: medium',
        'role: customer gender: male appears: lvl 3 difficulty: hard',
    ];
    const changeProfile = (index) => {
        setCurrentIndex2(index);
    };

    return (
        <>
            <div className = "p1-tab-container-2">
                <div className = "p1-explanation-container">
                    <h1 className = "p1-explanation-text">
                        Creamistry is a singleplayer, mobile, restaurant
                        serving-game. There are a total of 3 levels. At each level,
                        a new customer is introduced. Your job is to serve
                        each customer the correct order before they become impatient.
                        Beware, customers do not speak the same language as you so you will
                        need to translate their order using a translation book.
                    </h1>
                    
                <h1 className = "p1-explanation-caption">
                    Game Explanation
                </h1>
                    
                </div>
            
                <div className = "p1-demo-container">
                    <h1 className = "p1-demo-caption">
                         Demo Video
                    </h1>
                    <video src={p1_video} className = "p1-demo-video-box" width="200" height="350" controls="controls" autoplay= {false} />
                </div>

                <div className = "p1-credits-container">
                    <h1 className = "p1-credits-caption">
                        Credits
                    </h1>
                    <h1 className = "p1-credits-caption-text">
                        <h1 className = "p1-credits-role">Artist:</h1> 
                        <h1 className = "my-name">Julianne Lee</h1>
                        <p/>
                        <h1 className = "p1-credits-role">Engineering:</h1> 
                        <h1 className = "my-name">Julianne Lee</h1>
                        <p/>
                        <h1 className = "p1-credits-role">Music:</h1> 
                        ElvGames (Unity store)
                        <p/>
                        <h1 className = "p1-credits-role">SFX:</h1> 
                        Sourced from Soundsnap
                        <p/>
                        <h1 className = "p1-credits-role">Made with:</h1>
                        Unity
                        <p/>
                        <h1 className = "p1-credits-role">Art Softwares:</h1>
                        Procreate
                    </h1>
                    <img src = {rabbit} className = "rabbit" alt = ""/>
                </div>
            </div>


            <div className = "p1-tab-container">
                <h1 className = "p1-caption">
                    Project 1: Creamistry
                </h1>
            </div>

            <div className = "p1-tab-layout">
                <button className = 'next-button' onClick= {nextP1Image}>
                    <img src = {next_icon} className = "next-icon" alt = ""/>
                </button>
                <button className = 'prev-button' onClick = {prevP1Image}>
                    <img src = {prev_icon} className = "prev-icon" alt = ""/>
                </button>


                <div className = "mobile-container">
                    <img src = {p1_images[currentIndex]} className = "p1-image" alt = ""/>
                </div>
                <div className = "id-card">
                    <img src = {profile_images[currentIndex2]} className = "profile" alt = ""/>

                    <h1 className = "profile-name">
                        {profile_alias[currentIndex2]}
                    </h1>
            
                    <h1 className = "profile-content">
                        {profile_info[currentIndex2]}
                    </h1>
                    <div className = "id-logo-container">
                        <img src = {mint_icecream} className = "mint" alt = ""/>
                        <img src = {strawberry_icecream} className = "strawberry" alt = ""/>
                        <img src = {vanilla_icecream} className = "vanilla" alt = ""/>
                        <img src = {chocolate_icecream} className = "chocolate" alt = ""/>
                        <img src = {mint_icecream} className = "mint" alt = ""/>
                        <img src = {strawberry_icecream} className = "strawberry" alt = ""/>
                    </div>
                </div>

                <div className = "character-list-container">
                    <h1 className = "character-caption">
                        Characters:
                    </h1>
                    <div className = "characters-container">
                        <button className = "cat-button" onClick = {() => changeProfile(0)}>
                            <img src = {cat_unknown} className = "cat-unknown" alt = ""/>
                        </button>
                        <button className = "dog-button" onClick = {() => changeProfile(1)}>
                            <img src = {dog_unknown} className = "dog-unknown" alt = ""/>
                        </button>
                        <button className = "rat-button" onClick = {() => changeProfile(2)}>
                            <img src = {rat_unknown} className = "rat-unknown" alt = ""/>
                        </button>
                        <div className = "character-divider"/>
                        <h1 className = "characters-box-description">
                            * hover and click over the character silhouettes to learn
                            more *
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Project1;
