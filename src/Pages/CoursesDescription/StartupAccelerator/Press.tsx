import Footer from "../../../Component/Footer"
import NavBar from "../../../Component/NavBar"
import one from "../../../assets/images/press.png"
import { Link } from "react-router";
import StudentReview from "../../../Component/StudentReview";


const Press = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                            Press + Funding Readiness + Team Leadership
                        </p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed ">
                                <p className=" font-bold mb-3">Weeks 11–12</p>
                                <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                    <li>Press narrative + media outreach + launch assets </li>
                                    <li>How fundraising works + readiness checklist + pitch structure</li>
                                    <li>Team leadership systems and execution cadence</li>
                                    <li> <span className="font-medium">Deliverables:</span>  Press kit, pitch deck draft, fundraising strategy, hiring/role plan, final demo day presentation.
                                    </li>
                                </ul>
                            </div>

                            <div className=" leading-relaxed ">
                                <p className=" font-bold mb-2 text-[20px]">What You Graduate With</p>
                                <p className=" font-medium mb-2">By the end of 12 weeks, your team will have:</p>
                                <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                    <li>A validated customer problem and positioning </li>
                                    <li>A launched MVP with real users (or strong pilot traction)</li>
                                    <li>A KPI system + growth experiment playbook</li>
                                    <li> A pricing and business model direction </li>
                                    <li> A press launch plan + press kit </li>
                                    <li> A funding readiness package (deck + narrative + traction story) </li>
                                    <li> A team operating system (roles, cadence, accountability) </li>
                                </ul>
                            </div>
                            
                            <div className=" leading-relaxed ">
                                <p className=" font-bold mb-2 text-[20px]">Course Requirements for Completion</p>
                                <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                    <li>Attend at least 80% of sessions </li>
                                    <li>Submit weekly deliverables (proof of progress)</li>
                                    <li>Conduct weekly user/customer conversations</li>
                                    <li> Demo a working MVP (or measurable traction) at the end </li>
                                </ul>
                            </div>
                            
                            <div className=" leading-relaxed ">
                                <p className=" font-bold mb-2 text-[20px]">Apply (Course Entry)</p>
                                <p className=" mb-2">To apply, submit:</p>
                                <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                    <li>Team members + roles (who owns business/distribution vs engineering/product) </li>
                                    <li>One-liner describing the startup (1–2 sentences)</li>
                                    <li>Proof of traction (demo/users/revenue/pilot)</li>
                                    <li> Full-time commitment plan </li>
                                    <li> What your biggest challenge is (MVP, users, growth, funding, team). </li>
                                </ul>
                            </div>

                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={one} alt="Programming" className="mx-auto items-center justify-center object-cover w-[502px] lg:h-[702px] rounded-[20px] " />
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

export default Press
