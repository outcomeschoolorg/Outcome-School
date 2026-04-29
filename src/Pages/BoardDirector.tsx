
import two from "../assets/images/samson.png";
import sharon from "../assets/images/sharon.png"

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
      <NavBar/>

      <div className="bg-white">
                <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
          <p className="text-black text-center font-extrabold text-[45px] mb-10">
            Meet Our Strategic Board of Directors
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto item-center justify-center mt-6 lg:mt-10">
            {/* Samson */}
            <div className="bg-[#F4F4FE] rounded-[10px] px-8 py-14">
              <img src={two} alt="Samson" className="w-100 mx-auto rounded-full" />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] ">Samson Akinola</p>
                <p className="font-semibold text-[20px]  mt-4">Founder and CEO of Outcome School</p>
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
              <img src={sharon} alt="Elijah" className="w-100 mx-auto rounded-full" />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] ">Dr. Sharon Attipoe-Dorcoo</p>
                <p className="font-semibold text-[20px] mt-4">Senior Human-Centered Designer</p>
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
          <b>Samson Akinola </b>  is the president/secretary of Outcome School's board of directors , our mission is to empower underrepresented young people of color from less privileged backgrounds, and enabling them to drive innovation, create solutions, and uplift their communities through tech-driven and entrepreneurial pathways. <br /><br />
          Samson’s passion for skill empowerment began while he was a student in Europe. He was fascinated with a dual vocational training system called "Ausbildung", a structured program in Germany that prepares individuals for specific careers through a combination of classroom instruction and hands-on experience in a workplace. He holds an MBA from University of Southern Indiana.
        </p>
      </Modal>

      <Modal
        isOpen={openElijah}
        onClose={() => setOpenElijah(false)}
        title="Dr. Sharon Attipoe-Dorcoo"
        imageSrc={sharon}
        linkedinUrl="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFd1-vTTjcBKQAAAZs6XaPwSBtAR9dt2QJo_ZakdLb6CWr5MtdDU5vEMxSm2JOhGYq5qBRsWPNqgg_4PYFTSknidaQvjS9ueCsTN9nLKlhYavCWOxBKzi6OIKxRgBuWVfizj-g=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsharonattipoe-dorcoo%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"
      >
        <p className="mb-5">
          I’m the Principal of TERSHA LLC—an award-winning seasoned strategist, author, and leader who uses data storytelling and leadership to establish strong governance.
        </p>
        <p className="mb-5">
          A multilingual systems thinker with over two decades of experience, I specialize in advancing culturally responsive engineering design, research, and evaluation to support mission-aligned organizations and their communities.
        </p>
        <p className="mb-5">
          My career spans leadership roles at the U.S. Department of Homeland Security, Centers for Disease Control and Prevention, and numerous philanthropic and civil society networks. My expertise includes developmental evaluation, artistic facilitation, economics, technical assistance, systems design, language access, accessibility, mobile healthcare, and community health workforce development.
        </p>
        <p className="mb-5">
          I have authored more than 70 academic publications and am recognized as a thought leader in equity-driven innovation.
        </p>
        <p className="mb-5">
          Notable recognitions include being a 2022 Public Voices Fellow with AcademyHealth, an inaugural member of the Global South Arts and Health Envoy, Adjunct Faculty at Texas Woman’s University, board member, leadership coach, and a nominee of the National Academy of Medicine Emerging Leaders Forum.
        </p>
        <p className="mb-5">
          My work is deeply grounded in cultural humility, human-centered design, and a commitment to amplifying structurally underrepresented voices. I have mentored MPH students through internships at my organization, helping them complete capstone projects and, in some cases, publish their first peer-reviewed articles.
        </p>
        <p className="mb-5">
          Holding a PhD in Health Policy and an MPH from the University of Texas School of Public Health, I bring analytical rigor and lived experience—as a wife and mom—to every partnership.
        </p>
      </Modal>

            
      <Footer />
    </>
  );
};

export default BoardDirector;