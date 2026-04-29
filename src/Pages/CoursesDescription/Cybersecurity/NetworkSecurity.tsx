import Footer from "../../../Component/Footer"
import NavBar from "../../../Component/NavBar"
import one from "../../../assets/images/network.png"
import { Link } from "react-router";
import StudentReview from "../../../Component/StudentReview";


const NetworkSecurity = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                            Network + Security
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">Level 2 (Weeks 13–24)</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed    ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span>  Validate the network design/config/troubleshooting skills and security knowledge that employers expect for entry security roles.
                                </p>
                                <p>
                                    <p className="font-medium  mb-3">What you learn (skills + knowledge)</p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>Network design basics: segmentation, VLAN concepts, routing, NAT concepts</li>
                                        <li>Configuration management: backups, change tracking, baselines, documentation</li>
                                        <li>Troubleshooting: connectivity, DNS failures, latency, packet loss, misconfigurations</li>
                                        <li>Security across networks: secure protocols, firewall rules concepts, VPN concepts, secure Wi-Fi fundamentals</li>
                                        <li>Identity & access: access controls, password policy, role-based access</li>
                                        <li>Intro SOC thinking: what “normal” looks like, basic alert triage</li>

                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Mindset</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> “Most breaches start with misconfigurations and weak basics.”</li>
                                        <li>Be systematic: isolate the layer, test, confirm, fix, retest.</li>
                                    </ul>
                                </p>

                                <p className="my-5">
                                    <p className="font-medium  mb-3">Labs + portfolio deliverables</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>
                                            Design a small business network (segmentation + basic security controls)
                                        </li>
                                        <li>
                                            Build a network troubleshooting playbook
                                        </li>
                                        <li>
                                            Create a baseline hardening checklist for Windows/Linux
                                        </li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Level 2 outcomes</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>You have the core knowledge required of cybersecurity professionals and the practical skills needed to qualify for entry roles in information security.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={one} alt="Programming" className="mx-auto items-center justify-center object-cover w-[502px] lg:h-[602px] rounded-[20px] " />

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

export default NetworkSecurity
