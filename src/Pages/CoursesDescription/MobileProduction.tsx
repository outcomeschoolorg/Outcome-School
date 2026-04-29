import Footer from "../../Component/Footer"
import NavBar from "../../Component/NavBar"
import two from "../../assets/images/08.svg"
import { Link } from "react-router";
import StudentReview from "../../Component/StudentReview";


const MobileProduction = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                            Mobile + Production Engineering (Scale, Architecture, Real-World Readiness)
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">Level 4 — Expert</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed   ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span> Build and ship mobile apps + production-ready systems like an engineer.
                                </p>
                                <p className="font-bold">Mobile track (recommended).</p>
                                <p>
                                    <p className="font-medium  mb-3">Learn</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>  React Native (or Flutter if you prefer)
                                            <ul className="list-decimal">
                                                <li>navigation, forms, local storage</li>
                                                <li>camera, maps, push notifications (intro)</li>
                                            </ul>
                                        </li>
                                        <li>API integration: secure token storage, refresh tokens</li>
                                        <li>Mobile release basics: builds, app signing, store submission overview</li>
                                    </ul>
                                </p>
                                <p className="font-bold text-[18px] mb-3">Production Engineering</p>
                                <p className="my-3">
                                    <p className="font-medium  mb-3">Learn</p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>  TypeScript (highly recommended for expert level)</li>
                                        <li>Architecture: clean folder structure, reusable services, design patterns</li>
                                        <li>Testing: unit + integration + end-to-end (Playwright/Cypress)</li>
                                        <li>CI/CD basics: GitHub Actions, linting, test pipelines</li>
                                        <li>Scaling fundamentals: background jobs/queues, websockets, caching, CDN</li>
                                        <li>Security: OWASP basics, secure auth flows, CORS, rate limiting</li>
                                        <li>Monitoring: logs, error tracking, performance monitoring</li>

                                    </ul>
                                </p>
                                <p className="">
                                    <p className="font-medium  mb-3">Expert capstone (must-have)
                                        Build a “real product” with web + mobile:</p>
                                    <p className="font-regular">
                                        <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                            <li>Web Admin Dashboard (React/Next.js)</li>
                                            <li>Mobile App (React Native)</li>
                                            <li>Backend API + Database (Node/Express or Next API routes)</li>
                                            <li>Features:
                                                <ul className="ml-3 list-dicsc">
                                                    <li>Auth + roles (admin/user)</li>
                                                    <li>Payments or subscriptions (optional but powerful)</li>
                                                    <li>Notifications (email/push)</li>
                                                    <li>File uploads</li>
                                                    <li>Analytics dashboard</li>
                                                </ul>
                                            </li>
                                            <li>Deploy everything and record a demo.</li>
                                        </ul>
                                    </p>
                                </p>
                                <div className="my-3">
                                    <p className="font-medium mb-3">Level 4 milestone</p>
                                    <ul className="ml-4 list-disc">
                                        <li>You can build, deploy, test, and maintain a web + mobile product with professional practices.</li>
                                    </ul>
                                </div>

                                <div className="my-3">
                                    <p className="font-medium mb-3">Minimum Portfolio (to look job-ready)</p>
                                    <p>Aim for 6 solid projects:</p>
                                    <ul className="ml-4 list-decimal">
                                        <li> Responsive website (HTML/CSS) </li>
                                        <li> Vanilla JS interactive app</li>
                                        <li> React API dashboard</li>
                                        <li>E-commerce front-end</li>
                                        <li>
                                            Full-stack CRUD app with auth + DBWeb + mobile capstone (deployed)
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={two} alt="Programming" className=" object-cover w-[502px] lg:h-[1002px] rounded-[20px] " />

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

export default MobileProduction
