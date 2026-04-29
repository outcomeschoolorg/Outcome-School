
import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import StudentReview from "../../../Component/StudentReview";
import two from "../../../assets/images/game.png"
import { Link } from "react-router";


const AdvancedGame = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                            Advanced Game Development
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
                            Level 3 (Weeks 25–36)
                        </p>
                        <p className="italic text-center">
                            (Aligns with: Advanced Game Development + electives like AI in Games, Networking/Multiplayer, 3D Animation/MoCap, UX/UI)
                        </p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed   ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span>  Move from “Good developer” to “production-ready developer” with advanced features.
                                </p>
                                <p className="my-3 font-medium">Choose 2 specialization tracks (recommended)</p>
                                <p>
                                    <p className="font-medium  mb-3">Track A: AI in Games</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>  Behavior trees, utility AI, navigation/pathfinding</li>
                                        <li>Enemy design: readable behaviors + difficulty tuning</li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Track B: Networking & Multiplayer</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> Client/server basics, latency, prediction basics</li>
                                        <li>Lobbies, matchmaking concepts, syncing state safely</li>
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
                                    <p className="font-medium  mb-3">Track D: UX/UI Development</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="">player onboarding, HUD clarity, accessibility consideration</li>
                                        <li> UX playtesting + UI polish pipeline</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Core skills (for everyone)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="">
                                            Advanced physics interactions + feel tuning
                                        </li>
                                        <li>Level/pacing design for engagement</li>
                                        <li>Production pipelines: build automation basics, asset organization, QA routines</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Mindset</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className=""> Player experience is the product </li>
                                        <li>Make features shippable (not just “working”)</li>
                                        <li>Learn to cut scope without killing the fun</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">12-week structure</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className=""><span className="font-medium">Weeks 1–3:</span> advanced gameplay + polishing fundamentals </li>
                                        <li className=""><span className="font-medium">Weeks 4–6:</span>  specialization 1 (AI / multiplayer / 3D / UX) </li>
                                        <li className=""><span className="font-medium">Weeks 7–9:</span> specialization 2</li>
                                        <li className=""><span className="font-medium">Weeks 10–12:</span> integration sprint + playtests + iteration</li>

                                    </ul>
                                </div>
                                
                                <div className="my-5">
                                    <p className="font-medium  mb-1">Portfolio project (ship 1 advanced demo)</p>
                                    <p className="font-medium  mb-3">Pick one:</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className=""><span className="font-medium">3D action prototype</span>  with polished combat + animation </li>
                                        <li className=""><span className="font-medium">Multiplayer mini-game</span>  (2–4 players) </li>
                                        <li className="font-medium">AI-driven stealth/strategy slice</li>
                                        <li className=""><span className="font-medium">Serious game prototype</span>  (education/health/science learning goal)</li>
                                    </ul>
                                </div>
                              
                                <div className="my-5">
                                    <p className="font-medium  mb-1">Exit milestone</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="">You can build advanced features and integrate them cleanly into a game.</li>
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

export default AdvancedGame
