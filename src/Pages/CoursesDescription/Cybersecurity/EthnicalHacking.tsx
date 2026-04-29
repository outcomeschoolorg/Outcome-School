import Footer from "../../../Component/Footer"
import NavBar from "../../../Component/NavBar"
import one from "../../../assets/images/ethnical.png"
import { Link } from "react-router";
import StudentReview from "../../../Component/StudentReview";


const EthnicalHacking = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                            Ethical Hacking
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">Level 4 (Weeks 37–48)</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed    ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span> Become “job-ready expert” by specializing and shipping a full, realistic capstone. This level blends:
                                </p>
                                <p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>Network security</li>
                                        <li>Ethical hacking / penetration testing</li>
                                        <li>Security operations + incident response</li>
                                        <li>Reporting + communication</li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-1">Choose 1 primary track + 1 secondary track</p>
                                    <p className="font-medium  mb-3">Track A — Offensive Security (Ethical Hacking / Pen Testing)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> Recon methodology (legal lab), threat modeling, safe testing workflow</li>
                                        <li>
                                            Web/app testing concepts, basic privilege boundaries, reporting for executives
                                        </li>
                                    </ul>
                                </p>

                                <p className="my-5">
                                    <p className="font-medium  mb-3">Track B — Defensive Security (SOC / Detection Engineering)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>
                                            Alert triage, tuning, correlation, building detection coverage
                                        </li>
                                        <li>
                                            “Purple team” mindset: convert attacker behaviors into detections
                                        </li>
                                    </ul>
                                </p>
                                <div className="my-5">
                                    <p className="font-medium  mb-3">Track C — DFIR (Incident Response / Forensics)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>Triage playbooks, containment strategy, evidence preservation, post-incident reporting.
                                        </li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Track D — Application & Cloud Security (Optional if you want product focus)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>Secure SDLC basics, threat modeling, IAM concepts, misconfiguration prevention.
                                        </li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Mindset</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li className="font-medium"> “Security is outcomes + evidence + repeatability.” </li>
                                        <li> You’re not done when you find a problem—you’re done when you can prove it, fix it, and prevent it.</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-1">Capstone (Weeks 7–12)</p>
                                    <p className="font-medium  mb-3">Build an end-to-end “real world” portfolio capstone (pick one):</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>
                                            <span className="font-medium">Delivery Robot Company Security Scenario</span> <br />
                                            Threat model → harden network → create detections → simulate incident → DFIR report.
                                        </li>
                                        <li>
                                            <span className="font-medium">Autonomous Vehicle Telemetry SOC Build</span> <br />
                                            Logs → detection rules → dashboards → incident response workflow.
                                        </li>
                                        <li>
                                            <span className="font-medium">Web Platform Pen Test + Remediation Pack </span> (lab only) <br />
                                            Findings → severity → proof → remediation guidance → retest results
                                        </li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <p className="font-medium  mb-3">Capstone deliverables (what makes you “expert”)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li > Threat model + architecture diagram </li>
                                        <li> Security controls list (prevent/detect/respond)</li>
                                        <li>Detection rules + test cases</li>
                                        <li>Incident runbook + post-incident report</li>
                                        <li>Final executive summary + technical appendix</li>
                                    </ul>
                                </div>

                                <div className="my-5">
                                    <p className="font-medium  mb-3">Level 4 outcomes</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li > You can operate like a cybersecurity professional: assess, detect, respond, and communicate—with a portfolio that proves it. </li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <p className="font-medium  mb-3">Summary Roadmap (48 weeks total)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li > <span className="font-medium">Level 1:</span>IT/OS/Networking/Security foundations. </li>
                                        <li > <span className="font-medium">Level 2:</span>Network design/config/troubleshooting + security fundamentals for cyber roles. </li>
                                        <li > <span className="font-medium">Level 3:</span> Python for cybersecurity (pen testing, detection, DFIR, appsec, malware, hunting, crypto). </li>
                                        <li > <span className="font-medium">Level 4:</span> Advanced specialization + capstone (offense/defense/DFIR/appsec).</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={one} alt="Programming" className="mx-auto items-center justify-center object-cover w-[502px] lg:h-[1002px] rounded-[20px] " />
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

export default EthnicalHacking
