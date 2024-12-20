import React, { useEffect } from 'react'
import './Class.css'

function class2() {
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
        <div>
            <section className="course-section">
                <div className="left-content">
                    <div className="image-container">
                        <img src="https://geniusinfotech.github.io/Shreyas-Vidyalaya/static/media/Untitled%20design.b36a30fba62fc8809fb7.png" alt="Students" className="main-image" />
                        <div id='old'>
                            <div className="live-tagg"> </div>
                            <div className="live-tagg"> </div>
                            {/*                        
                    <div className="live-tagg"> </div> 
                    <div className="live-tagg"> </div> */}
                        </div>

                        {/* <video src={Vedio}    autoPlay muted  onPlay={true}  loop  ></video> */}
                        <div className="live-tag ">LIVE CLASS</div>
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

                {/* <!-- Right Side Content --> */}
                {/* <div className="right-content">
                    <h2><span className="highlight">Thousand Of Top</span> Courses Now In One Place</h2>
                    <p>
                        Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize, and communicate effectively.
                    </p>
                    <ul>
                        <li>✅ The Most World Class Instructors</li>
                        <li>✅ Access Your Class Anywhere</li>
                        <li>✅ Flexible Course Plan</li>
                    </ul>
                    <button className="btn-hover color-10">Start Free Trial →</button>
                </div> */}


                {/* <!-- Left Side with Image --> */}

            </section>
        </div>
    )
}

export default class2
