import React from 'react'
import './Footer.css'
import LogoFf from './Img/s2.png'
function Footer() {
  return (
    <>
    <div className='ss444'>

      <div className='ss44'>
        <footer class="footer">
          <div class="footer-column">
            
            <img src={LogoFf} alt="Logo" />
              <h1>શ્રેયસ વિદ્યાલય</h1>
            {/* <br /> */}
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            <div class="dowwnload-buttons">
              <img className='aaaaaa' src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" alt="img" />
            </div>
          </div>
          <div class="footer-column">
            <h2>Links</h2>
            <hr className='aaaqhr'></hr>
            <br />
            <ul>
              <li>&gt; &nbsp;  About Us</li>
              <li>&gt; &nbsp;  News/Events</li>
              <li>&gt; &nbsp;  Gallery</li>
              <li>&gt; &nbsp;  Collection</li>
              <li>&gt; &nbsp;  Admission Form</li>
              <li>&gt; &nbsp;  Achievements</li>

              <li className='circle'><a href="/">Follow Us →</a> <br /><br />
                <ul className='maincirscle'>
                  <li className='circle cursor-pointer'><i class="fa-brands fa-facebook-f"></i></li>
                  <li className='circle cursor-pointer'><i class="fa-brands fa-instagram"></i></li>
                  <li className='circle cursor-pointer'><i class="fa-brands fa-twitter"></i></li>
                  <li className='circle cursor-pointer'><i class="fa-brands fa-linkedin-in"></i></li>
                </ul>


              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h2>Contact Us</h2>
            <hr className='aaaqhr'></hr>
<br />
            <p> <i id='aaqq' class="fa-solid fa-location-dot"></i> &nbsp;રૂપાલી સોસાયટી ની સામે S.M.C. <br /> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;કોમ્પલેક્સ ધરમ નગર એ. કે. <br /> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; રોડ, સુરત.</p>
            <p> <i id='aaqq' class="fa-solid fa-phone"></i>&nbsp; Phone: 0261 256 2993</p>
            <br />
            <p> <i id='aaqq' class="fa-regular fa-envelope"></i>&nbsp;shreyasvidhayalay12@gmail.com</p>
            <br />
            <p className='lalalaaa'>Open Hours →</p>
            <br />
            <p>Monday-Saturday: 7 am-6 pm</p>
            <p>Sunday: <span className='reed'> CLOSED</span></p>
          </div>
        </footer>

      </div>
    </div>
<div className='lastdivfooter'>
<div className='mainfootrlast'>
      <div className='cenastat cursor-pointer' >CopyRight @ 2024 All Right are reserved by <span className='reed underline'> SHREYAS VIDYALAY.</span></div>
    </div>
</div>
    </>
  )
}

export default Footer