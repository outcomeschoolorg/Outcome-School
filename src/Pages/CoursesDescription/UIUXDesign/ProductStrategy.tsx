import Footer from "../../../Component/Footer";
import NavBar from "../../../Component/NavBar";
import one from "../../../assets/images/product-strategy.png";
import StudentReview from "../../../Component/StudentReview";
import { Link } from "react-router";

const ProductStrategy = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center">
              Product Strategy: Go-To-Market, Leadership, Org Design, and
              Financial Lifecycle Mastery
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 4 (Weeks 37–48)
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            {/* TEXT SECTION */}
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium">This level directly covers:</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Market Development and Commercialization</li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Building and Leading Innovative Organizations (OKRs,
                      governance, lean budgeting)
                    </li>
                  </ul>
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Financing the Product Life Cycle</li>
                  </ul>
                </p>

                <p className="font-medium">
                  <span className="text">Goal:</span> Operate like a senior PM:
                  lead strategy, growth, commercialization, and sustainable
                  product economics.
                </p>

                <p className="mt-5 font-medium">Skills & leadership</p>

                <p className="mt-3 font-medium">GTM + growth</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Positioning, segmentation, packaging</li>
                    <li>
                      Go-to-market strategy: acquisition, activation, retention
                      loops
                    </li>
                    <li>Launch planning + post-launch measurement</li>
                    <li>Customer development + feedback systems at scale</li>
                  </ul>
                </p>

                <p className="mt-3 font-medium">Leadership & organization</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      OKRs: setting outcomes, aligning teams, measuring progress
                    </li>
                    <li>Portfolio governance: what to fund, pause, or stop</li>
                    <li>
                      Culture-building: execution habits, innovation rhythm,
                      accountability
                    </li>
                  </ul>
                </p>

                <p className="mt-3 font-medium">Finance fundamentals</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Unit economics basics (CAC, LTV, margins)</li>
                    <li>
                      Pricing and monetization basics (tiers, freemium, trials)
                    </li>
                    <li>Lean budgeting and investment tradeoffs</li>
                    <li>
                      Product lifecycle funding: discovery → build → scale →
                      optimize
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Tools (analytics option)</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>Amplitude (or comparable product analytics tools)</li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">12-week structure</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Weeks 1–3: Market segmentation, positioning, GTM
                      fundamentals
                    </li>
                    <li>
                      Weeks 4–6: Growth strategy + launch planning + adoption
                      strategy
                    </li>
                    <li>
                      Weeks 7–9: OKRs, org design, portfolio governance, culture
                      for innovation
                    </li>
                    <li>
                      Weeks 10–12: Pricing + unit economics + lifecycle funding
                      + capstone presentation
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">Capstone (must-have)</p>

                <p className="font-medium">
                  Build a full “real PM” end-to-end portfolio project:
                </p>

                <p className="font-medium">
                  Discovery → strategy → PRD → delivery plan → GTM → metrics →
                  financial model
                </p>

                <p className="mt-3 font-medium">Include:</p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>North Star metric + 3 supporting metrics</li>
                    <li>Roadmap with tradeoffs + risk plan</li>
                    <li>GTM plan (channels, messaging, rollout)</li>
                    <li>Unit economics snapshot + pricing approach</li>
                    <li>
                      OKRs + operating rhythm (cadence, reviews, decision logs)
                    </li>
                  </ul>
                </p>

                <p className="mt-5 font-medium">
                  Mindset gained: “Lead outcomes, align people, and build
                  products that win in the market and survive financially.”
                </p>

                <p className="mt-5 font-medium">
                  What you’ll have after 48 weeks
                </p>

                <p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>UX case study + prototype (Level 1)</li>
                    <li>
                      Product strategy brief + MVP roadmap + PRD lite (Level 2)
                    </li>
                    <li>
                      Experiments + metrics-driven decisions + delivery toolkit
                      + negotiation memo (Level 3)
                    </li>
                    <li>
                      GTM plan + OKRs + unit economics + full capstone (Level 4)
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="md:w-1/2">
              <img
                src={one}
                alt="Product Strategy Level 4"
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

export default ProductStrategy;
