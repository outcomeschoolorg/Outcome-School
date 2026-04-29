import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import one from "../../../assets/images/product-data.png";
import StudentReview from "../../../Component/StudentReview";
import { Link } from "react-router";

const ProductManagement = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center">
              Product Management: Data-Informed PM + Innovation Management +
              Product Delivery & Operations
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 3 (Weeks 25–36)
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium">This level directly covers:</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Strategies for Managing Innovation</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Data Analysis and Decision Making (experimental thinking +
                      Bayesian methods)
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Managing Product Development and Operations</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Negotiation and Problem Solving</li>
                  </ul>
                </p>

                <p className="font-medium">
                  <span className="text">Goal:</span> Become the PM who can run
                  experiments, make confident decisions with data, and ship
                  reliably with teams.
                </p>

                <p className="mt-5 font-medium">Skills & fundamentals</p>

                <p className="mt-3 font-medium">Data & decision-making</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Metrics that matter: funnels, activation, retention,
                      conversion
                    </li>
                    <li>
                      Experiment design: hypotheses, test plans, guardrails
                    </li>
                    <li>Survey design + interpretation</li>
                    <li>
                      Bayesian thinking (practical): updating confidence as
                      evidence grows
                    </li>
                    <li>Decision logs: clarity under uncertainty</li>
                  </ul>
                </p>

                <p className="mt-3 font-medium">Delivery & operations</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Agile execution: backlog, sprints, demos, retros</li>
                    <li>
                      DevOps awareness: release cycles, quality, reliability
                      basics
                    </li>
                    <li>
                      Value stream mapping: reduce bottlenecks, speed up
                      delivery
                    </li>
                    <li>
                      Operational excellence: incident learnings, feedback loops
                    </li>
                  </ul>
                </p>

                <p className="mt-3 font-medium">Innovation</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Technology evaluation and adoption frameworks</li>
                    <li>Managing change in organizations</li>
                    <li>
                      De-risking new solutions through structured
                      experimentation
                    </li>
                  </ul>
                </p>

                <p className="mt-3 font-medium">Negotiation</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Stakeholder alignment, conflict resolution, tradeoffs
                    </li>
                    <li>
                      IP/contract basics (enough to collaborate with
                      legal/procurement)
                    </li>
                    <li>Advocacy: saying “no” with evidence and diplomacy</li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Tools</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Jira (backlog, sprints, delivery)</li>
                    <li>Notion (docs, decisions, specs)</li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">12-week structure</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Weeks 1–3: Metrics, funnels, measurement plans, survey
                      design
                    </li>
                    <li>
                      Weeks 4–6: Experiments + Bayesian decision habits
                      (confidence, iteration)
                    </li>
                    <li>
                      Weeks 7–9: Agile delivery, DevOps basics, value stream
                      mapping
                    </li>
                    <li>
                      Weeks 10–12: Negotiation drills + stakeholder plans +
                      innovation frameworks
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Portfolio outcomes (must-have)
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Experiment Pack: 3 experiments with hypotheses, metrics,
                      results, learnings
                    </li>
                    <li>
                      Product Analytics Summary: funnel + insights + what you’d
                      change next
                    </li>
                    <li>
                      Delivery Toolkit: backlog samples, sprint plan, release
                      checklist, risk log
                    </li>
                    <li>
                      Negotiation + Alignment Memo: how you handled tradeoffs +
                      stakeholder map
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Mindset gained: “Be evidence-led. Move fast, but don’t guess
                  learn.”
                </p>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="md:w-1/2">
              <img
                src={one}
                alt="Product Management Level 3"
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

export default ProductManagement;
