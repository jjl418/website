import '../../../App';
import './Arcade.css';
import {Link} from 'react-router-dom';
import creamistryThumbnail from '../../../images/arcade/creamistry-thumbnail.png';
import monsterThumnmail from '../../../images/arcade/monster-thumbnail.png';
import pixelConsole from '../../../images/arcade/pixel-console.png';
import comingSoon from '../../../images/arcade/coming-soon.png';
import React from 'react';
// import React from 'react';

function Arcade() {
  // window.addEventListener('visibilitychange', () =>{
  //   if (document.visibilityState === 'visible') window.location.reload();
  //   else console.log('user leaves the page')
  // })

  //NEW STUFF
  
  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  //NEW STUFF

  return (
    <>
    
      <div className = 'projects-background-3'>
        <div className = 'arcade-layout'>
          <h1 className = 'page-title'>Arcade
            <img src = {pixelConsole} className = "console-img" alt = ""/>
          </h1>
          <div className = 'thumbnail-container'>
            <Link to = "/creamistry" className = "game-thumbnail">
              <img src = {creamistryThumbnail} className = "creamistry-thumbnail-img" alt = ""/>
            </Link>
            <Link to = "/monster-bartender" className = "game-thumbnail">
              <img src = {monsterThumnmail} className = "monster-thumbnail-img" alt = ""/>
            </Link>
            <div className = "game-thumbnail">
              <img src = {comingSoon} className = "comingSoon-img" alt = ""/> 
              <h1 className = 'coming-soon-text'>
                Coming Soon!
              </h1>
            </div>
            <div className = "game-thumbnail">
              <img src = {comingSoon} className = "comingSoon-img" alt = ""/> 
              <h1 className = 'coming-soon-text'>
                Coming Soon!
              </h1>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Arcade;