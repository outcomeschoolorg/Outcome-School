import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import StudentReview from "../../../Component/StudentReview";
import two from "../../../assets/images/development.png";
import { Link } from "react-router";

const GameDevelopment = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              Game Development
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 1 (Weeks 1–12) — Game Development Foundation
            </p>
          </div>

          <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
            <div className="md:w-1/2 items-center justify-center ">
              <div className=" leading-relaxed   ">
                <p className="font-medium">
                  <span className="text"> Goal: </span> Learn how games work and
                  build small playable projects fast.
                </p>
                <p>
                  <p className="font-medium  mb-3">Skills (what you can do)</p>
                  <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li> Game loops, input, camera, collisions, UI basics</li>
                    <li>2D fundamentals: sprites, tilemaps, animations</li>
                    <li>
                      Basic physics & movement (jumping, acceleration, friction)
                    </li>
                    <li>Basic scripting/programming for gameplay</li>
                    <li>Version control basics (Git) + teamwork basics</li>
                  </ul>
                </p>
                <p className="my-5">
                  <p className="font-medium  mb-3">
                    Knowledge (what you understand)
                  </p>
                  <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      {" "}
                      What makes a game “feel good”: responsiveness, feedback,
                      timing, pacing
                    </li>
                    <li>
                      Core design pillars: mechanics, dynamics, aesthetics
                    </li>
                    <li>Iteration cycle: build → test → improve</li>
                  </ul>
                </p>

                <div className="my-5">
                  <p className="font-medium  mb-3">Mindset</p>
                  <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li className="font-medium">Playable &gt; perfect</li>
                    <li>Build the smallest thing that proves the fun</li>
                    <li>Learn by shipping weekly</li>
                  </ul>
                </div>

                <div className="my-5">
                  <p className="font-medium  mb-3">
                    12-week studio-like structure
                  </p>
                  <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li className="">
                      <span className="font-medium"> Weeks 1–3: </span> engine
                      setup + core loop + input + movement
                    </li>
                    <li>
                      {" "}
                      <span className="font-medium">Weeks 4–6:</span> collisions
                      + UI + audio feedback + simple enemies
                    </li>
                    <li>
                      <span className="font-medium">Weeks 7–9:</span> level
                      design basics + progression + difficulty tuning
                    </li>
                    <li>
                      <span className="font-medium">Weeks 10–12:</span> polish
                      sprint + publish-ready build + trailer
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium  mb-3">
                    Portfolio projects (ship 3)
                  </p>
                  <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li className="">Arcade microgame (1 minute fun loop)</li>{" "}
                    <li>2D platformer slice (1–2 levels + basic enemies)</li>{" "}
                    <li>Top-down shooter slice (weapons + pickups + score)</li>
                  </ul>
                </div>

                <div className="my-5">
                  <p className="font-medium  mb-3">Exit milestone</p>
                  <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li className="">
                      You can build a complete small game and publish a playable
                      build.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:w-1/2  rounded-lg  mx-auto items-center">
              <img
                src={two}
                alt="Programming"
                className=" object-cover w-[502px] lg:h-[602px] rounded-[20px] "
              />
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

export default GameDevelopment;
