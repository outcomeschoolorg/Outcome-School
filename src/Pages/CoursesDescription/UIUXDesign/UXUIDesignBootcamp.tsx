import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import one from "../../../assets/images/product.png";
import StudentReview from "../../../Component/StudentReview";
import { Link } from "react-router";

const UXUIDesignBootcamp = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center">
              UX/UI Design Bootcamp
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
                  <span className="text">Goal: </span>Become strong at
                  user-centered design so you can think like a PM who
                  understands users, problems, and experiences.
                </p>

                <p className="mt-5 font-medium">Skills you build</p>
                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>UX research: interviews, surveys, usability testing</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Synthesis: insights, personas, journey maps, JTBD</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Information architecture + user flows</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Wireframes → high-fidelity UI</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Prototyping + usability iteration</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Accessibility + UI standards</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Design handoff + collaboration with engineers</li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Tools</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Figma (wireframes, UI, prototypes)</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Basic documentation in Docs/Slides</li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  12-week structure (high level)
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Weeks 1–3: UX foundations + user research + problem
                      definition
                    </li>
                    <li>
                      Weeks 4–6: IA, user flows, wireframes, usability
                      heuristics
                    </li>
                    <li>
                      Weeks 7–9: UI design, design systems, responsive layouts,
                      accessibility
                    </li>
                    <li>
                      Weeks 10–12: Prototype, usability testing, iteration,
                      handoff + case study
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Portfolio outcomes (must-have)
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      1 full UX case study (research → insights → design → tests
                      → iteration)
                    </li>
                    <li>Prototype demo + “what changed and why” summary</li>
                    <li>
                      Design handoff notes (states, edge cases, responsiveness)
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Mindset gained: “Start with users, define the problem,
                  validate with evidence.”
                </p>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="md:w-1/2">
              <img
                src={one}
                alt="Product Design"
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

export default UXUIDesignBootcamp;
