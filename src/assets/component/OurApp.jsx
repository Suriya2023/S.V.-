import React, { useEffect } from 'react'
import './OurApp.css'
import OurAppimg from './Img/s5.png'
function OurApp() {


    useEffect(() => {
        let elements = document.querySelectorAll("#myslid9")
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
        let elements = document.querySelectorAll("#myslid10")
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
        let elements = document.querySelectorAll("#wim")
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
        let elements = document.querySelectorAll("#wim1")
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
        <div className='sss2'>

            <div className='ss2'>
                <div className='ss3'>
                    <div id='myslid10' className='cccontainer'>
                        <img src={OurAppimg} alt="img" />
                    </div>
                    <div class="cccontainer">
                        <div id='myslid9' class="heeeader">
                            <h1 className='hellow'>શ્રેયસ વિદ્યાલય</h1>

                            <h1>Our Application</h1>
                            <h2>Devendra Solanki</h2>
                        </div>
                        <div id='myslid10' class="grid">
                            <div class="grid-item">School Profile</div>
                            <div class="grid-item">Daily Attendance</div>
                            <div class="grid-item">Homework</div>
                            <div class="grid-item">Notice Board</div>
                            <div class="grid-item">Programs within the App</div>
                            <div class="grid-item">Our Vision</div>
                            <div class="grid-item">Our Gallery</div>
                            <div class="grid-item">Student Report</div>
                        </div>
                        <div class="download-buttonss">
                            <img id='wim' src="https://www.freepnglogos.com/uploads/google-play-png-logo/new-get-it-on-google-play-png-logo-20.png" alt="" />
                            <img id='wim1' src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurApp