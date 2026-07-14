import Samson from "../assets/images/samson.png";
import Sharon from "../assets/images/sharon.png";
import DonaldDea from "../assets/images/Donald Dea.png";
import RamonaJSmith from "../assets/images/Ramona J Smith.png";
import AngelicaTolentino from "../assets/images/AngelicaTolentino.png";

import { useState } from "react";
import NavBar from "../Component/NavBar";
import Modal from "../Component/Modal";
import Footer from "../Component/Footer";

type Director = {
  name: string;
  img: string;
  title: string;
  description: string;
  linkedinUrl: string;
};

const DirectorsData: Director[] = [
  {
    name: "Donald Dea",
    img: DonaldDea,
    title: "Strategist",
    description:
      "serves as Board Chair of Outcome School, bringing 40 years of experience in board governance, capital strategy, M&A, and executive leadership across corporate, technology, education, and nonprofit sectors. His career spans strategic advisory work, board leadership, acquisition-driven growth, and institutional development, with a focus on helping organizations align strategy, structure, and execution during critical stages of scale and transformation. Donald’s background includes directing more than $200 million in M&A at Xerox, chairing multiple boards, leading major governance and capital initiatives, and designing Executive in Residence programs across national business schools. At Outcome School, he brings independent judgment, disciplined governance, and a deep commitment to building long-term value through clear strategy, strong leadership, and mission-aligned growth. Donald holds an M.B.A. in Finance from Duke University.",
    linkedinUrl: "https://www.linkedin.com/in/dondea/",
  },
  {
    name: "Ramona J Smith",
    img: RamonaJSmith,
    title: "Entrepreneur",
    description:
      "serves as Board Treasurer of Outcome School, bringing a powerful blend of communication excellence, leadership, service, and community impact to the organization. As the 2018 Toastmasters International World Champion of Public Speaking, Ramona is globally recognized for her ability to inspire, educate, and connect with diverse audiences through clarity, confidence, and purpose. Her background spans public speaking, communication coaching, donor development, youth and family services, and military leadership, reflecting a deep commitment to empowerment, resilience, and transformational growth. At Outcome School, Ramona brings strategic insight, disciplined leadership, and a strong belief in helping people find their voice, overcome barriers, and reach their full potential.",
    linkedinUrl: "https://www.linkedin.com/in/ramona-j-smith-61390743/",
  },
  {
    name: "Samson Akinola",
    img: Samson,
    title: "Outcome School’s Mission Servant",
    description:
      "serves as Board Secretary of Outcome School’s Board of Directors, bringing a deep passion for mentorship, youth empowerment, and creating equitable pathways into technology and entrepreneurship. Guided by Outcome School’s mission to empower underrepresented young people of color from less privileged backgrounds, Samson is committed to helping youth discover their hidden talents, build practical skills, and reach their full potential. His belief in skill-based empowerment was shaped during his time as a student in Europe, where he became inspired by Germany’s “Ausbildung” dual vocational training system, which combines classroom learning with hands-on workplace experience to prepare individuals for meaningful careers. With an M.B.A. from the University of Southern Indiana, Samson brings both strategic insight and a heart for service to his role, supporting Outcome School’s vision of creating opportunities, reducing future poverty, and building a more thriving, peaceful, and innovative society.",
    linkedinUrl: "https://www.linkedin.com/in/akinishuman/",
  },
  {
    name: "Dr. Sharon Attipoe-Dorcoo",
    img: Sharon,
    title: "Senior Human-Centered Designer",
    description:
      "serves on Outcome School’s Board of Directors, bringing more than two decades of experience in strategy, research, evaluation, governance, and equity-driven innovation. As Principal of TERSHA LLC, she uses data storytelling, systems thinking, and human-centered design to help mission-aligned organizations strengthen impact and serve communities more effectively. Her career spans leadership and advisory work with the U.S. Department of Homeland Security, the Centers for Disease Control and Prevention, philanthropic networks, and civil society organizations. With expertise in culturally responsive design, developmental evaluation, language access, accessibility, community health, and workforce development, Dr. Sharon brings analytical rigor and a deep commitment to amplifying structurally underrepresented voices. At Outcome School, she supports the mission of empowering underrepresented young people through thoughtful governance, inclusive strategy, and a belief in creating pathways that help individuals and communities thrive. She holds a Ph.D. in Health Policy and an M.P.H. from the University of Texas School of Public Health.",
    linkedinUrl: "https://www.linkedin.com/in/sharonattipoe-dorcoo/",
  },
  {
    name: "Angelica Tolentino",
    img: AngelicaTolentino,
    title: "CPA",
    description:
      "CPA, serves on Outcome School’s Board of Directors, bringing more than a decade of experience in leadership, organizational effectiveness, talent development, and cross-functional team management. As a Senior Manager at Vialto Partners, she has built a strong track record of guiding teams, strengthening operations, and helping organizations perform more effectively. Beyond her professional work, Angelica is deeply committed to mentorship, leadership development, and expanding access to opportunity for students and emerging professionals. Her community leadership reflects a strong belief in the power of collaboration to support young people. Most recently, she served as Program Director for a community-based implementation of Toastmasters International’s Youth Leadership Program, bringing together Toastmasters leaders, the Anderson Munger Family YMCA, and Rotary-affiliated community partners to help local high school students strengthen their communication and leadership skills. At Outcome School, Angelica supports the mission of empowering underserved youth through thoughtful governance, strategic partnerships, and a commitment to helping more young people build the skills, confidence, and professional connections needed to thrive in their careers and communities.",
    linkedinUrl: "https://www.linkedin.com/in/angelicarossanatolentino/",
  },
];
const BoardDirector = () => {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(
    null,
  );
  // const [openAngela, setOpenAngela] = useState(false);

  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
          <p className="text-black text-center font-extrabold text-[45px] mb-10">
            Meet Our Strategic Board of Directors
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto item-center justify-center mt-6 lg:mt-10">
            {DirectorsData.map((director) => (
              <div className="bg-[#F4F4FE] rounded-[10px] px-8 py-14">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={director.img}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]">{director.name}</p>
                  <p className="font-semibold text-[20px]">{director.title}</p>
                </div>
                <p
                  className="mt-10 font-medium hover:text-[#6036E1] text-[16px] hover:underline cursor-pointer"
                  onClick={() => setSelectedDirector(director)}
                >
                  Learn More
                  <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={selectedDirector !== null}
        onClose={() => setSelectedDirector(null)}
        title={selectedDirector?.name || ""}
        imageSrc={selectedDirector?.img || ""}
        linkedinUrl={selectedDirector?.linkedinUrl || ""}
      >
        <p>
          <b>{selectedDirector?.name}</b> {selectedDirector?.description}
        </p>
      </Modal>
      <Footer />
    </>
  );
};

export default BoardDirector;
