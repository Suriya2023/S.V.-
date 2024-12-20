import React, { useEffect } from 'react'
import './Navbar.css'
function Navbar() {
  useEffect(() => {
    let elements = document.querySelectorAll(".logo")
    let handleScroll = () => {
      let viewportHeight = window.innerHeight;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().right;
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
      <div className="section">
        <div className='main'>
          <header>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <br />
            <div className="contact-info">
              <div>
                <h4><i className="fas fa-phone-alt"></i> Call</h4>
                <p>+91 000 000 000</p>
              </div>
              <div>
                <h4><i className="fas fa-clock"></i> Work Time</h4>
                <p>Mon - Fri 8 AM - 5 PM</p>
              </div>
              <div>
                <h4><i className="fas fa-map-marker-alt"></i> Address</h4>
                <p>Mota varachha, Surat Gujarat</p>
              </div>
            </div>
          </header>
          {/* <hr /> */}

          {/* <!-- Navigation --> */}
          <nav>
            <div className="logo">
              <img src="https://suriya2023.github.io/School-Website/static/media/s2.eaf0b4960ee08d27901e.png" alt="Logo" />
              <h1 className='hy'>શ્રેયસ  વિદ્યાલય<br /></h1>
            </div>
            <ul className='hover'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Vision</a></li>
              <li><a href="#">My Gallery</a></li>
              <li><a href="#">My Study</a></li>
              <li><a href="#">Admission </a></li>
              <li><a href="#">Achievement </a></li>
            </ul>


          </nav>

          {/* <!-- Social Media Icons --> */}

          {/* <hr /> */}
        </div>
      </div>
    </>

  )
}

export default Navbar
