import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import one from "../../../assets/images/level6.jpg";
import { Link } from "react-router";
import StudentReview from "../../../Component/StudentReview";

const RoboticsLevel6 = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              Product Engineering (Systems, HRI, Safety, and Deployment)
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 6 (Weeks 61–72)
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium">
                  <span className="text">Goal:</span> Build complete robotic
                  products (not just demos) with reliability, safety, and
                  real-world constraints.
                </p>

                <p className="mt-5 font-medium">
                  What you master (skills + knowledge)
                </p>

                <p className="mt-3 font-medium">Systems engineering</p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Full autonomy stack thinking: perception → localization →
                    planning → control
                  </li>
                  <li>
                    Architecture: message passing, modular design, failure
                    recovery, watchdogs
                  </li>
                  <li>
                    Simulation-to-real: calibration, timing, noisy sensors,
                    drift
                  </li>
                </ul>

                <p className="mt-3 font-medium">
                  Human-Robot Interaction (HRI)
                </p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>Usability, safety around people, evaluation methods</li>
                  <li>
                    Interfaces: remote ops, operator dashboards, alerts, mode
                    management
                  </li>
                </ul>

                <p className="mt-3 font-medium">Operational readiness</p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Field testing protocols, safety checklists,
                    logging/telemetry
                  </li>
                  <li>
                    Power management, thermal constraints, maintainability
                  </li>
                  <li>
                    Manufacturing-aware design: parts, fasteners, wiring harness
                    discipline
                  </li>
                </ul>

                <p className="mt-3 font-medium">Commercial/product mindset</p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Requirements, constraints, BOM cost thinking, iteration
                    cycles
                  </li>
                  <li>
                    MVP robotics: ship “small autonomy” safely, improve over
                    time
                  </li>
                </ul>

                <p className="mt-5 font-medium">
                  Capstone options (pick ONE and build end-to-end)
                </p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Delivery Robot (sidewalk / indoor): obstacle detection +
                    path planning + docking/charging
                  </li>
                  <li>
                    Autonomous Car (simulation-first, then RC car): lane keeping
                    + obstacle stop + localization + behavior planner
                  </li>
                  <li>
                    Drone Product (inspection / delivery demo): stable flight +
                    waypoint navigation + failsafes + vision landing
                  </li>
                </ul>

                <p className="mt-5 font-medium">
                  Capstone deliverables (what makes it “expert”)
                </p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>System architecture diagram + module interfaces</li>
                  <li>Safety plan (modes, failsafes, emergency stop logic)</li>
                  <li>Test plan + field logs + measurable results</li>
                  <li>Demo video + full repo + build instructions</li>
                </ul>

                <p className="mt-5 font-medium">Exit checklist</p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    You can design, build, test, and iterate a robotic system
                    like a product team would.
                  </li>
                </ul>

                {/* ✅ ADDED SECTION (AS REQUESTED - NO MODIFICATION) */}

                <p className="mt-5 font-medium">
                  What you’ll be able to build after Level 6
                </p>
                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Drones: stabilized flight + navigation +
                      perception-assisted tasks
                    </li>
                    <li>
                      Autonomous cars: lane keeping + obstacle behavior +
                      localization + planning
                    </li>
                    <li>
                      Delivery robots: mapping/localization + obstacle avoidance
                      + robust operations
                    </li>
                    <li>
                      Service robots: manipulation basics + navigation + safe
                      HRI behaviors
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Recommended “choose your specialization” track (starting Level
                  4)
                </p>

                <p>
                  Pick one “main product domain” while still learning
                  everything:
                </p>

                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Aerial robotics (drones): flight dynamics + estimation +
                    vision landing
                  </li>
                  <li>
                    Self-driving / ground vehicles: control + perception +
                    planning
                  </li>
                  <li>
                    Delivery/service robots: SLAM + navigation + safety/HRI
                  </li>
                </ul>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="md:w-1/2">
              <img
                src={one}
                alt="Robotics Level 6"
                className="mx-auto items-center justify-center object-cover w-[502px] lg:h-[1002px] rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <StudentReview />

      <div className="pb-10">
        <div className="bg-[#5D7BF380] rounded-[20px] container flex flex-col py-10 gap-4 px-10 mx-auto items-center">
          <p className="font-extrabold text-[45px] text-center">
            Ready to Take the Next Step?
          </p>

          <Link to="/application-process">
            <button
              type="button"
              className="background rounded-[999px] py-4 lg:py-6 px-7 lg:px-9 mx-auto text-white font-semibold text-[16px]"
            >
              Go to the Application Process
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RoboticsLevel6;
