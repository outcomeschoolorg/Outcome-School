import { useState } from "react";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import one from "../assets/images/EduTrack1.jpg";
import two from "../assets/images/EduTrack2.jpg";
import three from "../assets/images/EduTrack3.jpg";
import four from "../assets/images/EduTrack4.png";
import gct1 from "../assets/images/GCT1.jpg";
import gct2 from "../assets/images/GCT2.jpg";
import gct3 from "../assets/images/GCT3.jpg";
import gct4 from "../assets/images/gct4.png";
import cbt from "../assets/images/CBT.jpg";
import cbt1 from "../assets/images/CBT1.jpg";
import cbt2 from "../assets/images/CBT2.jpg";
import cbt3 from "../assets/images/CBT3.jpg";
import sunshineKitchen1 from "../assets/images/SunshineKitchen1.png";
import sunshineKitchen2 from "../assets/images/SunshineKitchen2.png";
import sunshineKitchen3 from "../assets/images/SunshineKitchen3.png";
import sunshineKitchen4 from "../assets/images/SunshineKitchen4.png";
import PENNY1 from "../assets/images/PENNY1.png";
import PENNY3 from "../assets/images/PENNY3.png";
import PENNY4 from "../assets/images/PENNY4.png";

import { Helmet } from "react-helmet-async";

const TraineeProject = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Trainee Project | Outcome School</title>
        <meta
          name="description"
          content="Explore real-world projects built by Outcome School trainees, showcasing practical skills in software development and problem-solving."
        />
      </Helmet>
      <NavBar />
      <div className="bg-white">
        <div className="container px-10 pt-[10em] mx-auto items-center">
          <p className="text-[45px] font-extrabold text-center">
            Our Trainee Projects
          </p>
          <p className="my-5 font-medium">
            Real Projects. Real Teamwork. Real Growth.
          </p>
          <p className="my-5 text-[16px]">
            Every project showcased at our Product Demo Event is built by
            Outcome School trainees, either in small teams or as individual
            creators who design, develop, and present fully functional products
            to the public. These projects don’t disappear after Demo Day;
            students continue refining them into polished portfolio pieces that
            attract employers, internship partners, and even early‑stage
            investors.
          </p>
          <p className="my-5 text-[16px]">
            Over 12 weeks, trainees work in two‑week sprints, mirroring the
            workflow of professional engineers and designers. They begin by
            brainstorming ideas, defining a clear MVP, and planning their
            product. From there, they move into UX/UI design in Figma,
            engineering in modern tech stacks, and iterative testing until their
            applications are ready to launch and present.
          </p>

          <p className="my-5 text-[16px]">
            Throughout the program, teams collaborate daily in a fully remote
            environment using tools like Slack, Jira, and GitHub. They learn how
            to plan work, write clean code, review changes, communicate
            effectively, and deliver real outcomes, skills that translate
            directly into the workplace. The program concludes with a 15‑minute
            live demo, where each trainee or team presents their finished
            product, walks through their build process, and shares the key
            lessons that shaped their growth as emerging technologists.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mb-8 ">
            {/* Project Card 1 */}
            <div className="border border-[#7D65ED] rounded-[10px] px-3 py-3 flex flex-col h-full">
              <div className="flex gap-5 items-center mb-5">
                <div className="w-50">
                  <img
                    src={four}
                    alt="four"
                    onClick={() => setSelectedImage(four)}
                    className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                  />
                </div>
                <div>
                  <h1 className="text-[25px] font-bold">EduTrack</h1>
                  <p className="text-[#444269]">
                    Python, Pandas (data handling), Matplotlib (visualization),
                    Python-Docx (report generation), Streamlit (app UI).
                  </p>
                </div>
              </div>
              <p className="text-[#151223] text-[16px] mb-5 text-start">
                EduTrack is an automated student reporting system that
                calculates grades, GPA, and rankings, then generates a complete,
                professional academic transcript instantly from entered student
                data. Other features include dashboards, charts, bulk exports,
                and conduct tracking.
              </p>
              <div className="flex gap-4 mt-auto pt-3">
                <button
                  onClick={() => setOpenCard(openCard === 1 ? null : 1)}
                  className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] text-white px-4 py-3 hover:text-[#6036E1] hover:bg-white"
                >
                  <i className="fa-solid fa-eye mr-2"></i>

                  {openCard === 1 ? "View Less" : "View More"}
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/presentation/d/1m--4FBwJXPEzcUgDaIJyBG5EhtZgVXYo6ZPX_pTzR4Y/edit?slide=id.p1#slide=id.p1",
                      "_blank",
                    )
                  }
                  className=" font-semibold border-2 border-[#6036E1] text-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-4 py-3 text bg-white"
                >
                  <i className="fa-solid fa-book mr-2"></i>
                  Presentation Slides
                </button>
              </div>

              {/* Participants section - only shows when showParticipants1 is true */}
              {openCard === 1 && (
                <div className="mt-5">
                  <hr className="my-5 border border-gray-300" />
                  <p className="font-bold text-black">Participants</p>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-7 mt-5 mb-8">
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/noni-freebourne-088026308/",
                          "_blank",
                        )
                      }
                      className="text-center py-2 border-2 border-[#BEB9F9] rounded-[100px]"
                    >
                      Noni Freebourne
                      <i className="fa-brands fa-linkedin text-[25px] text-blue-800 ml-2"></i>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-5 mb-8">
                    <img
                      src={one}
                      alt="EduTrack 1"
                      onClick={() => setSelectedImage(one)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={two}
                      alt="our"
                      onClick={() => setSelectedImage(two)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={three}
                      alt="our"
                      onClick={() => setSelectedImage(three)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Project Card 2 */}
            <div className="border border-[#7D65ED] rounded-[10px] px-3 py-3 flex flex-col h-full">
              <div className="flex gap-2 items-center mb-5">
                <div className="w-80">
                  <img
                    src={gct4}
                    alt="gct4"
                    onClick={() => setSelectedImage(gct4)}
                    className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                  />
                </div>
                <div>
                  <h1 className="text-[25px] font-bold">GCT Auto-Recon Tool</h1>
                  <p className="text-[#444269]">
                    Python Core, Pandas Engine, Streamlit UI
                  </p>
                </div>
              </div>
              <p className="text-[#151223] text-[16px] mb-5 text-start">
                GCT Auto-Recon is a fully automated General Consumption Tax
                reconciliation and reporting tool designed specifically for
                micro‑businesses, simplifying compliance, reducing errors, and
                saving hours of manual work every month. It also reconciles,
                tracks, and reports for micro‑businesses, turning complex tax
                tasks into a fast, stress‑free workflow.
              </p>
              <div className="flex gap-4 mt-auto pt-3">
                <button
                  onClick={() => setOpenCard(openCard === 2 ? null : 2)}
                  className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] text-white px-4 py-3 hover:text-[#6036E1] hover:bg-white"
                >
                  <i className="fa-solid fa-eye mr-2"></i>

                  {openCard === 2 ? "View Less" : "View More"}
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/presentation/d/1y4GEJAWOEgL2yl1s_fFchERylDYm9enh/edit?slide=id.p1#slide=id.p1",
                      "_blank",
                    )
                  }
                  className=" font-semibold border-2 border-[#6036E1] text-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-4 py-3  hover:bg-whitt"
                >
                  <i className="fa-solid fa-book mr-2"></i>
                  Presentation Slides
                </button>
              </div>

              {/* Participants section - only shows when showParticipants2 is true */}
              {openCard === 2 && (
                <div className="mt-5">
                  <hr className="my-5 border border-gray-300" />
                  <p className="font-bold text-black">Participants</p>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-5 mb-8">
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/jordache-wilson-5a9b3034/",
                        )
                      }
                      className="text-center py-2 border-2 border-[#BEB9F9] rounded-[100px]"
                    >
                      Jordache Wilson
                      <i className="fa-brands fa-linkedin text-[25px] text-blue-800 ml-2"></i>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-8">
                    <img
                      src={gct1}
                      alt="GCT image 1"
                      onClick={() => setSelectedImage(gct1)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={gct2}
                      alt="GCT image 2"
                      onClick={() => setSelectedImage(gct2)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={gct3}
                      alt="GCT image 3"
                      onClick={() => setSelectedImage(gct3)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Project Card 3 */}
            <div className="border border-[#7D65ED] rounded-[10px] px-3 py-3 flex flex-col h-full">
              <div className="flex gap-2 items-center mb-5">
                <div className="w-80">
                  <img
                    src={cbt}
                    alt="cbt"
                    onClick={() => setSelectedImage(cbt)}
                    className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                  />
                </div>
                <div>
                  <h1 className="text-[25px] font-bold">CBT System</h1>
                  <p className="text-[#444269]">
                    Python Core, Pandas Engine, Streamlit UI.
                  </p>
                </div>
              </div>
              <p className="text-[#151223] text-[16px] mb-5 text-start">
                CBT System eliminates manual grading, reduces errors, delivers
                instant feedback, tracks progress automatically, and generates
                randomized test versions for more secure and efficient
                assessments.
              </p>
              <div className="flex gap-4 mt-auto pt-3">
                <button
                  onClick={() => setOpenCard(openCard === 3 ? null : 3)}
                  className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] text-white px-4 py-3 hover:text-[#6036E1] hover:bg-white"
                >
                  <i className="fa-solid fa-eye mr-2"></i>

                  {openCard === 3 ? "View Less" : "View More"}
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/presentation/d/1wi-ojdiquEPn06C9WosNzgw47hsiO_kUqQL2p9soy9Y/edit?usp=sharing",
                      "_blank",
                    )
                  }
                  className=" font-semibold border-2 border-[#6036E1] text-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-4 py-3  hover:bg-whitt"
                >
                  <i className="fa-solid fa-book mr-2"></i>
                  Presentation Slides
                </button>
              </div>

              {/* Participants section - only shows when showParticipants2 is true */}
              {openCard === 3 && (
                <div className="mt-5">
                  <hr className="my-5 border border-gray-300" />
                  <p className="font-bold text-black">Participants</p>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-5 mb-8">
                    <button
                      onClick={() =>
                        window.open("https://www.linkedin.com/in/adeyinka622/")
                      }
                      className="text-center py-2 px-2 border-2 border-[#BEB9F9] rounded-[100px]"
                    >
                      Adeyinka (Gideon) Adesina
                      <i className="fa-brands fa-linkedin text-[25px] text-blue-800 ml-2"></i>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-8">
                    <img
                      src={cbt}
                      alt="CBT image 1"
                      onClick={() => setSelectedImage(cbt)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={cbt1}
                      alt="CBT image 1"
                      onClick={() => setSelectedImage(cbt1)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={cbt2}
                      alt="cbt image 2"
                      onClick={() => setSelectedImage(cbt2)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={cbt3}
                      alt="cbt image 3"
                      onClick={() => setSelectedImage(cbt3)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Project Card 4 */}
            <div className="border border-[#7D65ED] rounded-[10px] px-3 py-3 flex flex-col h-full">
              <div className="flex gap-2 items-center mb-5">
                <div className="w-80">
                  <img
                    src={sunshineKitchen3}
                    alt="sunshineKitchen3"
                    onClick={() => setSelectedImage(sunshineKitchen3)}
                    className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                  />
                </div>
                <div>
                  <h1 className="text-[25px] font-bold">
                    Sunshine Kitchen: A Modern Front-End Experience
                  </h1>
                  <p className="text-[#444269]">
                    Pure HTML5 for semantics and CSS3 for logic and styling.
                  </p>
                </div>
              </div>
              <p className="text-[#151223] text-[16px] mb-5 text-start">
                The Sunshine Kitchen front‑end project is a modern, visually
                vibrant web experience designed to capture the soul of authentic
                Jamaican cuisine. Built with a focus on clarity, warmth, and
                cultural richness, the site blends bold colors, smooth
                interactions, and clean typography to create an inviting digital
                presence for a local Jamaican restaurant.
              </p>
              <div className="flex gap-4 mt-auto pt-3">
                <button
                  onClick={() => setOpenCard(openCard === 4 ? null : 4)}
                  className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] text-white px-4 py-3 hover:text-[#6036E1] hover:bg-white"
                >
                  <i className="fa-solid fa-eye mr-2"></i>

                  {openCard === 4 ? "View Less" : "View More"}
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/presentation/d/1HJfl82NDDOnCK_DpnwZW3Pnhiqvn4uTBFtsuVflDwl0/edit?slide=id.p5#slide=id.p5",
                      "_blank",
                    )
                  }
                  className=" font-semibold border-2 border-[#6036E1] text-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-4 py-3  hover:bg-whitt"
                >
                  <i className="fa-solid fa-book mr-2"></i>
                  Presentation Slides
                </button>
              </div>

              {/* Participants section - only shows when showParticipants2 is true */}
              {openCard === 4 && (
                <div className="mt-5">
                  <hr className="my-5 border border-gray-300" />
                  <p className="font-bold text-black">Participants</p>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-5 mb-8">
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/shawn-segree-2b5619277/?skipRedirect=true",
                        )
                      }
                      className="text-center py-2 px-2 border-2 border-[#BEB9F9] rounded-[100px]"
                    >
                      Shawn Segree
                      <i className="fa-brands fa-linkedin text-[25px] text-blue-800 ml-2"></i>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-8">
                    <img
                      src={sunshineKitchen3}
                      alt="sunshineKitchen3"
                      onClick={() => setSelectedImage(sunshineKitchen3)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={sunshineKitchen1}
                      alt="sunshineKitchen1"
                      onClick={() => setSelectedImage(sunshineKitchen1)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={sunshineKitchen2}
                      alt="sunshineKitchen2"
                      onClick={() => setSelectedImage(sunshineKitchen2)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Project Card 5 */}
            <div className="border border-[#7D65ED] rounded-[10px] px-3 py-3 flex flex-col h-full">
              <div className="flex gap-2 items-center mb-5">
                <div className="w-80">
                  <img
                    src={PENNY1}
                    alt="PENNY WISE BUDGETING APPLICATION"
                    onClick={() => setSelectedImage(PENNY1)}
                    className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                  />
                </div>
                <div>
                  <h1 className="text-[25px] font-bold">
                    PENNY WISE BUDGETING APPLICATION
                  </h1>
                  <p className="text-[#444269]">Figma  and FigJam.</p>
                </div>
              </div>
              <p className="text-[#151223] text-[16px] mb-5 text-start">
                Penny Wise is a modern budgeting application designed to
                simplify financial management. It helps users track spending,
                plan goals, and build healthier money habits through clean
                design, smart automation, and real‑time insights—making
                financial clarity effortless and empowering for everyday life.
              </p>
              <div className="flex gap-4 mt-auto pt-3">
                <button
                  onClick={() => setOpenCard(openCard === 5 ? null : 5)}
                  className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] text-white px-4 py-3 hover:text-[#6036E1] hover:bg-white"
                >
                  <i className="fa-solid fa-eye mr-2"></i>

                  {openCard === 5 ? "View Less" : "View More"}
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/presentation/d/1n7N_J5CHDgyRR3h9hVqVdo2h719T_F6DXFJn5XIbiX8/edit?usp=sharing",
                      "_blank",
                    )
                  }
                  className=" font-semibold border-2 border-[#6036E1] text-[#6036E1] rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-4 py-3  hover:bg-whitt"
                >
                  <i className="fa-solid fa-book mr-2"></i>
                  Presentation Slides
                </button>
              </div>

              {/* Participants section - only shows when showParticipants2 is true */}
              {openCard === 5 && (
                <div className="mt-5">
                  <hr className="my-5 border border-gray-300" />
                  <p className="font-bold text-black">Participants</p>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-5 mb-8">
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/amare-oluwaseun-950b89241/",
                        )
                      }
                      className="text-center py-2 px-2 border-2 border-[#BEB9F9] rounded-[100px]"
                    >
                      Larry Amare
                      <i className="fa-brands fa-linkedin text-[25px] text-blue-800 ml-2"></i>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-8">
                    <img
                      src={PENNY1}
                      alt="PENNY WISE BUDGETING APPLICATION"
                      onClick={() => setSelectedImage(PENNY1)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={PENNY3}
                      alt="PENNY WISE BUDGETING APPLICATION"
                      onClick={() => setSelectedImage(PENNY3)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                    <img
                      src={PENNY4}
                      alt="PENNY WISE BUDGETING APPLICATION"
                      onClick={() => setSelectedImage(PENNY4)}
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default TraineeProject;
