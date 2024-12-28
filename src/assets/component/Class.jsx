import React, { useEffect } from 'react'
import './Class.css'
// import Vedio from './Videos/study.mp4'
function Class() {
    useEffect(() => {
        let elements = document.querySelectorAll(".left-content")
        let handleScroll = () => {
            let viewportHeight = window.innerHeight;
            elements.forEach(element => {
                let boundingRect = element.getBoundingClientRect().top;
                if (boundingRect < viewportHeight) {
                    element.classList.add('fire');
                } else {
                    element.classList.remove('fire');
                }
            })
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })


    useEffect(() => {
        let elements = document.querySelectorAll(".right-content")
        let handleScroll = () => {
            let viewportHeight = window.innerHeight;
            elements.forEach(element => {
                let boundingRect = element.getBoundingClientRect().top;
                if (boundingRect < viewportHeight) {
                    element.classList.add('fire');
                } else {
                    element.classList.remove('fire');
                }
            })
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })
    return (
        <>

            <section id='flrxflow' className="course-section">


                {/* <!-- Right Side Content --> */}
                <div className="right-content">
                    <h2><span className="highlight">હજારો ટોચના</span> અભ્યાસક્રમો હવે એક જ જગ્યાએ</h2> 
                    <p>
                    ગ્રૂવનું સાહજિક વહેંચાયેલું ઇનબોક્સ ટીમના સભ્યો માટે અસરકારક રીતે વ્યવસ્થિત, પ્રાથમિકતા અને સંવાદ કરવાનું સરળ બનાવે છે.
                    </p>
                    <ul>
                        <li>✅ સૌથી વધુ વિશ્વ કક્ષાના પ્રશિક્ષકો</li>
                        <li>✅  તમારો વર્ગ ગમે ત્યાં ઍક્સેસ કરો</li>
                        <li>✅  ફ્લેક્સિબલ કોર્સ પ્લાન</li>
                    </ul> <button className="btn-hover color-10">Aboute More →</button>
                   
                </div>

                {/* <!-- Left Side with Image --> */}
                <div className="left-content">
                    <div className="image-container">
                        <img src="https://geniusinfotech.github.io/Shreyas-Vidyalaya/static/media/pixelcut-export.d9176d621426590bb9e3.png" alt="Students" className="main-image" />
                        <div id='old'>
                            <div className="live-tagg"> </div>
                            <div className="live-taggg"> </div>
                            {/*                        
                       <div className="live-tagg"> </div> 
                       <div className="live-tagg"> </div> */}
                        </div>

                        {/* <video src={Vedio}    autoPlay muted  onPlay={true}  loop  ></video> */}
                        <div className="live-tag ">LIVE CLASS</div>
                        <div className="live-taggg4 ">
                            <div className="live-tagg333"> </div>



                        </div>
                        <div className="enrolled-info">
                            <span>36K+ <strong>Enrolled Students</strong></span>
                            <div className="avatars">
                                <img src="https://html.merku.love/shelly/assets/img/icon5.png" alt="Avatar 1" />
                                <img src="https://html.merku.love/shelly/assets/img/icon7.png" alt="Avatar 2" />
                                <img src="https://html.merku.love/shelly/assets/img/icon8.png" alt="Avatar 3" />
                                <img src="https://html.merku.love/shelly/assets/img/icon9.png" alt="Avatar 4" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Class
