
import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import StudentReview from "../../../Component/StudentReview";
import two from "../../../assets/images/development.png"
import { Link } from "react-router";


const GameProgramming = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                            Game Programming
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
                            Level 2 (Weeks 13–24)
                        </p>
                        <p className="italic text-center">(Aligns with: Programming for Game Development + Software Engineering & Systems for Game Development)</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed   ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span> Become a reliable gameplay programmer who can build clean systems, not spaghetti code.
                                </p>
                                <p>
                                    <p className="font-medium  mb-3">Skills</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> Strong programming foundations for games:
                                            <ul className="list-decimal ml-4">
                                                <li>vectors, transforms, state machines</li>
                                                <li>events, components, prefabs, scene management</li>
                                            </ul>
                                        </li>
                                        <li>Game architecture:
                                            <ul className="ml-4 list-decimal">
                                                <li>entity-component patterns</li>
                                                <li>scriptable data / configuration</li>
                                                <li>modular systems (combat, inventory, dialogue)</li>
                                            </ul>
                                        </li>
                                        <li>Debugging & optimization basics:
                                            <ul className="ml-4 list-decimal">
                                                <li>profiling, memory/performance habits</li>
                                            </ul>
                                        </li>
                                        <li>Team workflows:
                                            <ul className="ml-4 list-decimal">
                                                <li>branching, pull requests, code reviews</li>
                                                <li>task tracking and sprint planning basics</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Knowledge </p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> How engines structure games (update loops, fixed timestep, physics ticks)</li>
                                        <li>Why “systems thinking” matters in production</li>
                                    </ul>
                                </p>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Mindset</p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="font-medium"> Build reusable systems</li>
                                        <li>Design for iteration (design will change—your code must survive it)</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">12-week studio-like structure</p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className=""><span className="font-medium"> Weeks 1–3: </span> deeper programming patterns (states, events, data-driven design)</li>
                                        <li> <span className="font-medium">Weeks 4–6:</span>  core systems build (inventory/abilities/dialogue/AI lite)</li>
                                        <li><span className="font-medium">Weeks 7–9:</span>  tools & pipelines (save/load, settings, input remapping)</li>
                                        <li><span className="font-medium">Weeks 10–12:</span>  performance + bug fixing + “productionization” sprint</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Portfolio project (ship 1 big system-heavy game)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="">
                                            <span className="font-medium"> Vertical Slice Game </span> (10–15 minutes):
                                            <ul className="list-decimal">
                                                <li>menus + save/load + progression</li>
                                                <li>at least 3 systems (combat + inventory + AI, or dialogue + quests + crafting)</li>
                                                <li>clean repo + documentation</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <p className="my-5 font-medium">Exit milestone</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>You can build systems that scale with a team.</li>

                                    </ul>
                                </div>


                            </div>

                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={two} alt="Programming" className=" mx-auto items-center justify-center object-cover w-[502px] lg:h-[602px] rounded-[20px] " />

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

export default GameProgramming
