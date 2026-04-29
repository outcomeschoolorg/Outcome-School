import React from "react";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import report2025 from "../assets/2025 Annual Report.pdf";
import dedication from "../assets/aboutus/dedication.png";
import determination from "../assets/aboutus/determination.png";
import esteem from "../assets/aboutus/esteem.png";
import grit from "../assets/aboutus/grit.png";
import transperancy from "../assets/aboutus/transperancy.png";

type Value = {
  title: string;
  desc: string;
  img?: any;
};

type Report = {
  label: string;
  file: string;
};

const foundingValues: Value[] = [
  {
    title: "Dedication",
    desc: "Showing up with full commitment to the mission, no matter the obstacles. In team behavior, it reflects consistency, being reliable and accountable to one another in both small tasks and big projects. Dedication drives us to push through challenges, align decisions with long-term goals, and stay focused on outcomes that uplift our communities.",
    img: dedication,
  },
  {
    title: "Determination",
    desc: "The grit and perseverance to keep moving forward even when solutions aren’t obvious. In solving problems, it pushes us to test, adapt, and refine strategies instead of giving up at the first roadblock. For collaboration and leadership, determination inspires resilience, ensuring that both projects and people evolve through continuous upskilling and reskilling.",
    img: determination,
  },
  {
    title: "Esteem",
    desc: "Valuing ourselves, our teammates, and the communities we serve. In team dynamics, it means fostering mutual respect, recognizing contributions, and ensuring voices are heard in decision-making. Esteem creates an environment where collaboration thrives, and leadership becomes about uplifting others while achieving product and project goals with integrity.",
    img: esteem,
  },
  {
    title: "Grit",
    desc: "The strength to endure, adapt, and innovate despite setbacks. In problem-solving and decision-making, it empowers us to turn failures into stepping stones and maintain momentum under pressure. Within collaboration and upskilling, grit ensures we finish what we start, master new skills, and turn learning into lasting results.",
    img: grit,
  },
  {
    title: "Transparency",
    desc: "Builds trust by making intentions, processes, and decisions clear. In team behavior, it encourages openness, reducing misunderstandings and fostering honest feedback loops. Transparency in leadership and collaboration ensures accountability, shared learning, and a culture where upskilling and reskilling are embraced as collective growth, not individual shortcomings.",
    img: transperancy,
  },
];

const reports: Report[] = [{ label: "2025 Annual Report", file: report2025 }];

const AboutPage: React.FC = () => {
  const openPDF = (file: string): void => {
    window.open(file, "_blank");
  };

  return (
    <>
      <NavBar />
      <div className="bg-[#f5f7f9] px-6 md:px-16 py-10 space-y-14 pt-[140px]">
        {/* ABOUT */}
        <section>
          <h1 className=" text-[40px] lg:text-[48px] font-bold mb-5 text-center">
            About Outcome School
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Outcome School was born from deep curiosity and countless
            conversations, spirited debates, hard questions, bold ideas, lived
            logic, shared learning, and intercultural relationships built
            alongside low-income communities and communities of color. Those
            early discussions centered on an urgent reality: many talented
            people are still locked out of clear, affordable pathways into tech
            careers and entrepreneurship.
            <br />
            <br />
            Outcome School was established to expand access to high‑demand
            technology careers by creating alternative, affordable pathways into
            the tech workforce. The organization also supports the development
            of lean, community‑rooted technology ventures that address real
            problems, generate economic value, and create employment
            opportunities within their own neighborhoods.
            <br />
            <br />
            The urgency of this work is underscored by persistent inequities in
            the tech sector. According to the U.S. Equal Employment Opportunity
            Commission, only 5% of the nation’s technology workforce is Black.
            The leadership gap is even more pronounced: the Kapor Center reports
            that only 2% of executives in the tech industry are Latinx. These
            disparities reflect systemic barriers that limit access,
            advancement, and representation for underserved communities.
            <br />
            <br />
            It continues to be guided by leaders with deep empathy, lived
            experience, and a commitment to problem‑solving. This perspective
            shapes the organization’s vision, strengthens its decision‑making,
            and informs the work carried out each day. It ensures that the
            solutions we build remain grounded in the realities of the
            communities we serve and aligned with the long‑term goal of
            expanding economic mobility.
          </p>
        </section>

        {/* OPPORTUNITY  */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">THE OPPORTUNITY</h2>
          <p className="text-gray-700">
            Education is not translating into employment for too many
            underserved youth Many young people want access to high-growth
            careers, but lack affordable, practical pathways into tech.
            Traditional education models are often too slow, too expensive, or
            too disconnected from workforce outcomes. Underserved youth need
            more than information, they need training, mentorship, projects, and
            real hiring pathways.
          </p>
        </section>

        {/* VISION */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To become a leading workforce development platform that bridges the
            gap between education and employment through outcome based learning
            and industry alignment.
          </p>
          <br />
          <p>Core Objectives:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>
              Deliver job-ready technical and professional skills to underserved
              youth
            </li>
            <li>
              Create measurable employment and income outcomes for participants
            </li>
            <li>
              Build strong partnerships with employers to create hiring pathways
            </li>
            <li>Develop a scalable and repeatable program model</li>
          </ul>
        </section>

        {/* MISSION */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-2">
            Outcome School exists to equip underserved youth with practical,
            technology-driven skills that lead directly to meaningful employment
            and long-term economic mobility.
          </p>
          <p className="text-gray-700 mb-2">
            We prepare learners for meaningful employment and long-term economic
            mobility.
          </p>
          <p className="text-gray-700 mb-2">
            We focus on outcome-based learning, not education for education’s
            sake.
          </p>
          <p className="text-gray-700">
            We connect skill-building directly to workforce readiness.
          </p>
        </section>

        {/* THE PROBLEM & SOLUTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-gray-700 mb-2">
            Talent is everywhere. Access is not.
          </p>
          <p className="text-gray-700 mb-2">
            Underserved youth often face barriers to entering tech: cost, lack
            of mentorship, limited exposure, and weak career networks.
          </p>
          <p className="text-gray-700 mb-2">
            Many programs do not provide hands-on learning, accountability, or
            pathways to actual job opportunities.
          </p>
          <p className="text-gray-700">
            Employers need skilled entry-level talent, yet too many capable
            young people remain excluded from the pipeline.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">The Solution</h2>
          <p className="text-gray-700 mb-2">
            Outcome School delivers short-cycle, high-impact workforce training.
          </p>
          <p className="text-gray-700 mb-2">
            We provide practical tech education focused on employability.
          </p>
          <p className="text-gray-700 mb-2">
            Our programs combine instruction, hands-on projects, mentorship, and
            career readiness training.
          </p>
          <p className="text-gray-700">
            We are building a repeatable model that can scale across communities
            and employer partnerships.
          </p>
        </section>

        {/* CORE VALUES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <p className="text-gray-700">
            The 5Ts: Training, Tenacity, Transformation, Teamwork, and Talent.
          </p>
        </section>

        {/* FOUNDING VALUES */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Our Founding Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {foundingValues.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="bg-[#e6e9ff] p-6 rounded-xl shadow-sm hover:shadow-md transition text-center w-full max-w-sm"
              >
                <img
                  src={value.img}
                  alt={value.title}
                  className="w-12 h-12 mb-4 mx-auto block"
                />
                <h3 className="font-semibold text-lg mb-2 text-indigo-700">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {foundingValues.slice(3).map((value, index) => (
              <div
                key={index}
                className="bg-[#e6e9ff] p-6 rounded-xl shadow-sm hover:shadow-md transition text-center w-full max-w-[38%]"
              >
                <img
                  src={value.img}
                  alt={value.title}
                  className="w-12 h-12 mb-4 mx-auto block"
                />
                <h3 className="font-semibold text-lg mb-2 text-indigo-700">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REPORTS */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Reports & Forms</h2>
          <div className="flex flex-wrap gap-4">
            {reports.map((report: Report, index: number) => (
              <button
                key={index}
                onClick={() => openPDF(report.file)}
                className="bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-800 transition"
              >
                {report.label}
              </button>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
