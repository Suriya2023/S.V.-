import React, { useEffect } from 'react'
import './Class.css'
import './Class2.css'

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
                            <div className="live-tagg2"> </div>
                            <div className="live-tagg3"> </div>
                            {/*                        
                    <div className="live-tagg"> </div> 
                    <div className="live-tagg"> </div> */}
                        </div>

                        {/* <video src={Vedio}    autoPlay muted  onPlay={true}  loop  ></video> */}
                        <div className="live-tag ">
                            <p>  LIVE CLASS </p>
                            {/* <div className="live-tagg2"> </div> */}


                        </div>
                        <div className="live-taggg4 ">
                            <div className="live-tagg33"> </div>



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

                {/* <!-- Right Side Content --> */}
                <div className="right-content">
                    <h2><span className="highlight2">Best Eduction For</span>
                        Your Childern's Fututre.</h2>
                    <p>
                        Every teaching and learning journey is unique Following We'll help guide your way.
                    </p>
                    {/* <ul>
                        <li>✅ The Most World Class Instructors</li>
                        <li>✅ Access Your Class Anywhere</li>
                        <li>✅ Flexible Course Plan</li>
                    </ul> */}
                    <button className="btn-hover color-10">Show more →</button>
                </div>




                {/* <!-- Left Side with Image --> */}

            </section>
        </div>
    )
}

export default class2
