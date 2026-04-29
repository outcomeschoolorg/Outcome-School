import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import StudentReview from "../../../Component/StudentReview";
import one from "../../../assets/images/level2.jpg";
import { Link } from "react-router";

const RoboticsLevel2 = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              Programming for Robotics
            </p>

            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 2 (Weeks 13–24)
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium">
                  <span className="text">Goal:</span> Become fluent in the two
                  core languages used in robotics R&D and production.
                </p>

                <p className="mt-5 font-medium">Skills you build</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Python: data handling, prototyping algorithms, quick
                      robotics experiments
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      C++: performance, real-time-ish loops, memory basics,
                      building reliable systems
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Core CS: data structures, algorithms, debugging, testing,
                      Git workflows
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Robotics coding habits: sensor loops, state machines,
                      timing, logging
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Tools (recommended)</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>GitHub for portfolio + version control</li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Weekly arc</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Weeks 1–3: Python robotics patterns (I/O, math libs,
                      plotting, simulation harnesses)
                    </li>
                    <li>
                      Weeks 4–6: Modern C++ basics (classes, RAII, pointers
                      references, build systems)
                    </li>
                    <li>
                      Weeks 7–9: Robotics-style software (state machines,
                      timing, concurrency basics)
                    </li>
                    <li>
                      Weeks 10–12: Testing, performance profiling, code
                      architecture
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Output projects</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Sensor simulator: generate noisy IMU/GPS/LiDAR-like
                      signals in Python
                    </li>
                    <li>
                      C++ control loop: stable 100–500 Hz loop with logging +
                      unit tests
                    </li>
                    <li>
                      Robot “software skeleton”: modules for
                      perception/control/planning interface
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Exit checklist</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      You can write clean robotics code in Python and C++, and
                      structure a project professionally.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="md:w-1/2">
              <img
                src={one}
                alt="Product Management Level 3"
                className="mx-auto items-center justify-center object-cover w-[500px] lg:h-[500px] rounded-[20px]"
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

export default RoboticsLevel2;
