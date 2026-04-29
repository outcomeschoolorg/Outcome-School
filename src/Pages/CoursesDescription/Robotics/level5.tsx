import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import one from "../../../assets/images/level6.jpg";
import StudentReview from "../../../Component/StudentReview";
import { Link } from "react-router";

const RoboticsLevel5 = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          {/* HEADER (MATCHED TO LEVEL 6 TEMPLATE) */}
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center">
              Perception + AI
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 5 (Weeks 49–60)
            </p>
          </div>

          {/* CONTENT */}
          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2">
              <div className="leading-relaxed">
                <p className="font-medium">
                  <span className="text">Goal:</span> Give robots the ability to
                  “see,” localize, map, and understand their environment.
                </p>

                <p className="mt-5 font-medium">
                  This level maps to your Perception + AI blocks
                </p>

                <p className="mt-3 font-medium">Systems engineering</p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Computer vision fundamentals (features, tracking, stereo,
                    motion)
                  </li>
                  <li>
                    Deep learning basics for robotics tasks
                    (detection/segmentation)
                  </li>
                  <li>SLAM / mapping intuition (2D/3D)</li>
                  <li>
                    Sensor processing: cameras, LiDAR concepts, radar concepts,
                    audio (optional)
                  </li>
                </ul>

                <p className="mt-3 font-medium">Skills + mindset</p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Perception mindset: “Perception is probabilistic—never
                    assume certainty.”
                  </li>
                  <li>Dataset thinking: labeling, bias, failure modes</li>
                  <li>Real-time constraints: latency, compute tradeoffs</li>
                </ul>

                <p className="mt-3 font-medium">
                  Hardware acceleration (optional, valuable)
                </p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    NVIDIA Jetson-style workflows are commonly used for on-robot
                    AI inference
                  </li>
                </ul>

                <p className="mt-5 font-medium">Output projects (choose 2)</p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    Object detection for robotics: detect
                    obstacles/people/vehicles + evaluate precision/recall
                  </li>
                  <li>
                    Visual odometry / tracking: motion estimation from a camera
                    sequence
                  </li>
                  <li>
                    Mini-SLAM demo: map a room in simulation (or with recorded
                    sensor data)
                  </li>
                </ul>

                <p className="mt-5 font-medium">Exit checklist</p>
                <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                  <li>
                    You can build perception pipelines, evaluate them, and
                    connect perception outputs to planning/control.
                  </li>
                </ul>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="md:w-1/2">
              <img
                src={one}
                alt="Robotics Level 5"
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

export default RoboticsLevel5;
