import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import one from "../../../assets/images/level1.jpg";
import StudentReview from "../../../Component/StudentReview";
import { Link } from "react-router";

const RoboticsLevel1 = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              Introduction to Robotics Engineering (Industrial Mathematics +
              Applied Physics)
            </p>

            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 1 (Weeks 1–12)
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium">
                  <span className="text">Goal:</span> Build the math/physics
                  “operating system” behind robotics (motion, forces,
                  estimation, stability).
                </p>

                <p className="mt-5 font-medium">
                  What you learn (knowledge + fundamentals)
                </p>

                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Industrial math: vectors/matrices, linear algebra, calculus
                    for modeling, ODEs, numerical methods
                  </li>
                  <li>
                    Applied physics: Newton/Euler mechanics, energy/momentum,
                    friction/drag, basic circuits/sensors intuition
                  </li>
                  <li>
                    Modeling mindset: “If I can model it, I can control it.”
                  </li>
                  <li>
                    Simulation-first thinking: test ideas in math/simulation
                    before hardware
                  </li>
                </ul>

                <p className="mt-5 font-medium">12-week structure</p>

                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Weeks 1–3: linear algebra + calculus refresh + numerical
                    methods
                  </li>
                  <li>
                    Weeks 4–6: kinematics basics + frames/transformations + ODE
                    modeling
                  </li>
                  <li>
                    Weeks 7–9: dynamics basics + energy methods + constraints
                    intuition
                  </li>
                  <li>
                    Weeks 10–12: signals/noise basics + intro estimation
                    intuition (why filters exist)
                  </li>
                </ul>

                <p className="mt-5 font-medium">Output (portfolio artifacts)</p>

                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Mini-sim library: simulate projectile + pendulum +
                    spring-mass + vehicle motion
                  </li>
                  <li>
                    Frame/transform notebook: rotations, coordinate transforms,
                    simple rigid-body motion
                  </li>
                  <li>
                    Engineering “math notes” PDF: your cheat-sheet for robotics
                    math
                  </li>
                </ul>

                <p className="mt-5 font-medium">Exit checklist</p>

                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    You can derive simple equations of motion and simulate them
                    reliably.
                  </li>
                </ul>
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

export default RoboticsLevel1;
