import React, { useEffect } from 'react'
// useEffect
import './News.css'
function News() {


  useEffect(() => {
    let elements = document.querySelectorAll("#myslid")
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
    let elements = document.querySelectorAll("#myslid2")
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
      <section className="  m-auto body-font container flex justify-center max-lg:block">
        <div className="w-2/4 max-lg:w-full">
          <h1 id='myslid' className="text-center text-2xl  font-bold mb-8 text-black">Latest News</h1>
          <div id='myslid' className="w-11/12 border rad custom-div-height custom-div-design p-8 overflow-hidden">
            <h1 className='highlightt'>22-12-2024</h1>
            <p>May 2024 - Newsletter</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere debitis nobis, adipisci eos, tenetur deserunt mollitia ea qui eaque iusto! Distinctio veniam iusto repellendus? Labore delectus tempora blanditiis natus?</p>
            <br />
            {/* <p> <button className="btn-hoverr color-100">Read More →</button></p> */}
            <p className='text-red-600'> Read More → </p>

          </div>
          <br />
          <div id='myslid2' class="w-11/12 border custom-div-height custom-div-design custom-mt p-8 overflow-hidden">
            <h1 className='highlightt'>22-12-2024</h1>
            <p>May 2024 - Newsletter</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere debitis nobis, adipisci eos, tenetur deserunt mollitia ea qui eaque iusto! Distinctio veniam iusto repellendus? Labore delectus tempora blanditiis natus?</p>
            <br />
            <p className='text-red-600'> Read More → </p>
          </div>
        </div>
        <div class="w-2/4  max-lg:w-full max-lg:mt-16">
          <h1 id='myslid2' class="text-center text-2xl   font-bold mb-8 text-black ">Notices &amp; Circulars</h1>
          <div id='myslid2' class="w-11/12 border h-40 custom-div-design p-8 overflow-hidden">
            <div class="flex justify-evenly">
              <div className='myimgbs'>
                <img src="https://aljuniedkhan.github.io/SchoolE/ICON/book.png" alt="Date" class="w-full" />
              </div>
              <div>
                <p class="ml-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam incidunt est cum ipsum dolore soluta omnis beatae amet.</p>
              </div>
            </div>
          </div>
          <br />
          <div id='myslid2' class="w-11/12 border h-40 custom-div-design p-8 overflow-hidden custom-mt">
            <div class="flex justify-evenly">
              <div className='myimgbs'>
                <img src="https://aljuniedkhan.github.io/SchoolE/ICON/Student.png" alt="Date" class="w-full" />
              </div>
              <div>
                <p class="ml-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam incidunt est cum ipsum dolore soluta omnis beatae amet.</p>
              </div>
            </div>
          </div>
          <br />
          <div id='myslid2' class="w-11/12 border h-40 custom-div-design p-8 overflow-hidden custom-mt">
            <div class="flex justify-evenly">
              <div className='myimgbs'>
                <img src="https://aljuniedkhan.github.io/SchoolE/ICON/Students.png" alt="Date" class="w-full" />
              </div>
              <div>
                <p class="ml-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam incidunt est cum ipsum dolore soluta omnis beatae amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default News
