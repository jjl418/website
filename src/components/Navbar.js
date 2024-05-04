import React, { useState, useEffect }  from 'react'
import './Navbar.css';
import {Link, useNavigate} from 'react-router-dom'
// import {Button} from './Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import pixelheart2 from '../images/decor/pixelheart.png';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const isClicked = () => setClicked(!clicked);
  // mobile menu denoted as "MMenu"
  const MMenuClose = () => setClicked(false);

  //NEW
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const handleTabClick = (url) => {
    navigate(url);
    MMenuClose();
    window.location.reload();
  };
  
  //NEW
  // const [active, setActive] = useState(false);
  // const tabActive = () => setActive(!active);

  // function someFunc() {
  //   MMenuClose(); 
  //   tabActive();
  // }

  // const [button, setButton] = useState(true);
  //Function that handles UI changes on Mobile devices
  // const showUI = () => {
  //   if(window.innerWidth <= 960){
  //     setButton(false);
  //   }
  //   else{
  //     setButton(true);
  //   }
  // };

  // window.addEventListener('resize', showUI);

  return (
    <>
        <nav className ="navbar"> 
            <div className = "navbar-box">
                <Link className = "navbar-initials" onClick={() => handleTabClick("/")}>
                  J.Lee
                </Link>
                
                <img src = {pixelheart2} className = "logo" alt= ""/>
                <div className = "menu-icon" onClick = {isClicked}>
                  {clicked ? <CloseIcon/> : <MenuIcon/>}
                </div>

                <ul className = {clicked ? "nav-menu open" : "nav-menu closed"}>
                  {/* PROJECT LINK */}
                  <li className = "nav-menu-item">
                    <Link className = "nav-menu-link" onClick={() => handleTabClick("/projects")}>
                      <p align= "center"> Projects </p>
                    </Link>
                  </li>
                  {/* ART LINK */}
                  <li className = "nav-menu-item">
                    <Link className = "nav-menu-link" onClick={() => handleTabClick("/art")}>
                      <p align= "center"> Art </p>
                    </Link>
                  </li>
                  {/* ARCADE LINK */}
                  <li className = "nav-menu-item">
                    <Link className = "nav-menu-link" onClick={() => handleTabClick("/arcade")}>
                      <p align= "center"> Arcade </p>
                    </Link>
                  </li>
                  {/* ABOUT LINK */}
                  <li className = "nav-menu-item">
                    <Link className = "nav-menu-link" onClick={() => handleTabClick("/about-me")}>
                      <p align= "center"> About Me </p>
                    </Link>
                  </li>
                </ul>
                
            </div>
        </nav>
    </>
  );
}

export default Navbar