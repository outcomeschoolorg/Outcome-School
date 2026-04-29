import Footer from "../Component/Footer"
import NavBar from "../Component/NavBar"
import first from "../assets/images/first.svg"
import two from "../assets/images/two.svg"
import instructor from "../assets/images/instructor.svg"
import Cmentor from "../assets/images/Cmentor.svg"
import careermentor from "../assets/images/careermentor.svg"
import Program from "../assets/images/Program.svg"
import Software from "../assets/images/Software.svg"
import UX from "../assets/images/UX.svg"
import coma from "../assets/images/coma.svg"
import will from "../assets/images/mentor.png"
import vv from "../assets/images/Beige.jpg"
import { Link } from "react-router"


const VolunteerOpportunity = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
                    <p className="text-black text-center font-extrabold text-[45px] mb-8">
                        Volunteering Opportunities
                    </p>
                    <p className="font-bold mb-3">
                        Help us change the face of the tech industry.
                    </p>
                    <p className="mb-3">
                        Outcome School is building a more inclusive tech future—one learner, one cohort, and one life-changing opportunity at a time. Our volunteer community makes that possible.
                    </p>

                    <div className="my-5">
                        <p className="mb-3">
                            We welcome volunteers across many disciplines, especially professionals with experience in our learning tracks and tech stack, including:.
                        </p>
                        <p>
                            <ul className="list-disc ml-5">
                                <li className="mb-3"> Ruby on Rails, React.js, Python, Node.js.</li>
                                <li className="mb-3">Cybersecurity Engineering.</li>
                                <li className="mb-3">AI Engineering.</li>
                                <li className="mb-3">Game Development</li>
                                <li className="mb-3">UX/UI Design & Product Management</li>
                                <li className="mb-3">Robotics Engineering</li>
                                <li className="mb-3">Software Engineering</li>
                            </ul>
                        </p>
                        <p className=" my-4">
                            Our volunteers don’t just teach—they build relationships, inspire confidence, and help learners grow into job-ready professionals.
                        </p>

                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-3 my-5">
                        <img src={first} alt="one" className="w-100" />
                        <img src={two} alt="one" className="w-100" />
                    </div>

                    <div className="mt-8 mb-5">
                        <p className="text-[28px] font-bold mb-3">Who Should Volunteer?</p>
                        <p className="mb-3">Consider joining us if you are:</p>
                        <ul className="list-decimal ml-5">
                            <li className="mb-3">  An experienced developer who wants to increase diversity in tech.</li>
                            <li className="mb-3">A tech leader involved in hiring who wants to support a stronger, more equitable talent pipeline.</li>
                            <li className="mb-3">A recent bootcamp graduate who wants to sharpen skills and gain experience by supporting new learners.</li>
                        </ul>
                        <p className="mb-3">All volunteer roles can be done <span className="font-bold">remotely</span>.</p>
                    </div>

                    <div className="mt-10 mb-5">
                        <p className="text-[28px] font-bold mb-3">Individual Volunteer Roles</p>
                        <p className="mb-3 font-medium">
                            <span className="text-[#6036E1]">Time Commitment:</span> 1–3 hours per week
                        </p>
                        <p className="mb-3 font-medium">
                            <span className="text-[#6036E1]">Minimum Commitment:</span> 3 months
                        </p>

                        <div className="my-5 flex flex-col lg:flex-row items-center shadow-2xl py-6 px-8 rounded-[20px] justify-between gap-4">
                            <div>
                                <img src={instructor} alt="developer" className="w-full " />
                                <p className="text-[22px] font-bold text-center">Instructor</p>
                            </div>
                            <p className="lg:w-[60%]">
                                Our instructors are seasoned industry professionals who volunteer their time to support your learning journey. They help students build real skills across AI engineering, software engineering, UX/UI design and product management, robotics engineering, game development, cybersecurity, tech soft skills program, and even our startup accelerator program. Through structured live video sessions, clear interactive slides, and a highly engaging teaching style, instructors make complex topics accessible and practical. They lead live lessons, break down core concepts, demonstrate real-world techniques, and guide students step‑by‑step as they build products that become part of their professional portfolio.
                            </p>
                        </div>

                        <div className="my-5 flex flex-col lg:flex-row items-center shadow-2xl py-6 px-8 rounded-[20px] justify-between gap-4">
                            <div>
                                <img src={Cmentor} alt="developer" className="w-full " />
                                <p className="text-[22px] font-bold text-center">Career Mentor</p>
                            </div>
                            <p className="lg:w-[60%]">
                                Career Mentors support students in one‑on‑one or small‑group settings as they prepare for careers in tech. They assist with product design, pitch-deck, product research, stakeholder management, resumes, LinkedIn profiles, interview preparation, job search strategies, and building confidence for remote and tech‑enabled roles. Our Career Mentors bring years of industry experience and volunteer their expertise to guide trainees through the transition into the workforce. Each mentor is paired with a trainee and meets with them regularly to offer personalized guidance, constructive feedback, and professional connections that strengthen their job search. To ensure fairness and access for all students, each trainee may meet with their Career Mentor up to two times per month.
                            </p>
                        </div>

                        <div className="my-5 flex flex-col lg:flex-row items-center shadow-2xl py-6 px-8 rounded-[20px] justify-between gap-4">
                            <div>
                                <img src={careermentor} alt="developer" className="w-full " />
                                <p className="text-[22px] font-bold text-center">Class Mentor</p>
                            </div>
                            <p className="lg:w-[60%]">
                                Serve as a consistent support system within a cohort. Class mentors answer questions, encourage participation, help students stay on track, and create a positive learning environment rooted in accountability and motivation. 1:1 Mentors & Reviewers Our 1:1 Mentors and Reviewers are paired with a small group of 1–3 Outcome School students. They meet with students individually during scheduled sessions to answer questions, help them overcome blockers, and guide them through their learning journey. Mentors also review assignments and provide thoughtful, constructive feedback to support skill growth. Experienced mentors may also host weekly office hours for small groups of up to five students, creating an open space for deeper discussion, problem‑solving, and community support.
                            </p>
                        </div>
                        <div className="my-5 flex flex-col lg:flex-row items-center shadow-2xl py-6 px-8 rounded-[20px] justify-between gap-4">
                            <div>
                                <img src={Program} alt="developer" className="w-full " />
                                <p className="text-[22px] font-bold text-center">Program Manager</p>
                            </div>
                            <p className="lg:w-[60%]">
                                Ensure each cohort runs smoothly. Program managers coordinate schedules, communicate updates to students and instructors, track progress, and help deliver an organized, high-quality learner experience.
                            </p>
                        </div>
                        <div className="my-5 flex flex-col lg:flex-row items-center shadow-2xl py-6 px-8 rounded-[20px] justify-between gap-4">
                            <div>
                                <img src={Software} alt="developer" className="w-full " />
                                <p className="text-[22px] font-bold text-center">Software Developer</p>
                            </div>
                            <p className="lg:w-[60%]">
                                Contribute your technical expertise to improve Outcome School’s tools and platforms. Developers may build new features, fix bugs, streamline internal workflows, or support student projects through code reviews and guidance.
                            </p>
                        </div>
                        <div className="my-5 flex flex-col lg:flex-row items-center shadow-2xl py-6 px-8 rounded-[20px] justify-between gap-4">
                            <div>
                                <img src={UX} alt="developer" className="w-full " />
                                <p className="text-[22px] font-bold text-center">UX Designer</p>
                            </div>
                            <p className="lg:w-[60%]">
                                Help improve the experience across Outcome School’s website, learning content, and digital tools. UX designers work on wireframes, prototypes, user flows, and UI enhancements to make learning more intuitive and engaging.
                            </p>
                        </div>

                    </div>

                    <div className="mt-10 mb-5">
                        <p className="text-[28px] font-bold mb-3">Group Volunteer Opportunities (Companies & Teams)</p>
                        <p className="mb-3">Organizations and groups of volunteers can support Outcome School by hosting:</p>
                        <ul className="list-decimal ml-5">
                            <li className="mb-3">   Mock interviews.</li>
                            <li className="mb-3">Panel discussions.</li>
                            <li className="mb-3">Company tours</li>
                            <li className="mb-3">Days of service with our apprentices</li>
                        </ul>
                        <p className="mb-3">Group events are often held on Fridays, but we can be flexible depending on your schedule.</p>
                        <p className="mb-3">To plan a group volunteer event, please visit our Employer Partnerships page.</p>
                    </div>  

                    <div className="mt-10 mb-5">
                        <p className="text-[45px] font-extrabold">Voices of Volunteers</p>
                        <div className="mt-8 mb-5 flex flex-row gap-5 items-center justify-center">
                            <hr className="border-b-2 border-[#DAD8FC] w-full" />
                            <img src={coma} alt="coma" className="w-100" />
                            <hr className="border-b-2 border-[#DAD8FC] w-full" />
                        </div>
                        <div className="my-5 flex flex-col lg:flex-row gap-5 items-center justify-center">
                            <img src={will} alt="will" className="w-100 rounded-full" />
                            <div>
                                <p className="text font-bold text-[22px]">Jacqueline Koerner, Instructor, Product Design/Management.</p>
                                <p className="font-medium">"I partner with Outcome School to help students break into tech. The team is human‑centered, supportive, and mission‑driven, making every moment deeply meaningful."
                                </p>
                            </div>
                        </div>
                            <hr className="mt-8 border-b-2 border-[#DAD8FC] w-full" />
                    </div>

                    <div className="mt-10 mb-5">
                        <p className="text-[28px] font-bold mb-3">Become a Volunteer</p>
                        <p className="mb-3">We’d love for you to join our volunteer community. Getting started is easy:</p>
                        <ul className="list-decimal ml-5">
                            <li className="mb-3">  Complete our volunteer application.</li>
                            <li className="mb-3">After submitting, you’ll receive a link to schedule a brief intro call with our team.</li>
                            <li className="mb-3">During the call, we’ll learn about your interests and match you with the best current opportunity</li>
                        </ul>
                    </div>

                    <div className="mt-8 mb-5">
                        <p className="text-[45px] text-center font-extrabold pt-10 mb-5">Volunteer Spotlight</p>
                          
                            <p className="font-bold text-[20px]">March 15, 2026, Volunteer Duo of the Month.</p>
                            <p className="font-medium mt-1">
                                This March! Meet the dynamic women who designed our new website. we’re celebrating Angela Le and Vianey Mursio, the talented UX/UI designers behind Outcome School’s simplified user experience. Their collaboration, design‑thinking mindset, and commitment to excellence shaped every step of the project. Working late nights, problem‑solving creatively, and staying aligned with our mission, they delivered a beautiful, user‑centered website on time and within budget. Their dedication reflects the heart of Outcome School, thoughtful design, teamwork, and impact-driven work that elevates our students and community.
                            </p>
                            <img src={vv} alt="will" className="w-100 my-10 mx-auto text-center" />
                    </div>

                    {/* <div className="background text-white text-center mx-auto mt-10 ">
                        <p className="text-[45px] font-extrabold pt-10 mb-3">Volunteer Spotlight</p>
                        <p className="text-[18px] font-semibold">Volunteer of the Month</p>
                            <img src={will} alt="will" className="w-100 my-10 mx-auto text-center" />
                        <p className="text-[16px] font-bold mb-5 px-3 lg:px-0">April 8, 2026 — Meet Jane Doe, Volunteer of the Month!</p>
                        <p className="text-[16px] font-medium px-3 lg:px-0">
                             This March, we’re recognizing Jane Doe, who transitioned from performing arts into programming and now mentors new coders at Outcome School.
                             </p>
                        <p className="text-[16px] font-medium pb-10 px-3 lg:px-0">
                              Students describe Jane as kind, clear, and thoughtful—and Jane says the human connection is what keeps them coming back.
                             </p>

                    </div> */}

                   <div className="flex mx-auto text-center items-center justify-center my-10">
                        <div>
                            <p className="text-center mt-5 text-[28px] font-bold">Ready to Join Us?</p>
                            <p className="lg:w-[60%] mx-auto my-5 text-center">
                                Become a part of the Outcome School volunteer community and help us build a more inclusive and empowered future, one learner at a time.
                            </p>
                            <Link to="/volunteer-form">
                            <button className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] text-white rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-6 py-4 hover:text-[#6036E1] font-medium text-[18px] hover:bg-white">
                                <i className="fa-solid fa-book mr-3"></i>
                                    Apply Now!
                            </button>
                            </Link>
                        </div>

                    </div>




                </div>

            </div>

            <Footer />
        </>
    )
}

export default VolunteerOpportunity
