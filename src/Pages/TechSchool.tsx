import NavBar from "../Component/NavBar";
import school from "../assets/images/school.svg";
import bag from "../assets/images/bag.svg";
import zoom from "../assets/images/zoomm.svg";
import clock from "../assets/images/clock.svg";
import user from "../assets/images/user.svg";
import mentor from "../assets/images/mentor.svg";
import demo from "../assets/images/demo.svg";
import frame from "../assets/images/frame.png";
import { useState } from "react";
import Footer from "../Component/Footer";
import CareerPathway from "../Component/CareerPathway";
import BonusPathway from "../Component/bonus";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "Who should apply?",
    answer:
      "Outcome School supports adults 18+ who want a pathway into technology and entrepreneurship, especially those who may not otherwise have access to tech opportunities.<br /><br />Everyone is welcome to apply, and we strongly encourage applicants who are underrepresented in tech, including:<br /><ul><li>People from low-income backgrounds</li><li>People of color</li><li>Undocumented individuals and those with DACA status</li><li>Immigrants and refugees</li><li>People from rural communities</li><li>Women</li></ul><br />Note: All classes are held in English.",
  },
  {
    question: "What does it cost?",
    answer:
      "Outcome School is 100% free for students — yes, FREE.<br /><br />Because the program is expensive to run, we rely on grants and individual donations to keep it accessible. After you land a job, we'll invite you to consider making a voluntary donation so future students can get the same opportunity.<br /><br />Unlike many bootcamps that charge $10,000–$20,000 (or take part of your paycheck for years), we do not require income-sharing or salary contributions—just a hope that you'll pay it forward someday.",
  },
  {
    question: "When and where are classes held?",
    answer:
      "All classes are fully online<br /><br /><ul><li>Live sessions take place on Zoom</li><li>Communication happens through Slack</li><li>Learning materials are shared through Google Classroom</li></ul><br />Students review videos and articles independently, then apply what they learn through projects.<br /><br /><strong>Mentor Support:</strong><br />Students join mentor sessions led by volunteers:<br /><ul><li>One-on-one sessions are available most days of the week</li><li>Group sessions are often held on weeknights (varies by course)</li></ul><br />You'll receive the schedule after registration and orientation.",
  },
  {
    question: "How long are classes and what’s the weekly time commitment?",
    answer:
      "Each course runs for 12 weeks starting in 2026, including an expert level (the final course in your pathway), where small teams build and deploy a real app.<br /><br /><strong>Weekly expectations:</strong><br /><ul><li>About 10 hours per week on coursework</li><li>Attend two live sessions weekly (mandatory)</li><li>Attend one class or career mentorship session once in a month (recommended)</li></ul><br />Mentor sessions may be small-group or one-on-one and are led by experienced professionals.",
  },
  {
    question:
      "What is the application process? What are my chances of being accepted?",
    answer:
      "<ul><li>Request an application at outcomeschool.org/apply</li><li>Complete the application</li><li>Complete a pre-work assignment to show you're prepared to succeed</li><li>Plan for 10–20 hours to complete the assignment</li></ul><br /><strong>Intro track:</strong> New coders receive a tutorial to help them complete the assignment (note: the tutorial alone can take 20+ hours).<br /><strong>Advanced track:</strong> Applicants with experience receive reference materials for review.<br /><br />If your pre-work meets the rubric requirements, you have a strong chance of being accepted.",
  },
  {
    question: "Should I take Level 1 (Intro) or Advanced Levels (2, 3, 4)?",
    answer:
      "Ask yourself: <strong>Have you worked with APIs before?</strong><br /><br /><strong>If yes:</strong><br /><ul><li>Attempt the Advanced pre-work and apply to an Advanced class</li><li>If it's too difficult, you can still submit the Intro pre-work</li><li>If Advanced pre-work doesn't meet expectations, you may automatically be considered for Intro</li><li>Advanced pre-work is web-development based, whether you're applying for React or Python Advanced</li></ul><br /><strong>If no:</strong><br /><ul><li>Complete the Intro pre-work assignment</li><li>The Intro tutorial teaches what you need to finish the pre-work and prepares you for Level 1</li></ul><br /><strong>Important rules:</strong><br /><ul><li>You only need to complete one pre-work assignment (Intro or Advanced)</li><li>You can't take Intro and Advanced at the same time</li><li>If you pass Level 1's final project, you are guaranteed a spot in Advanced</li><li>Completing Level 2 advances you automatically to Level 3</li></ul>",
  },
  {
    question: "What job support does Outcome School offer?",
    answer:
      "Currently, alumni receive:<br /><ul><li>A Job Seeker's Toolkit</li><li>Access to the Outcome School Alumni Network for events and networking</li></ul><br />In 2026, we plan to expand career development support for students who complete the practicum.<br /><br />Outcome School apprentices receive six months of career development support during their apprenticeship.",
  },
];

const TechSchool = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Tech School | Outcome School</title>
        <meta
          name="description"
          content="Learn how Outcome School's tech programs work. We focus on hands-on training, real projects, and practical skills that prepare you for modern software engineering roles."
        />
      </Helmet>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 lg:pt-0 pt-[10em] mx-auto items-center flex flex-col md:flex-row gap-10 min-h-screen ">
          <div className="md:w-1/2  items-center justify-center  ">
            <p className="leading-relaxed text text-[40px] lg:text-[45px] mb-5 font-extrabold ">
              Our Tech School
            </p>
            <p className="text-[18px] ">
              Become job-ready in under a year through free, live, online
              classes designed to help you gain real, employable skills.
              <ul className="list-disc my-5 font-regular lg:ml-5 mb-3 px-5 lg:px-0 [&>li::marker]:text-[#7C33FF]">
                <li> Fully remote learning experience</li>
                <li>Completely free (no tuition)</li>
                <li>Ability to understand and communicate in English</li>
                <li>Commitment of 10–15 hours per week</li>
              </ul>
            </p>
          </div>

          <div className="md:w-1/2  rounded-lg lg:mt-[4em] mx-auto items-center">
            <img
              src={school}
              alt="school"
              className="text-center mx-auto items-center w-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 mx-auto items-center ">
          <p className="text-[28px] font-bold text-start mb-5">
            Career Pathways
          </p>

          <CareerPathway />
          <BonusPathway />
        </div>
      </div>

      <div className="bg-white ">
        <div className="container py-14 px-10 mx-auto items-center ">
          <p className="text-[28px] mb-10 font-bold">
            Class Structure & Expectations
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mx-auto items-center justify-center">
            <div>
              <img src={clock} alt="clock" className="" />
              <p className="my-4">2–3 live sessions per week</p>
            </div>
            <div>
              <img src={user} alt="clock" className="" />
              <p className="my-2">
                At least 80% attendance and consistent homework completion
              </p>
            </div>
            <div>
              <img src={zoom} alt="clock" className="" />
              {/* <p className="mt-8 ">Classes are online via Zoom</p> */}
              <p className="my-4">Classes are online via Zoom</p>
            </div>
            <div>
              <img src={bag} alt="clock" className="" />
              <p className="my-4">Join optional in-person community events</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="container pb-[4em] px-10 mx-auto items-center ">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mx-auto lg:mb-[4em]  ">
            <div>
              <img src={mentor} alt="clock" className="w-100" />
            </div>
            <div>
              <p className="text-start text-[45px] font-extrabold">
                Instructors
              </p>
              <p className="text-[18px] my-5">
                Classes are taught by industry professionals who volunteer to
                support your learning journey. We focus on learning through
                realistic projects, not just lectures. You’ll build practical
                work, receive feedback, and grow your confidence by doing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5  mx-auto  ">
            <div>
              <p className="text-start text-[45px] font-extrabold">
                Active Participation
              </p>
              <p className="text-[18px] my-5">
                This is not a passive, watch-and-forget program. Students are
                expected to be motivated, consistent, and ready to practice
                weekly.
              </p>
            </div>
            <div>
              <img src={demo} alt="clock" className="w-100" />
            </div>
          </div>
        </div>
      </div>

      <section className="pb-10  ">
        <div className="container px-10 mx-auto">
          <h2 className="text-[28px] font-bold  mb-12  tracking-wide">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4  mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-xl pr-4  font-bold">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div
                    className="px-6 pb-6 pt-2 text-gray-500 text-lg border-t border-gray-200 animate-in fade-in slide-in-from-top-2 faq-answer"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                    style={{
                      listStyleType: "disc",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TechSchool;
