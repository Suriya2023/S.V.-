import React, { useEffect } from 'react'
import './Material.css'
function material() {

  useEffect(() => {
    let elements = document.querySelectorAll("#myslid7")
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
    let elements = document.querySelectorAll("#myslid8")
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
      <h1 id='myslid7' className='Facilities'>School <span className='myhd'>Facilities→</span> </h1>

      <div className='mainmaterial'>

        <div id='myslid8' className="boxes">
          <img src="https://dummyimage.com/721x401" alt="" />

          <h1>Interactive Panel</h1>
          Academic Excellence: Smart classrooms, e-learning support, and personalized mentoring.
          Sports & Fitness: Spacious playgrounds, indoor sports, and regular fitness programs.
          Cultural Activities: Music, dance, drama, and art classes for holistic growth. <br /><br />
          <button className='mybtn'>Read More →</button>
        </div>

        <div id='myslid7' className="boxes">
          <img src="https://dummyimage.com/721x401" alt="" />

          <h1>Library</h1>
          Academic Excellence: Smart classrooms, e-learning support, and personalized mentoring.
          Sports & Fitness: Spacious playgrounds, indoor sports, and regular fitness programs.
          Cultural Activities: Music, dance, drama, and art classes for holistic growth. <br /><br />
          <button className='mybtn'>Read More →</button>

        </div>
        <div id='myslid8' className="boxes">
          <img src="https://dummyimage.com/721x401" alt="" />
          <h1>Positive Learning</h1>
          Academic Excellence: Smart classrooms, e-learning support, and personalized mentoring.
          Sports & Fitness: Spacious playgrounds, indoor sports, and regular fitness programs.
          Cultural Activities: Music, dance, drama, and art classes for holistic growth. <br /><br />
          <button className='mybtn'>Read More →</button>

        </div>
        <div id='myslid7' className="boxes">
          <img src="https://dummyimage.com/721x401" alt="" />

          <h1>Computer Lab</h1>
          Academic Excellence: Smart classrooms, e-learning support, and personalized mentoring.
          Sports & Fitness: Spacious playgrounds, indoor sports, and regular fitness programs.
          Cultural Activities: Music, dance, drama, and art classes for holistic growth. <br />
          <br />
          <button className='mybtn'>Read More →</button>

        </div>
      </div>
    </div>
  )
}

export default material
