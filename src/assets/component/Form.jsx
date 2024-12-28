import React from 'react'
import './Form.css'
function Form() {
    return (
        <div>
            <div className="form-container1">
                <div>

                </div>
                <div className="form-header1">
                    Sign up for a free trial lesson by <span className="highlighttt1"> Zoom</span>
                </div>
                <div className="form-body1">
                    <p>Fill out the form below to schedule your free trial lesson.</p>
                    <input type="text" placeholder="Your name" required />
                    <input type="email" placeholder="Email address" required />
                    <select required>
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
                    <button type="submit">Send Request →</button>
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
