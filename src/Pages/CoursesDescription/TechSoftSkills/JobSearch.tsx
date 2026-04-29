import Footer from "../../../Component/Footer"
import NavBar from "../../../Component/NavBar"
import one from "../../../assets/images/job.png"
import { Link } from "react-router";
import StudentReview from "../../../Component/StudentReview";


const JobSearch  = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                          Job Search Readiness + Mock Interview + Final Polish
                        </p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed    ">

                                <p>
                        <p className=" font-bold mb-3">Weeks 11–12</p>
                                    <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>Resume bullet upgrades (impact-focused)</li>
                                        <li>Interview practice (behavioral + “tell me about a time…”)</li>
                                        <li>Portfolio storytelling: what you built, why it matters, results</li>
                                        <li>Personal brand: confident, clear, and credible</li>
                                        <li> <span className="font-medium">Deliverables (Final Pack):</span> <br/>
                                         <ul className="list-decimal ml-3">
                                                <li>6–8 polished STAR stories</li>
                                                <li>Updated resume bullets (impact-based)</li>
                                                <li>Updated portfolio case study outline</li>
                                                <li>Final mock interview score + improvement plan</li>
                                         </ul>
                                        </li>
                                    </ul>
                                </p>

                            </div>
                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={one} alt="Programming" className="mx-auto items-center justify-center object-cover w-full h-[302px] rounded-[20px] " />
                        </div>
                    </div>

                </div>
            </div>
            <StudentReview />


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

export default JobSearch 
