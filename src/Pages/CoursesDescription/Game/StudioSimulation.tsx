
import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import StudentReview from "../../../Component/StudentReview";
import two from "../../../assets/images/studio.png"
import { Link } from "react-router";


const StudioSimulation = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                            Studio Simulation
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
                            Level 4 (Weeks 37–48)
                        </p>
                        <p className="italic text-center">
                            (Aligns with: Game Development Capstone + “replicate a studio environment”)
                        </p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed   ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span>  Operate like a studio team and ship a game that looks hireable.
                                </p>
                                <p>
                                    <p className="font-medium  mb-3">Skills (full-stack game dev)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> Production planning: milestones, scope control, sprint cadence</li>
                                        <li>Quality: bug tracking, playtest loops, performance targets</li>
                                        <li>Polish: VFX, juice, audio design, accessibility, onboarding</li>
                                        <li>Release: builds, store page assets, trailer, patching workflow</li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Knowledge</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>Publishing pipeline:
                                            <ul className="list-decimal ml-3">
                                                <li>store requirements, builds, QA, marketing basics</li>
                                            </ul>
                                        </li>
                                        <li>Career strategy:
                                            <ul className="list-decimal ml-3">
                                                <li>portfolio packaging, case studies, interviews</li>
                                            </ul>
                                        </li>

                                    </ul>
                                </p>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Track C: 3D + Animation</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="font-medium"> 3D movement, camera rigs, animation state machines</li>
                                        <li>Blending, IK basics, mocap pipeline awareness</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Mindset</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="">Ship - hype</li>
                                        <li> A “finished” game beats a “perfect” prototype</li>
                                        <li>Build with constraints like real studios</li>
                                    </ul>
                                </div>

                                 <div className="my-5">
                                    <p className="font-medium  mb-3">12-week structure (capstone)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className=""><span className="font-medium">Weeks 1–2: </span> Pitch + design pillars + production plan </li>
                                        <li className=""><span className="font-medium">Weeks 3–6:</span> Vertical slice (core loop locked) </li>
                                        <li className=""><span className="font-medium">Weeks 7–9:</span>  content expansion + systems hardening</li>
                                        <li className=""><span className="font-medium">Weeks 10–12:</span>  polish + launch assets + publish-ready build</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Capstone deliverables (must-have)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className=""> Playable build (PC/Web/Mobile) </li>
                                        <li>Steam/itch.io style page assets (screenshots, description, trailer)</li>
                                        <li>Postmortem document (what worked, what failed, what you’d do next)</li>
                                        <li>Team repo with clear roles + commit history</li>
                                    </ul>
                                </div>


                                <div className="my-5">
                                    <p className="font-medium  mb-1">Exit milestone</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="">You graduate with a game you can confidently show recruiters, studios, or users.</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-1">Suggested “Electives Menu” (plug into Level 3–4)</p>
                                    <p className="  mb-1">Use these to match AAA/Indie/Serious Games goals:</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="">
                                            Game Engine & Tools Development (editor tools, pipelines)
                                        </li>
                                        <li className="">AI in Games (behavior trees, navmesh)</li>
                                        <li className="">Networking/Multiplayer</li>
                                        <li className="">3D Animation & MoCap</li>
                                        <li className="">VR/AR + Immersive Design</li>
                                        <li className="">UX/UI Development + accessibility</li>
                                        <li className="">Serious Games (education/health/science)</li>
                                        <li className="">Mobile Game Development</li>
                                    
                                    </ul>
                                </div>
                               
                                <div className="my-5">
                                    <p className="font-medium  mb-1">Minimum Portfolio by the end (to look job-ready)</p>
                                    <p className="  mb-1">You should have:</p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="">
                                           3 small shipped games (Level 1)
                                        </li>
                                        <li className="">1 system-heavy vertical slice (Level 2)</li>
                                        <li className="">1 advanced specialization demo (Level 3)</li>
                                        <li className="">1 publishing-ready capstone (Level 4)</li>
                                    </ul>
                                </div>


                            </div>

                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={two} alt="Programming" className=" object-cover w-[502px] lg:h-[902px] rounded-[20px] " />

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

export default StudioSimulation
