import '../../../App';
import './Project2.css';
import chad_thumbnail from '../../../images/project2_images/chad_thumbnail.png';
import mummy_thumbnail from '../../../images/project2_images/mummy_thumbnail.png';
import lady_thumbnail from '../../../images/project2_images/lady_thumbnail.png';
import samurai_thumbnail from '../../../images/project2_images/samurai_thumbnail.png';
import statue_thumbnail from '../../../images/project2_images/statue_thumbnail.png';
import chad_animation from '../../../videos/Animation_Monster1_Final.mp4';
import mummy_animation from '../../../videos/Animation_Monster2_Final.mp4';
import lady_animation from '../../../videos/Animation_Monster3_Final.mp4';
import samurai_animation from '../../../videos/Animation_Monster4_Final.mp4';
import statue_animation from '../../../videos/Animation_Monster5_Final.mp4';
import book_animation from '../../../videos/Book_Monster_Final.mp4';
import p2_video from '../../../videos/Monster_Bartender_demo.mp4';
import next_icon from '../../../images/decor/next_icon.png';
import prev_icon from '../../../images/decor/prev_icon.png';
import React, { useState } from 'react';

function Project2() {
    //Project 2: Monster Bartender
    const [currentIndex3, setCurrentIndex3] = useState(0); //index for mb gameplay list
    const p2_images = [
        require('../../../images/project2_images/mb_menu.png'),
        require('../../../images/project2_images/mb_gameplay.png'),
        require('../../../images/project2_images/mb_recipe.jpg'),
    ];
    const nextP2Image = () => {
        setCurrentIndex3((prevIndex2) => (prevIndex2 === p2_images.length - 1 ? 0 : prevIndex2 + 1));
    };
    const prevP2Image = () => {
        setCurrentIndex3((prevIndex2) => (prevIndex2 === 0 ? p2_images.length - 1 : prevIndex2 - 1));
    };


    const [currentIndex4, setCurrentIndex4] = useState(0); //index for changing p2 characters
    const character_images = [
        require('../../../images/project2_images/chad.png'),
        require('../../../images/project2_images/mummy.png'),
        require('../../../images/project2_images/lady.png'),
        require('../../../images/project2_images/samurai.png'),
        require('../../../images/project2_images/statue.png'),
    ];
    const changeCharacters = (index) => {
        setCurrentIndex4(index);
    };
    return (
        <>
            <div className = "p2-tab-container">
                <h1 className = "p2-caption">
                    Project 2: Monster Bartender
                </h1>
            </div>

            <div className = "p2-tab-layout">
                <button className = 'p2-next-button' onClick= {nextP2Image}>
                    <img src = {next_icon} className = "next-icon" alt = ""/>
                </button>
                <button className = 'p2-prev-button' onClick = {prevP2Image}>
                    <img src = {prev_icon} className = "prev-icon" alt = ""/>
                </button>
            
                <div className = "p2-snapshot-container">
                    <h1 className = "p2-snapshot-caption">
                        Game Snapshots
                    </h1>
                    <img src = {p2_images[currentIndex3]} className = "p2-image" alt = ""/>
                </div>
            
                <div className = "p2-game-explanation-container">
                    <div className = "p2-game-explanation-box">
                        <h1 className = "p2-explanation-caption">
                            Game Explanation
                        </h1>
                        <h1 className = "p2-explanation-text">
                            Monster Bartender is a 2.5D, horror, restaurant serving game.
                            Your job must serve the correct drink to each customer before they run out patience
                            and kill you. Choosing the wrong speech bubbles will cause the
                            customer to kill you. Use the recipe book to 
                            help aid you, but staring too long will summon a book demon.
                        </h1>
                    </div>

                    <div className = "p2-demo-box">
                        <h1 className = "p2-demo-caption">
                            Demo Video
                        </h1>
                        <video src={p2_video} className = "p2-demo-video-box" width="320" height="180" controls="controls" autoplay= {false} />
                        <h1 className = "p2-notes-caption">
                            Notes
                        </h1>
                        <div className = "p2-notes-text">
                            This game was an in-class project assignment.
                            We teamed up with Berklee music students to 
                            create this game.
                            <p/>
                            <h1 className = "p2-notes-special-text">Course Name:</h1> 
                        </div>
                        {/* CTIN 489: Intermediate Game Design and Production */}
                        <h1 className = "p2-class-name">
                            CTIN 489: Intermediate Game Design and Production
                        </h1>
                    </div>

                    <div className = "p2-credits-box">
                        <h1 className = "p2-credits-caption">
                            Credits
                        </h1>
                        <h1 className = "p2-credits-caption-text">
                            <h1 className = "p1-credits-role">Artist:</h1> 
                            <h1 className = "my-name">Julianne Lee</h1>
                            <p/>
                            <h1 className = "p1-credits-role">Engineering:</h1> 
                            Birdie Barr
                            <p/>
                            <h1 className = "p1-credits-role">Sound Producer:</h1> 
                            Moodin Jang
                            <p/>
                            <h1 className = "p1-credits-role">Composers:</h1> 
                            Johnny Ho
                            <p/>
                            Diego Gomez
                            <p/>
                            <h1 className = "p1-credits-role">Sound Designers:</h1>
                            Johnny Ho
                            <p/>
                            Diego Gomez
                            <p/>
                            Moodin Jang
                            <p/>
                            Xiaohe Zhao
                            <p/>
                            <h1 className = "p1-credits-role">Made with:</h1>
                            Unity
                            <p/>
                            {/* <h1 className = "p1-credits-role">Art Softwares:</h1> */}
                            Procreate
                            <p/>
                        </h1>
                    </div>
                </div>
          
                <div className = "p2-character-containers">
                    <h1 className = "p2-character-caption">
                        Characters
                    </h1>
                    <div className = "p2-animation-caption-box">
                        <h1 className = "p2-animation-caption">
                            Killing Animations
                        </h1>
                    </div>
                    <h1 className = "p2-animation-caption">
                        Killing Animations
                    </h1>
                    <div className = "character-button-container">
                        <button className = "chad-button" onClick = {() => changeCharacters(0)}>
                            <img src = {chad_thumbnail} className = "chad-thumbnail" alt = ""/>
                        </button>
                        <button className = "mummy-button" onClick = {() => changeCharacters(1)}>
                            <img src = {mummy_thumbnail} className = "mummy-thumbnail" alt = ""/>
                        </button>
                        <button className = "lady-button" onClick = {() => changeCharacters(2)}>
                            <img src = {lady_thumbnail} className = "lady-thumbnail" alt = ""/>
                        </button>
                        <button className = "samurai-button" onClick = {() => changeCharacters(3)}>
                            <img src = {samurai_thumbnail} className = "samurai-thumbnail" alt = ""/>
                        </button>
                        <button className = "statue-button" onClick = {() => changeCharacters(4)}>
                            <img src = {statue_thumbnail} className = "statue-thumbnail" alt = ""/>
                        </button>
                    </div>
                    <div className = "p2-animation-container">
                        <video src={chad_animation} className = "chad-video-box" width="248" height="140" controls="controls" autoplay= {false} />
                        <video src={mummy_animation} className = "mummy-video-box" width="248" height="140" controls="controls" autoplay= {false} />
                        <video src={lady_animation} className = "lady-video-box" width="248" height="140" controls="controls" autoplay= {false} />
                        <video src={samurai_animation} className = "samurai-video-box" width="248" height="140" controls="controls" autoplay= {false} />
                        <video src={statue_animation} className = "statue-video-box" width="248" height="140" controls="controls" autoplay= {false} />
                        <video src={book_animation} className = "book-video-box" width="248" height="140" controls="controls" autoplay= {false} />
                    </div>
                    <img src = {character_images[currentIndex4]} className = "p2-characters" alt = ""/>
                </div>
            </div>
        </>
    );
  }
  
  export default Project2;