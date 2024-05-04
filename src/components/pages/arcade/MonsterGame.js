import '../../../App';
import './MonsterGame.css';
// import '../../../../monster.framework.js'
import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function MonsterGame() {
  const { unityProvider } = new useUnityContext({
    loaderUrl: "/MonsterGameAssets/monster2.loader.js",
    dataUrl: "/MonsterGameAssets/monster2.data",
    frameworkUrl: "/MonsterGameAssets/monster2.framework.js",
    codeUrl: "/MonsterGameAssets/monster2.wasm",
    streamingAssetsUrl: "/MonsterGameAssets/StreamingAssets",
  });
  return (
    <>
      <div className = "monster-background">
        <Unity unityProvider={unityProvider} className = "monster-game-containter" />
      </div>
      
    </>
  );
}

export default MonsterGame;