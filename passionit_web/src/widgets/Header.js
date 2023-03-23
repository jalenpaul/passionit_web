import img_logoPassionIT from '/Users/jalen/WebProjects/passionit_web/src/res/images/PassionIT_logoGrey.png';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import './Header.css';



export default function Header({ headerColor = "#232326" }) {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById('header').style.visibility = "hidden";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('header').style.visibility = "visible";
  }
  
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div className="App">

        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Demos</a>
          <a href="#">Contact</a>
        </div>

        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>PassionIT</title>
          <meta name="description" content="Digital solutions, guided by innovation, with a passion for IT"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </Helmet>

        <header id="header" style={{ backgroundColor: headerColor }} className="Header">
          <a>
            <img className="Logo" src={img_logoPassionIT} alt="PassionIT logo"/>
          </a>
          <div id="div_header_options">
            <button id="b_profile_name" className="IconBtn">
              <i id="ic_profile" className="material-icons large">account_circle</i>
            </button>
            <button id="b_profile_sideMenu" onClick={openNav} className="IconBtn">
              <i id="ic_hamburger" className="material-icons large">dehaze</i>
            </button>
          </div>
        </header>
      </div>
    </HelmetProvider>
  );
}