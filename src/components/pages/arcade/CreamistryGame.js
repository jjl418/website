import '../../../App';
import './CreamistryGame.css';
import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function CreamistryGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/CreamistryGameAssets/creamistry.loader.js",
    dataUrl: "/CreamistryGameAssets/creamistry.data",
    frameworkUrl: "/CreamistryGameAssets/creamistry.framework.js",
    codeUrl: "/CreamistryGameAssets/creamistry.wasm",
  });

  //NEW STUFF
  
  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  //NEW STUFF
  
  return (
    <>
      <div className = "creamistry-background">
        <Unity unityProvider={unityProvider} className = "creamistry-game-containter" />
        <div className = "creamistry-note-container">
          <h1 className = "creamistry-note-text">
            Note:
          </h1>
          <h1 className = "creamistry-note-paragraph">
            The game uploaded on this website is a slightly modified version
            of the original game. The only change is that the "€" sign is 
            replaced with a "+" sign. The reason behind this is because the euro 
            sign does not show up on the browser when webgl is used. 
          </h1>
        </div>
      </div>
      
    </>
  );
}

export default CreamistryGame;