import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import one from "../../../assets/images/product-management.png";
import StudentReview from "../../../Component/StudentReview";
import { Link } from "react-router";

const ProductMFundamentals = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center">
              Product Management Fundamentals: Customer Discovery + Business
              Modeling
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 2 (Weeks 13–24)
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium">This level directly covers:</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Fundamentals of Product Management</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Business Modeling and Customer Validation</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Innovative Thinking (design thinking + agile principles)
                    </li>
                  </ul>
                </p>

                <p className="font-medium">
                  <span className="text">Goal:</span> Transition from designing
                  screens to owning outcomes: what to build, why, for whom, and
                  how success is measured.
                </p>

                <p className="mt-5 font-medium">Skills & knowledge</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      PM core functions: discovery, strategy, lifecycle
                      management
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Project → product thinking (outcomes, value, iteration)
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Customer discovery: problem interviews, assumptions,
                      hypotheses
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Value proposition + positioning basics</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Business model design (segments, channels, revenue, costs)
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Validation: testing demand, iterating with feedback,
                      product storytelling
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Writing basics: PRDs, user stories, acceptance criteria
                      (PM style)
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">12-week structure</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Weeks 1–3: PM role, product lifecycle, user + business
                      problem framing
                    </li>
                    <li>
                      Weeks 4–6: Discovery interviews, insight synthesis,
                      opportunity mapping
                    </li>
                    <li>
                      Weeks 7–9: Business modeling, value propositions, customer
                      validation loops
                    </li>
                    <li>
                      Weeks 10–12: MVP definition, roadmap basics, narrative +
                      stakeholder alignment
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Portfolio outcomes (must-have)
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Product Brief (1–2 pages): user, problem, insights, goals,
                      metrics
                    </li>
                    <li>
                      Business Model + Validation Report: what you tested,
                      results, what changed
                    </li>
                    <li>
                      MVP Scope + Roadmap (6–12 weeks): prioritized with
                      reasoning
                    </li>
                    <li>
                      PRD Lite: problem → solution → requirements → success
                      metrics
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Mindset gained: “A PM doesn’t ship features they reduce risk
                  and deliver measurable value.”
                </p>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="md:w-1/2">
              <img
                src={one}
                alt="Product Management"
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

export default ProductMFundamentals;
