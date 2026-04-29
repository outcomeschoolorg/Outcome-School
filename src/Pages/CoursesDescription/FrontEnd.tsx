import Footer from "../../Component/Footer"
import NavBar from "../../Component/NavBar"
import two from "../../assets/images/09.png"
import { Link } from "react-router";
import StudentReview from "../../Component/StudentReview";


const FrontEnd = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                           Front-End Development (Modern UI + APIs)
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">Level 2 — Intermediate</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed   ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span> Build real front-end apps that consume APIs and manage state cleanly.
                                </p>
                                <p>
                                    <p className="font-medium  mb-3">Learn</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>  Advanced JS: ES6+, modules, async/await, promises</li>
                                        <li>API consumption: fetch, REST, handling errors/loading states</li>
                                        <li>State & architecture: component thinking, separation of concerns</li>
                                        <li>UI patterns: routing basics, pagination, filtering, search</li>
                                        <li>Testing basics: simple unit tests (Jest) + debugging workflows</li>
                                        <li>Tooling: npm, Vite, bundlers, environment variables</li>
                                        <li>Framework: React (recommended) or Vue
                                            <ul className="list-decimal ml-4">
                                                <li>components, props/state, hooks, forms, controlled inputs</li>
                                                <li>routing (React Router)</li>
                                                <li>data fetching patterns</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Portfolio projects (build 2)</p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>   Dashboard App (login UI, protected routes, API data table, filters, charts)</li>
                                        <li>E-commerce Frontend (products, cart, checkout UI, search, category filters)</li>
                                    </ul>
                                </p>
                                <p className="">
                                    <p className="font-medium  mb-3">Level 2 milestone</p>
                                    <p className="font-regular">
                                        You can build a multi-page front-end app with routing, reusable components, and API integration.
                                    </p>

                                </p>

                            </div>

                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={two} alt="Programming" className=" object-cover w-[502px] h-[502px] rounded-[20px] " />

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

export default FrontEnd
