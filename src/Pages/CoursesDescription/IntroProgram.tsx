import Footer from "../../Component/Footer"
import NavBar from "../../Component/NavBar"
import one from "../../assets/images/06.svg"
import { Link } from "react-router";
import StudentReview from "../../Component/StudentReview";


const IntroProgram = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                    <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                        Introduction to Programming (HTML/CSS + JavaScript Foundations)
                    </p>
                    <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">Level 1 - Beginner</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed    ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span> Build responsive websites and interactive pages confidently.
                                </p>
                                <p>
                                    <p className="font-medium  mb-3">Learn</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>  HTML: semantic structure, forms, accessibility basics</li>
                                        <li>CSS: box model, flexbox, grid, responsive design, media queries</li>
                                        <li>JavaScript: variables, functions, loops, arrays/objects, DOM, events</li>
                                        <li>Debugging: Chrome DevTools, console, breakpoints</li>
                                        <li>Git + GitHub: push projects, version control basics</li>
                                        <li>Hosting: GitHub Pages / Netlify</li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Portfolio projects (build 3)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>   Responsive Business Website (home, about, services, contact form UI)</li>
                                        <li>Interactive Landing Page (FAQ accordion, modal, navbar, smooth scroll)</li>
                                        <li>Mini App Bundle (to-do list, calculator, quiz, weather UI)</li>
                                    </ul>
                                </p>
                                <p className="">
                                    <p className="font-medium  mb-3">Level 1 milestone</p>
                                    <p className="font-regular">
                                        You can build a responsive website from scratch and add interactivity with vanilla JS.
                                    </p>

                                </p>

                            </div>

                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={one} alt="Programming" className=" object-cover w-[502px] h-[502px] rounded-[20px] " />

                        </div>
                    </div>

                </div>
            </div>
<StudentReview/>


 {/* <div className="bg-white">
        <div className="container px-10 pt-[2em] lg:py-10 mx-auto items-center ">
          <p className="text-[45px] font-bold text-center lg:text-start">
            Hear from our students!
          </p>

          <div>
            <p className="flex flex-row justify-between my-5 items-center justify-center gap-10">
              <hr className="text-[#DAD8FC] border border-[#DAD8FC] w-full " />
              <img src={mark} alt="mark" className="w-100" />
              <hr className="text-[#DAD8FC] border border-[#DAD8FC] w-full " />
            </p>

            <div className="flex flex-col lg:flex-row  my-5 items-center justify-center gap-8">
              <div>
                <img src={newIcon} alt="mark" className="w-[100%] rounded-full " />
              </div>

              <div>
                <p className="text text-[22px] font-bold">
                  Jordache Wilson
                </p>
                <p className="text-[16px] font-medium">
                  “Outcome School’s Python class is well structured and thoughtfully led, creating a strong learning environment. Dr. Powell steers the ship with clear direction and control, while Hrishikash brings deep technical knowledge and consistently pushes the class to perform at a higher level. Pushpa plays a key moderating role, providing timely assistance and support where needed to ensure everyone stays on track.”
                </p>
              </div>

            </div>
          </div>

          <div>
            <p className="flex flex-row justify-between my-5 items-center justify-center gap-10">
              <hr className="text-[#DAD8FC] border border-[#DAD8FC] w-full " />
              <img src={mark} alt="mark" className="w-100" />
              <hr className="text-[#DAD8FC] border border-[#DAD8FC] w-full " />
            </p>

            <div className="flex flex-col lg:flex-row  my-5 items-center justify-center gap-8">


              <div>
                <p className="text text-right text-[22px] font-bold">
                  Justin H
                </p>
                <p className="text-[16px] font-medium text-right">
                  “The instructors are really nice and give enough feedback/information in class. They are also willing to help outside of class if you have questions regarding your assignments or about UI/UX Design in general.”
                </p>
              </div>

              <div>
                <img src={newIco} alt="mark" className="w-[70%]  rounded-full " />
              </div>

            </div>
          </div>
        </div>
      </div> */}

      <div className="pb-10">
        <div className="bg-[#5D7BF380] rounded-[20px] container flex flex-col py-10 gap-4 px-10 mx-auto items-center  ">
          <p className="font-extrabold  text-[45px] text-center">
            Ready to Take the Next Step?
          </p>
          <Link to="/application-process">
          <button type="button" className="background rounded-[999px] py-4 lg:py-6 px-7 lg:px-9 mx-auto text-white font-semibold text-[16px]">
            Go to the Application Process
          </button>
          </Link>
        </div>
      </div>

      <Footer />


        </>
    )
}

export default IntroProgram
