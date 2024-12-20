import React from "react";
import Navbar from './assets/component/Navbar'
import AnimatedCursor from "react-animated-cursor"
// import sr from './Videos/Study'


import './App.css'
import Class from "./assets/component/Class";
// import Sr from './assets/Videos/study.mp4'
import Class2 from "./assets/component/class2";
// import Schoole_Facility from './assets/component/Schoole_Facility'

function App() {


  return (
    <>
      { <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      /> }
   <div className="imgdiv">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTDhkJ87MhfGS2EGN6b6OlmzKAGletd1NbBUoKF1wDBdH87qeAGHtpbTG4aS2_aElWVSuCDsONNHVjA6tbZLjqDL-nhEG9WlvYypFtS9piuqCAQDO-NqYKnGUqAEjKu2-5B_JZT1rQPlFRpr0tmSIiap2rRC2APUXvZSDtD_8wgHI3X16Y8XAc8arHiaXd/s16000/Shreyas-Vidyalaya%20Vidhyalaya.png" alt="" />
  
 <div className="maindiv">
 <Navbar />
 <Class  />
 <Class2/>
 {/* <Schoole_Facility/> */}
 </div>
   </div>


    </>
  )
}

export default App
