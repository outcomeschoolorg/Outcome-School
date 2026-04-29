import Footer from "../../../Component/Footer"
import NavBar from "../../../Component/NavBar"
import one from "../../../assets/images/security.png"
import { Link } from "react-router";
import StudentReview from "../../../Component/StudentReview";


const SecurityProgramming = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                        <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                              Security Programming
                        </p>
                        <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">Level 3 (Weeks 25–36)</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed    ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span> Learn Python specifically for real security work—automation, analysis, detection, DFIR, and safe testing.
                                </p>
                                <p>
                                    <p className="font-medium  mb-3">This level covers the Python tracks you listed:</p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> Pen Testing</li>
                                        <li>Detection Engineering</li>
                                        <li>DFIR</li>
                                        <li>AppSec</li>
                                        <li>Malware Analysis</li>
                                        <li>Network Security</li>
                                        <li>Data Science/ML + Threat Hunting</li>
                                        <li>Cryptography</li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Foundations first (Weeks 1–2)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li> Python essentials for security: files, regex, JSON, argparse, logging</li>
                                        <li>Networking with Python: sockets (safe basics), HTTP requests, parsing outputs</li>
                                        <li>Building clean tools: error handling, modular code, unit tests</li>
                                    </ul>
                                </p>
                                
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Weekly focus map (Weeks 3–12)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>
                                            <span className="font-medium">Weeks 3–4 — Python for Network Security (#6)</span> <br/>
                                            Build log/packet parsers, detect suspicious patterns in traffic metadata.
                                        </li>
                                        <li>
                                            <span className="font-medium">Weeks 5–6 — Python for Detection Engineering (#2)</span> <br/>
                                             Parse endpoint/network logs, write rule-like detections, enrich events.
                                        </li>
                                        <li>
                                            <span className="font-medium">Weeks 7–8 — Python for DFIR (#3)
</span> <br/>
                                             Timeline creation, artifact parsing, triage automation, evidence handling habits.
                                        </li>
                                        <li>
                                            <span className="font-medium">Week 9 — Python for AppSec (#4)</span> <br/>
                                             Safe static checks, dependency auditing automation, input validation checkers
                                        </li>
                                        <li>
                                            <span className="font-medium">Week 10 — Python for Pen Testing (#1) </span> (legal lab only) <br/>
                                             Build automation helpers (scanners/wrappers/reporting), not “weaponized” code.
                                        </li>
                                        <li>
                                            <span className="font-medium">Week 11 — Python for Malware Analysis (#5) </span> <br/>
                                            Hashing, string extraction, basic YARA-style patterning, sandbox log parsing
                                        </li>
                                        <li>
                                            <span className="font-medium">Week 12 — Python for Threat Hunting + ML (#7) + Cryptography (#8)</span>  <br/>
                                             Feature extraction from logs, simple anomaly detection, crypto fundamentals (hashing/encoding/key concepts).
                                        </li>
                                    </ul>
                                </p>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Portfolio projects (choose 3)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li><span className="font-medium">Log Hunter:  ingest logs → normalize → detect suspicious behaviors → export findings</span> </li>
                                        <li><span className="font-medium">DFIR Triage Toolkit:</span>collect artifacts from a lab machine → generate timeline report </li>
                                        <li><span className="font-medium">Detection Pack:</span> 10 high-signal detections with test data + tuning notes</li>
                                        <li><span className="font-medium">AppSec Helper:</span> dependency audit + secrets detection + reporting pipeline </li>
                                        <li><span className="font-medium">Malware Triage Notebook:</span>static indicators + grouped families by features (lab samples) </li>
                                    </ul>
                                </p>

                                <p className="my-5">
                                    <p className="font-medium  mb-3">Level 3 outcomes</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>You can build practical security tooling in Python across offense, defense, and investigation—like a real analyst/engineer. </li>
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

export default SecurityProgramming
