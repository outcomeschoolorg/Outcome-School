import Footer from "../../../Component/Footer"
import NavBar from "../../../Component/NavBar"
import one from "../../../assets/images/technology.png"
import { Link } from "react-router";
import StudentReview from "../../../Component/StudentReview";


const IntroTechnology = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                              Introduction to Information Technology
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">Level 1 (Weeks 1–12)</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed    ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span> Build the core knowledge every cybersecurity professional needs: computing, hardware/software, operating systems, networking basics, and security fundamentals.
                                </p>
                                <p>
                                    <p className="font-medium  mb-3">What you learn (skills + fundamentals)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>  Computing basics: CPU/RAM/storage, filesystems, processes</li>
                                        <li>Operating systems: Windows + Linux fundamentals, users/permissions</li>
                                        <li> Networking basics: IP addressing, DNS, DHCP, routing/switching concepts</li>
                                        <li>Security fundamentals: CIA triad, authentication, MFA, least privilege, basic risk thinking</li>
                                        <li>Virtualization & mobile basics: VMs/virtual networks, mobile device security basics</li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Mindset to develop</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> “Understand the system before you secure it.” </li>
                                        <li>Document everything, verify assumptions, and think in layers (defense-in-depth)</li>
                                    </ul>
                                </p>
                                
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Hands-on labs (safe + beginner-friendly)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>Build a home lab using virtualization (create Windows + Linux VMs) </li>
                                        <li>Practice: user permissions, firewall basics, basic packet inspection</li>
                                        <li>Write short documentation like a real IT/security tech</li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Level 1 outcomes</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>You can explain how systems connect, where attacks happen, and how basic defenses work. </li>
                                    </ul>
                                </p>

                            </div>

                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={one} alt="Programming" className="mx-auto items-center justify-center object-cover w-[502px] lg:h-[902px] rounded-[20px] " />

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

export default IntroTechnology
