import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import Modal from "../Component/Modal";
import { useState } from "react";
import Olivia from "../assets/images/Olivia.jpeg";
import BrianCozzolino from "../assets/images/BrianCozzolino.jpg";

type Concil = {
  name: string;
  img: string;
  title: string;
  description: string;
  linkedinUrl: string;
};

const ConcilsData: Concil[] = [
  {
    name: "Olivia Duer Nelson",
    img: Olivia,
    title: "Strategic Advisor",
    description:
      "is a member of Outcome School’s Strategic Advisory Council and a United States Air Force Colonel with more than 26 years of leadership experience. Her career spans military executive leadership, higher education, nonprofit board service, fundraising, strategic communications, technology integration, and cross-sector partnerships. Throughout her service, Olivia has led complex organizations, developed high-performing teams, and helped institutions translate ambitious goals into clear priorities, sustainable systems, and measurable results. She brings extensive experience in education, training, organizational transformation, and resource development. While leading the Air Force ROTC program at the University of Southern California, she tripled program participation, improved student retention, increased women’s representation, expanded scholarship access, and raised approximately $300,000 to support leadership development and experiential learning. She has also led organizations of more than 500 personnel, managed millions of dollars in resources, supported training programs serving tens of thousands of learners annually, and guided strategic planning for multibillion-dollar portfolios. She joined Outcome School because she believes deeply in creating practical pathways to opportunity for talented learners who may not have equal access to education, mentorship, and career networks. Her years in Los Angeles strengthened her appreciation for the city’s talent, ambition, and diverse communities, as well as the barriers many young people continue to face. As a Strategic Advisory Council member, Olivia provides guidance in leadership development, governance, responsible technology, partnerships, fundraising, operational growth, and building scalable systems that help Outcome School students develop skills and chart meaningful paths toward success.",
    linkedinUrl: "https://www.linkedin.com/in/oliviaduernelson/",
  },
  {
    name: "Brian Cozzolino",
    img: BrianCozzolino,
    title: "Strategic Advisor",
    description:
      "is a commercial strategy leader with 15 years of experience building and scaling ecosystems across emerging and developed markets. He has led high-stakes market entries, cross-border partnerships, and multi-stakeholder initiatives spanning the Middle East, Southeast Asia, Latin America, and Europe. At Gulf Intelligence, he has directed large-scale R&D consortia involving Fortune 500 firms, built commercial platforms connecting industry and technology stakeholders, and driven market expansion efforts that strengthened regional positioning and revenue growth. His focus is aligning corporate, government, and institutional partners to move complex initiatives from strategy into execution. A former All-American lacrosse captain at SMU and MIT Sloan-certified in AI strategy, Brian brings a practical operator’s lens to talent-to-employment pathways, employer partnerships, and the commercial systems that turn capability into outcomes. He currently serves on the Strategic Advisory Council at Outcome School.",
    linkedinUrl: "https://www.linkedin.com/in/briancozzolino/",
  },
];

const StrategicAdvisoryCouncil = () => {
  const [selectedConcil, setSelectedConcil] = useState<Concil | null>(null);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <NavBar />
      </nav>
      <div className="bg-white">
        <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
          <p className="text-black text-center font-extrabold text-[45px] mb-10">
            Meet Our Strategic Advisory Council
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-6 lg:mt-10">
            {" "}
            {ConcilsData.map((Concil) => (
              <div className="bg-[#F4F4FE] rounded-[10px] px-8 py-14">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={Concil.img}
                    alt={Concil.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-5 text-center">
                  <p className="font-bold text-[22px]">{Concil.name}</p>
                  <p className="font-semibold text-[20px]">{Concil.title}</p>
                </div>
                <p
                  className="mt-10 font-medium hover:text-[#6036E1] text-[16px] hover:underline cursor-pointer"
                  onClick={() => setSelectedConcil(Concil)}
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
        isOpen={selectedConcil !== null}
        onClose={() => setSelectedConcil(null)}
        title={selectedConcil?.name || ""}
        imageSrc={selectedConcil?.img || ""}
        linkedinUrl={selectedConcil?.linkedinUrl || ""}
      >
        <p>
          <b>{selectedConcil?.name}</b> {selectedConcil?.description}
        </p>
      </Modal>
      <Footer />
    </>
  );
};

export default StrategicAdvisoryCouncil;
