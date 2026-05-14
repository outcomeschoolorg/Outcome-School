import two from "../assets/images/samson.png";
import sharon from "../assets/images/sharon.png";

import { useState } from "react";
import NavBar from "../Component/NavBar";
import Modal from "../Component/Modal";
import Footer from "../Component/Footer";

const BoardDirector = () => {
  const [openSamson, setOpenSamson] = useState(false);
  const [openElijah, setOpenElijah] = useState(false);
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
            {/* Samson */}
            <div className="bg-[#F4F4FE] rounded-[10px] px-8 py-14">
              <img
                src={two}
                alt="Samson"
                className="w-100 mx-auto rounded-full"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] ">Samson Akinola</p>
                <p className="font-semibold text-[20px]  mt-4">
                  Outcome School’s Mission Servant
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] text-[16px] hover:underline cursor-pointer"
                onClick={() => setOpenSamson(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>

            {/* Elijah */}
            <div className="bg-[#F4F4FE] rounded-[10px] px-8 py-14">
              <img
                src={sharon}
                alt="Elijah"
                className="w-100 mx-auto rounded-full"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] ">
                  Dr. Sharon Attipoe-Dorcoo
                </p>
                <p className="font-semibold text-[20px] mt-4">
                  Senior Human-Centered Designer
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenElijah(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Modal Usage */}
      <Modal
        isOpen={openSamson}
        onClose={() => setOpenSamson(false)}
        title="Samson Akinola"
        imageSrc={two}
        linkedinUrl="https://www.linkedin.com/in/akinishuman/"
      >
        <p>
          <b>Samson Akinola </b> serves as Board Secretary of Outcome School’s
          Board of Directors, bringing a deep passion for mentorship, youth
          empowerment, and creating equitable pathways into technology and
          entrepreneurship. Guided by Outcome School’s mission to empower
          underrepresented young people of color from less privileged
          backgrounds, Samson is committed to helping youth discover their
          hidden talents, build practical skills, and reach their full
          potential. His belief in skill-based empowerment was shaped during his
          time as a student in Europe, where he became inspired by Germany’s
          “Ausbildung” dual vocational training system, which combines classroom
          learning with hands-on workplace experience to prepare individuals for
          meaningful careers. With an M.B.A. from the University of Southern
          Indiana, Samson brings both strategic insight and a heart for service
          to his role, supporting Outcome School’s vision of creating
          opportunities, reducing future poverty, and building a more thriving,
          peaceful, and innovative society.
        </p>
      </Modal>

      <Modal
        isOpen={openElijah}
        onClose={() => setOpenElijah(false)}
        title="Dr. Sharon Attipoe-Dorcoo"
        imageSrc={sharon}
        linkedinUrl="https://www.linkedin.com/in/sharonattipoe-dorcoo/"
      >
        <p className="mb-5">
          <b></b>
        </p>
        <p className="mb-5">
          <b>Dr. Sharon Attipoe-Dorcoo</b> serves on Outcome School’s Board of
          Directors, bringing more than two decades of experience in strategy,
          research, evaluation, governance, and equity-driven innovation. As
          Principal of TERSHA LLC, she uses data storytelling, systems thinking,
          and human-centered design to help mission-aligned organizations
          strengthen impact and serve communities more effectively. Her career
          spans leadership and advisory work with the U.S. Department of
          Homeland Security, the Centers for Disease Control and Prevention,
          philanthropic networks, and civil society organizations. With
          expertise in culturally responsive design, developmental evaluation,
          language access, accessibility, community health, and workforce
          development, Dr. Sharon brings analytical rigor and a deep commitment
          to amplifying structurally underrepresented voices. At Outcome School,
          she supports the mission of empowering underrepresented young people
          through thoughtful governance, inclusive strategy, and a belief in
          creating pathways that help individuals and communities thrive. She
          holds a Ph.D. in Health Policy and an M.P.H. from the University of
          Texas School of Public Health.
        </p>
      </Modal>

      <Footer />
    </>
  );
};

export default BoardDirector;
