import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import StudentReview from "../../../Component/StudentReview";
import one from "../../../assets/images/level4.jpg";
import { Link } from "react-router";

const RoboticsLevel4 = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              Guidance Systems
            </p>

            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 4 (Weeks 37–48)
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium">
                  <span className="text">Goal:</span> Make robots stable,
                  accurate, and safe through control + filtering.
                </p>

                <p className="mt-5 font-medium">
                  This level maps to your Control block (core concepts)
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Linear systems & state-space,
                      controllability/observability
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>PID → LQR/LQG basics</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Kalman filtering (state estimation with noise)</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Guidance & navigation concepts (especially for
                      drones/vehicles)
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Digital control implementation realities (sampling,
                      delays)
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Skills + mindset</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Control mindset: “Stability first, performance second.”
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Estimation mindset: “Sensors lie—estimate the state.”
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Build confidence in tuning, simulation-to-real transfer,
                      and robustness
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Output projects (choose 2)</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Drone attitude control (sim): PID/LQR attitude
                      stabilization + tuning report
                    </li>
                    <li>
                      Autonomous car lane-keeping (sim): bicycle model + lateral
                      controller
                    </li>
                    <li>
                      Sensor fusion: IMU + GPS fusion using Kalman filter
                      (simulated logs)
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Tools (optional but common in control)
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      MathWorks style workflows are common in industry (you can
                      also do everything in Python/C++)
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Exit checklist</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      You can stabilize a dynamic system, build an estimator,
                      and explain why your controller works.
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

export default RoboticsLevel4;
