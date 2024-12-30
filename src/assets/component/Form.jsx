import React, { useEffect } from 'react'
import './Form.css'
function Form() {

    useEffect(() => {
        let elements = document.querySelectorAll("#myslid3")
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
        let elements = document.querySelectorAll("#myslid4")
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
            <div className="form-container1">
                <div>

                </div>
                <div id='myslid3' className="form-header1">
                    Sign up for a free trial lesson by <span className="highlighttt1"> Zoom</span>
                </div>
                <div className="form-body1">
                    <p id='myslid4'> Fill out the form below to schedule your free trial lesson.</p>
                    <input  id='myslid3' type="text" placeholder="Your name" required />
                    <input  id='myslid4' type="email" placeholder="Email address" required />
                    <select id='myslid3' required>
                        <option value="">Select class</option>
                        <option value="course1">class 1</option>
                      <option value="course2">class 2</option> */}
                        <option value="course3">class 3</option>
                        <option value="course4">class 4</option>
                        <option value="course5">class 5</option>
                        <option value="course6">class 6</option>
                        <option value="course7">class 7</option>
                        <option value="course8">class 8</option>
                        <option value="course9">class 9</option>
                        <option value="course10">class 10</option>


                    </select>
                    <button id='myslid4' type="submit">Send Request →</button>
                </div>
            </div>
     
            <section class="text-gray-600 body-font ">
                {/* <div class="container px-5 py-24 mx-auto"> */}

                    <div class=" flex justify-between container cursor-div max-sm:block">
                        {/* <!-- first  --> */}
                        {/* <div class="">
                            <div class="rounded-2xl relative overflow-hidden div-main ">
                                <img alt="gallery" class="rounded-2xl w-96"
                                    src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-landscape-1.jpg" />
                                <div
                                    class="div-sub w-full transition ease-in-out delay-150 z-10 flex-col top-0 right-0 flex items-center justify-center flex-nowrap absolute text-2xl h-full bg-black">
                                    <h1 class="">Canvas Lover</h1>
                                    <br />

                                    <p class="">photografy</p>
                                </div>

                            </div>
                            <br />
                            <div class="pb-4">
                                <div class="rounded-2xl relative overflow-hidden div-main ">
                                    <img alt="gallery" class="rounded-2xl w-96"
                                        src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-portrait-2.jpg" />
                                    <div
                                        class="div-sub w-full transition ease-in-out delay-150 zz-10 flex-col top-0 right-0 flex items-center justify-center flex-nowrap absolute text-2xl h-full bg-black">
                                        <h1 class="">Canvas Lover</h1>
                                        <br />

                                        <p class="">photografy</p>
                                    </div>

                                </div>
                            </div>
                            <div class="pb-4">
                                <div class="rounded-2xl relative overflow-hidden div-main ">
                                    <img alt="gallery" class="rounded-2xl w-96"
                                        src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-landscape-3.jpg" />
                                    <div
                                        class="div-sub w-full transition ease-in-out delay-150 z-10 flex-col top-0 right-0 flex items-center justify-center flex-nowrap absolute text-2xl h-full bg-black">
                                        <h1 class="">Canvas Lover</h1>
                                        <br />

                                        <p class="">photografy</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- second --> */}
                        {/* <div>
                            <div class="pb-4">
                                <div class="rounded-2xl relative overflow-hidden div-main ">
                                    <img alt="gallery" class="rounded-2xl w-96"
                                        src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-portrait-1.jpg" />
                                    <div
                                        class="div-sub w-full transition ease-in-out delay-150 z-10 flex-col top-0 right-0 flex items-center justify-center flex-nowrap absolute text-2xl h-full bg-black">
                                        <h1 class="">Canvas Lover</h1>
                                        <br />

                                        <p class="">photografy</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-4">
                                <div class="rounded-2xl relative overflow-hidden div-main ">
                                    <img alt="gallery" class="rounded-2xl w-96"
                                        src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-portrait-4.jpg" />
                                    <div
                                        class="div-sub w-full transition ease-in-out delay-150 z-10 flex-col top-0 right-0 flex items-center justify-center flex-nowrap absolute text-2xl h-full bg-black">
                                        <h1 class="">Canvas Lover</h1>
                                        <br />

                                        <p class="">photografy</p>
                                    </div>
                                </div>
                            </div>

                        </div> */}
                        {/* <!-- third --> */}
                        {/* <div>
                            <div class="pb-4">
                                <div class="rounded-2xl relative overflow-hidden div-main ">
                                    <img alt="gallery" class="rounded-2xl w-96"
                                        src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-landscape-2.jpg" />
                                    <div
                                        class="div-sub w-full transition ease-in-out delay-150 z-10 flex-col top-0 right-0 flex items-center justify-center flex-nowrap absolute text-2xl h-full bg-black">
                                        <h1 class="">Canvas Lover</h1>
                                        <br />

                                        <p class="">photografy</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-4">
                                <div class="rounded-2xl relative overflow-hidden div-main ">
                                    <img alt="gallery" class="rounded-2xl w-96"
                                        src="https://geniusinfotech.github.io/Shreyas-Vidyalaya/static/media/trusty.d2e8c70e154f879ccda4.png" />
                                    <div
                                        class="div-sub w-full transition ease-in-out delay-150 z-10 flex-col top-0 right-0 flex items-center justify-center flex-nowrap absolute text-2xl h-full bg-black">
                                        <h1 class="">Canvas Lover</h1>
                                        <br />

                                        <p class="">photografy</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-4">
                                <div class="rounded-2xl relative overflow-hidden div-main ">
                                    <img alt="gallery" class="rounded-2xl w-96"
                                        src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/portfolio/project-landscape-4.jpg" />
                                    <div
                                        class="div-sub w-full transition ease-in-out delay-150 z-10 flex-col top-0 right-0 flex items-center justify-center flex-nowrap absolute text-2xl h-full bg-black">
                                        <h1 class="">Canvas Lover</h1>
                                        <br />

                                        <p class="">photografy</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                {/* </div> */}
            </section>
          
           
        </div>
    )
}

export default Form
