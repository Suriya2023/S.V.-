import React, { useEffect } from 'react'
import './Subject.css'
import Sub1 from '../component/img/s1.png'
import Sub2 from '../component/img/s3.png'
import Sub3 from '../component/img/s6.png'
function subject() {
    useEffect(() => {
        let elements = document.querySelectorAll("#myslid5")
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
        let elements = document.querySelectorAll("#myslid6")
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
            <div className="materia">
                <h1 id='myslid5'> List Of <span className='myfont'> Material→</span> </h1>
                <br />

                <div className="mainsub">
                    <div id='myslid5' className="submt">

                        <img src={Sub1} alt="" />
                    

                    </div>

                    <div id='myslid6' className="submt">
                        <img src={Sub2} alt="" />
 
                    </div>
                    <div id='myslid5' className="submt">
                        <img src={Sub3} alt="" />

                      
                    </div>
                    {/* <div className="submt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti saepe ipsum dicta magni adipisci voluptatum voluptates quasi illo, beatae quidem quae eaque quod. Dicta quia soluta suscipit nostrum hic.
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default subject
