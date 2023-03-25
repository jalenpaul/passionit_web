import './App.css';
import React, { useState, useEffect, useRef } from 'react';
//images
import img_wireframeSS from './res/images/wireframe_stockImage.jpg';
import img_myWorkStation from './res/images/myWorkStation.jpg';
import img_javascriptLogo from './res/images/javascript_logo.png';
import img_reactjs from './res/images/reactjs_logo.png';
import img_css3 from './res/images/css3_logo.png';
import img_html5 from './res/images/html5_logo.png';
import img_tailwind from './res/images/tailwind_logo.png';
import img_firebase from './res/images/firebase_logo.png';
import img_php from './res/images/php_logo.png';
//jquery
import $ from 'jquery';
//our created components
import Header from './widgets/Header';
//animation library
import { color, motion } from 'framer-motion';
//responsive layouts library
import { useMediaQuery } from 'react-responsive'



export default function App() {

  //hooks
  const [headerColor, setHeaderColor] = useState('transparent');

  //refs
  const divMainDisplay = useRef(null);

  //react responsive (lib)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  useEffect(() => {
    $(window).on("scroll", function(e) {
      if ($(window).scrollTop() >= divMainDisplay.current?.clientHeight) {
        setHeaderColor('#252526');
      } else {
        setHeaderColor('transparent');
      }
    });
  }, [headerColor]);


  //Event Handlers 
  function exploreClick() {
    $("#section_services").get(0).scrollIntoView({behavior: 'smooth'});
  }


  return (
    <div>

      <Header headerColor={headerColor}/>
      <div id="div_mainDisplay" ref={divMainDisplay} >
        <h1 id="h1_index_motive">Inspire, Create, Innovate, with a Passion for IT.</h1>
        <motion.button id="b_index_explore" onClick={exploreClick} whileHover={{scale: 1.1,transition: { duration: 1 },}} whileTap={{ scale: 0.9 }}>
          Explore
        </motion.button>
      </div>

      <article>
        <section>
          <div className="GridLayoutTwoColumns">

            <div className="AboutUsGridItem" style={{backgroundImage: `url(${img_wireframeSS})`, borderTopLeftRadius: '16px'}}>
              <div className="ImgColorTint" style={{backgroundColor: 'rgba(38, 242, 242, 0.750)', borderTopLeftRadius: '16px'}}>
                <h1>About Us<br/> & <br/> Our Mission</h1>
              </div>
            </div>

            <div className="AboutUsGridItem" style={{backgroundColor: "#24d1d1", borderTopRightRadius: '16px'}}>
              <h3 style={{padding: '4%'}}>PassionIT is a software firm pursuing the ambitious intent of finding the most economical approach to providing 
                creative digital solutions without sacraficing quality or time, all while remaining budget friendly.
              </h3>
              <h3 style={{padding: '4%'}}>
                Your satisfaction is our top priority, and we recognize what you stand for, which is why we are dedicated to
                providing guaranteed quality assurance.
              </h3>
            </div>

            <div className="AboutUsGridItem" style={{backgroundColor: "#252526", borderBottomLeftRadius: '16px'}}>
              <h3 style={{padding: '4%'}}>We provide solutions of all sorts, including (but not limited to):</h3>
              <ul style={{textAlign: "start"}}>
                <li style={{marginBottom: "3%", color: "whitesmoke", fontSize: "1.5vh"}}>Creating or updating websites and mobile applications</li>
                <li style={{marginBottom: "3%" , color: "whitesmoke", fontSize: "1.5vh"}}>Setting up web domains with SSL</li>
                <li style={{marginBottom: "3%" , color: "whitesmoke", fontSize: "1.5vh"}}>Debugging and updating existing software</li>
                <li style={{marginBottom: "3%" , color: "whitesmoke", fontSize: "1.5vh"}}>Payment services</li>
                <li style={{marginBottom: "3%", color: "whitesmoke", fontSize: "1.5vh"}}>Implementing third party APIs or software</li>
                <li style={{marginBottom: "3%", color: "whitesmoke", fontSize: "1.5vh"}}>Cloud services</li>
                <li style={{marginBottom: "3%", color: "whitesmoke", fontSize: "1.5vh"}}>Location and navigation services (Google Maps)</li>
                <li style={{marginBottom: "3%", color: "whitesmoke", fontSize: "1.5vh"}}>Relational and non-relational databases</li>
              </ul>
            </div>

            <div className="AboutUsGridItem" style={{backgroundImage: `url(${img_myWorkStation})`, borderBottomRightRadius: '16px'}}>
              <div className="ImgColorTint" style={{backgroundColor: 'rgb(37, 37, 38, 0.750)'}}>
                <h1>You Say It<br/> <br/> We Build It</h1>
              </div>
            </div>
            
          </div>
        </section>


        <section>
          <h1 className="SectionTitle">Services</h1>
          <div className="GridLayoutThreeColumns">

            <div className="ServicesGridItem">
              <img className="ServicesLogo" src={img_javascriptLogo}/> 
              <h2>Javascript</h2>
              <h3>Programming language for web development</h3>
              <h4>Projects: 2 | Experience: 1 yr</h4>
            </div>

            <div className="ServicesGridItem">
              <img className="ServicesLogo" src={img_reactjs}/> 
              <h2>React JS</h2>
              <h3>Website development framework for both mobile and desktop.</h3>
              <h4>Projects: 2 | Experience: 0.5 yrs</h4>
            </div>

            <div className="ServicesGridItem">
              <img className="ServicesLogo" src={img_css3}/> 
              <h2>CSS 3</h2>
              <h3>Design language mainly for the appearance in website development.</h3>
              <h4>Projects: 2 | Experience: 1 yrs</h4>
            </div>

            <div className="ServicesGridItem">
              <img className="ServicesLogo" src={img_html5}/> 
              <h2>HTML 5</h2>
              <h3>Markup language for the structural design of a website.</h3>
              <h4>Projects: 2 | Experience: 1 yrs</h4>
            </div>

            <div className="ServicesGridItem">
              <img className="ServicesLogo" src={img_tailwind}/> 
              <h2>Tailwind</h2>
              <h3>Design framework for a modern appearance of websites.</h3>
              <h4>Projects: 1 | Experience: 0.5 yrs</h4>
            </div>

            <div className="ServicesGridItem">
              <img className="ServicesLogo" src={img_firebase}/> 
              <h2>Firebase & Firestore</h2>
              <h3>Non-relational and relational cloud databases provided by Google.</h3>
              <h4>Projects: 3 | Experience: 3 yrs</h4>
            </div>

            <div className="ServicesGridItem">
              <img className="ServicesLogo" src={img_php}/> 
              <h2>PHP</h2>
              <h3>Programming language for backend web development.</h3>
              <h4>Projects: 1 | Experience: 1 yrs</h4>
            </div>

          </div>
        </section>

        <section>
          <h1>Demos</h1>

        </section>

        <section>
          <h1>How We Operate</h1>
        </section>
        
      </article>

    </div>
  );
}
