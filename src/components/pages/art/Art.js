import '../../../App';
import './Art.css';
import React, { useState } from 'react';
import next_icon from '../../../images/decor/next_icon.png';
import prev_icon from '../../../images/decor/prev_icon.png';

function Art() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  //2D ART
  const [currentIndex, setCurrentIndex] = useState(0); //index for p1_images list
  const art_images = [
    require('../../../images/art_images/hand study.png'),
    require('../../../images/art_images/anime face.jpg'),
    require('../../../images/art_images/character.jpg'),
    require('../../../images/project2_images/mb_gameplay.png'),
  ];
  const nextArtImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === art_images.length - 1 ? 0 : prevIndex + 1));
  };
  const prevArtImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? art_images.length - 1 : prevIndex - 1));
  };

  //3D ART
  const [currentIndex1] = useState(0); 
  const threeD_art_images = [
    require('../../../images/art_images/room.png'),
  ];
  // const next3DArtImage = () => {
  //   setCurrentIndex1((prevIndex) => (prevIndex === threeD_art_images.length - 1 ? 0 : prevIndex + 1));
  // };

  // const prev3DArtImage = () => {
  //   setCurrentIndex1((prevIndex) => (prevIndex === 0 ? threeD_art_images.length - 1 : prevIndex - 1));
  // };

    return (
    <>
        <div className = "projects-background-2">
          <div className = "art-tab-container">
            <div className = "art-tab">
              <button className = {activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
                <h1 className = "art-tab-caption">
                  2D-art
                </h1>
              </button>
              
              <button className = {activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
                <h1 className = "art-tab-caption">
                  3D-art
                </h1>
              </button>
            </div>


            <div className = "art-tab-layout">
              <div className = "tab-content">
                {activeTab === 1 && 
                <div className= "art-content">
                  <button className = 'next-button-art' onClick= {nextArtImage}>
                      <img src = {next_icon} className = "next-icon" alt = ""/>
                  </button>
                  
                  <button className = 'prev-button-art' onClick= {prevArtImage}>
                    <img src = {prev_icon} className = "prev-icon" alt = ""/>
                  </button>
                  
                  <div className = "art-container">
                    <img src = {art_images[currentIndex]} className = "art-image" alt = ""/>
                  </div>
                </div>}

                {activeTab === 2 && 
                <div className = "art-content">
                  {/* <button className = 'next-button-art' onClick= {next3DArtImage}>
                    <img src = {next_icon} className = "next-icon" alt = ""/>
                  </button>

                  <button className = 'prev-button-art' onClick= {prev3DArtImage}>
                    <img src = {prev_icon} className = "prev-icon" alt = ""/>
                  </button> */}
                  <div className = "art-container">
                    <img src = {threeD_art_images[currentIndex1]} className = "art-image" alt = ""/>
                  </div>
                  
                </div>}
              </div>
            </div>

          </div>
        </div>
    </>
    );
}
  
export default Art;