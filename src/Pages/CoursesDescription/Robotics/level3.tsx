import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import StudentReview from "../../../Component/StudentReview";
import one from "../../../assets/images/robotics.png";
import { Link } from "react-router";

const RoboticsLevel3 = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              Mechanics + Mechatronics
            </p>

            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 3 (Weeks 25–36)
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium">
                  <span className="text">Goal:</span> Understand how robots move
                  and how mechanical + electrical components become a
                  controllable system.
                </p>

                <p className="mt-5 font-medium">
                  This level maps to your Mechanics block (examples from your
                  list)
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Advanced dynamics topics: rigid body motion, constraints
                      (holonomic/nonholonomic), equations of motion
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Robotics kinematics/dynamics (manipulators + mobile
                      robots)
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Mechatronics: actuators, motors, sensors,
                      microcontrollers, electro-mechanical modeling
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Skills + knowledge</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Kinematics: forward/inverse kinematics, Jacobians
                      (practical)
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Dynamics: Newton-Euler intuition, inertia, friction models
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Actuators: DC motors, servos, BLDC basics</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Sensors: IMU, encoders, ultrasonic, camera basics</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Hardware mindset: “Real world is noisy, delayed, and
                      imperfect.”
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Tools/hardware (starter)</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Arduino for first mechatronics builds</li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Output projects (choose 2)</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      2-DOF robot arm (sim + basic hardware prototype):
                      kinematics + simple trajectory
                    </li>
                    <li>
                      Self-balancing bot simulation (mechanics model +
                      control-ready structure)
                    </li>
                    <li>
                      Wheeled robot base: motor + encoder + velocity estimation
                      + PID speed control
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Exit checklist</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      You can model motion, choose sensors/actuators, and build
                      a basic robot mechanism that can be controlled.
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

export default RoboticsLevel3;
