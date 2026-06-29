import two from "../assets/images/samson.png";
import three from "../assets/images/angelaaa.png";
import vianey from "../assets/images/vianeyy.png";
import Patel from "../assets/images/Patel.png";
import Belen from "../assets/images/Belen.png";
import Christian from "../assets/images/Christian.png";
import Dhruvi from "../assets/images/Dhruvi.png";
import Modupe from "../assets/images/Modupe.png";
import Addy from "../assets/images/Addy.png";
import Asya from "../assets/images/Asya.png";
import Nida from "../assets/images/Nida.png";

import { useState } from "react";
import NavBar from "../Component/NavBar";
import Modal from "../Component/Modal";
import Footer from "../Component/Footer";

const TeamPage = () => {
  const [openSamson, setOpenSamson] = useState(false);
  const [openNida, setOpenNida] = useState(false);
  const [openAngela, setOpenAngela] = useState(false);
  const [openVianey, setOpenVianey] = useState(false);
  const [openBelen, setOpenBelen] = useState(false);
  const [openPatel, setOpenPatel] = useState(false);
  const [openChristian, setOpenChristian] = useState(false);
  const [openDhruvi, setOpenDhruvi] = useState(false);
  const [openModupe, setOpenModupe] = useState(false);
  const [openAddy, setOpenAddy] = useState(false);
  const [openAsya, setOpenAsya] = useState(false);

  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
          <p className="text-black text-center font-extrabold text-[45px] mb-10">
            Meet our Resilient Team
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto item-center justify-center mt-6 lg:mt-10">
            {/* Samson */}
            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img src={two} alt="Samson" className="mx-auto rounded-full" />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] ">Samson Akinola</p>
                <p className="font-semibold text-[20px] mt-4">
                  Founder and CEO of Outcome School
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenSamson(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>
            <div className="bg-[#F4F4FE] rounded-[10px] px-8  py-14 ">
              <img
                src={Nida}
                alt="one"
                className="text-center mx-auto rounded-full w-[50%]  object-cover"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px]  ">Nida Tazeen</p>
                <p className="font-semibold text-[20px] mt-4">Instructor</p>
              </div>

              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer hover:cursor-pointer"
                onClick={() => setOpenNida(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>

            {/* Angela */}
            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={three}
                alt="Angela"
                className="mx-auto rounded-full w-[50%] "
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] ">Angela Le</p>
                <p className="font-semibold text-[20px] mt-4">UI/UX Designer</p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenAngela(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto item-center justify-center mt-6 lg:mt-10">
            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={vianey}
                alt="Samson"
                className="mx-auto rounded-full w-[50%]"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] ">Vianey Mursio</p>
                <p className="font-semibold text-[20px] mt-4">UX/UI Designer</p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenVianey(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>

            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={Belen}
                alt="Samson"
                className="mx-auto rounded-[100%] h-[50%] w-[50%] "
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] "> Belen Garcia </p>
                <p className="font-semibold text-[20px] mt-4">
                  {" "}
                  Program Manager
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenBelen(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>
            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={Asya}
                alt="Patel"
                className="mx-auto rounded-full w-[50%]"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] "> Asya Greinert </p>
                <p className="font-semibold text-[20px] mt-4">
                  {" "}
                  Product Manager
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenAsya(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto item-center justify-center mt-6 lg:mt-10">
            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={Patel}
                alt="Patel"
                className="mx-auto rounded-full w-[50%]"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] "> Dev Patel </p>
                <p className="font-semibold text-[20px] mt-4">
                  {" "}
                  Software Developer
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenPatel(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>

            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={Christian}
                alt="Patel"
                className="mx-auto rounded-full w-[50%]"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] "> Christian Francisco </p>
                <p className="font-semibold text-[20px] mt-4">
                  {" "}
                  Salesforce Administrator
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenChristian(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>
            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={Addy}
                alt="Patel"
                className="mx-auto rounded-full w-[50%]"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] "> Addy K </p>
                <p className="font-semibold text-[20px] mt-4">
                  {" "}
                  Financial Analyst
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenAddy(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto item-center justify-center mt-6 lg:mt-10">
            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={Dhruvi}
                alt="Patel"
                className="mx-auto rounded-full w-[50%]"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] "> Dhruvi Patel </p>
                <p className="font-semibold text-[20px] mt-4">
                  {" "}
                  Program Designer
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenDhruvi(true)}
              >
                Learn More
                <i className="fa-solid fa-greater-than text-[12px] ml-2"></i>
              </p>
            </div>

            <div className="bg-[#F4F4FE] rounded-[20px] px-8 py-14">
              <img
                src={Modupe}
                alt="Patel"
                className="mx-auto rounded-full w-[50%]"
              />
              <div className="mt-5 text-center">
                <p className="font-bold text-[22px] "> Modupe Ola </p>
                <p className="font-semibold text-[20px] mt-4">
                  {" "}
                  Voice Over Artist
                </p>
              </div>
              <p
                className="mt-10 font-medium hover:text-[#6036E1] hover:underline cursor-pointer"
                onClick={() => setOpenModupe(true)}
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
          I am the founder and CEO of Outcome School, a nonprofit with the
          mission to empower underrepresented young people of color from less
          privileged backgrounds, and enabling them to drive innovation, create
          solutions, and uplift their communities through tech-driven and
          entrepreneurial pathways.
        </p>
        <br />
        <p>
          Samson’s passion for skill empowerment began while he was a student in
          Europe. He was fascinated with a dual vocational training system
          called "Ausbildung", a structured program in Germany that prepares
          individuals for specific careers through a combination of classroom
          instruction and hands-on experience in a workplace. He holds an MBA
          from University of Southern Indiana.
        </p>
      </Modal>
      <Modal
        isOpen={openNida}
        onClose={() => setOpenNida(false)}
        title="Nida Tazeen"
        imageSrc={Nida}
        linkedinUrl="https://www.linkedin.com/in/nida-tazeen/"
      >
        <p>
          I’m a software developer with around five years of experience, mainly
          in integration and building scalable systems. I got into software
          development because I love problem-solving and creating things that
          make processes easier and more efficient.
        </p>{" "}
        <br />
        <p>
          I also enjoy teaching and mentoring, which is why I stepped into an
          instructor role. Helping others learn and grow is really rewarding for
          me.
        </p>
        <br />
        <p>
          I joined Outcome School because I resonate with its mission of
          empowering individuals with practical, industry-relevant skills. I
          appreciate the focus on real-world problem solving and mentorship, and
          I am excited to both contribute and continue learning in such a
          growth-oriented environment.
        </p>
      </Modal>
      <Modal
        isOpen={openAngela}
        onClose={() => setOpenAngela(false)}
        title="Angela Le"
        imageSrc={three}
        linkedinUrl="https://www.linkedin.com/in/angela-le-716748171/"
      >
        <p className="mb-5">
          Angela Le graduated from UC San Diego with a degree in Cognitive
          Science with a Specialization in Design and Interaction. She's a UI/UX
          designer who loves bringing a little magic into everything she
          creates, whether she’s crafting immersive XR worlds, styling whimsical
          fashion pieces, or designing intuitive digital experiences.
        </p>
        <p className="mb-5">
          Angela enjoys turning ideas into experiences that feel intuitive,
          thoughtful, and genuinely enjoyable for people. She has always been
          drawn to creative problem-solving and understanding how people
          interact with the world around them.
        </p>
        <p className="mb-5">
          When she’s not designing, you’ll probably find her baking something
          sweet, creating jewelry, or binging the latest shows with her family.
        </p>
        <p className="mb-5">
          Angela is currently looking for a full-time role where she can hone
          her skills, build something impactful, and collaborate with diverse
          teams that inspire her to grow.
        </p>
      </Modal>

      <Modal
        isOpen={openVianey}
        onClose={() => setOpenVianey(false)}
        title="Vianey Mursio"
        imageSrc={vianey}
        linkedinUrl="https://www.linkedin.com/in/vianeymursio/"
      >
        <p className="mb-5">
          I got into UX/UI design because it sits at the intersection of my two
          core professional interests, art and technology, and aligns deeply
          with my personal values. I’m passionate about designing experiences
          that are not only visually engaging but also intuitive, inclusive, and
          meaningful.
        </p>
        <p className="mb-5">
          Through various academic and hands-on projects, I’ve contributed to
          and led design initiatives that address real-world challenges,
          particularly around accessibility, mental health, and
          community-centered technology. My work focuses on understanding user
          needs through research and translating those insights into thoughtful,
          user-centered interfaces.
        </p>
        <p className="mb-5">
          As part of this non-profit organization, I’m excited to use design as
          a tool for social impact and to help create solutions that improve
          people’s lives while continuing to learn, grow, and strengthen my
          skills as a designer.
        </p>
      </Modal>

      <Modal
        isOpen={openBelen}
        onClose={() => setOpenBelen(false)}
        title=" Belen Garcia "
        imageSrc={Belen}
        linkedinUrl="https://www.linkedin.com/in/belen-g-85a494202/"
      >
        <p className="mb-5">
          I step into Admission and Outreach because I believe the journey to
          education should be just as inspiring as the classes themselves.
        </p>
        <p className="mb-5">
          While my background in communication and analytics taught her how to
          share information effectively, my experience as a teaching assistant
          is what truly taught her how to build lasting relationships..
        </p>
        <p className="mb-5">
          As a first point of contact and dedicated advocate, I am here to help
          prospective students turn their curiosity into a step towards a
          concrete plan for the future.
        </p>
      </Modal>

      <Modal
        isOpen={openPatel}
        onClose={() => setOpenPatel(false)}
        title=" Dev Patel "
        imageSrc={Patel}
        linkedinUrl="https://www.linkedin.com/in/devpatel062/"
      >
        <p className="mb-5">
          I’m a graduate computer science student at Indiana University
          Bloomington who enjoys building practical systems that solve real
          problems for real users.
        </p>
        <p className="mb-5">
          I became a software developer because I was always fascinated by how
          code can turn ideas into working solutions, and even when I was
          younger, I never felt bored staring at a computer screen for six hours
          straight trying to figure things out. Over time, that curiosity turned
          into full-stack projects and AI-driven systems where I could combine
          technical depth with meaningful impact.
        </p>
        <p className="mb-5">
          I’m drawn to Outcome School because it’s not just about building
          software, but about building opportunity through technology, and I’d
          love to contribute not only as a developer but also as a mentor who
          helps others see tech as a powerful tool to create change in their own
          communities.
        </p>
      </Modal>

      <Modal
        isOpen={openChristian}
        onClose={() => setOpenChristian(false)}
        title=" Christian Francisco "
        imageSrc={Christian}
        linkedinUrl="https://www.linkedin.com/in/christian-francisco-8132924b/"
      >
        <p className="mb-5">
          I have been in the IT industry for more than 15 years. I am a
          Salesforce Certified Administrator and Salesforce Certified Platform
          App Builder. I joined Outcome School to share my passion for learning
          and to contribute my knowledge and experience as a Salesforce
          Administrator.
        </p>
      </Modal>

      <Modal
        isOpen={openDhruvi}
        onClose={() => setOpenDhruvi(false)}
        title="Dhruvi Patel"
        imageSrc={Dhruvi}
        linkedinUrl="https://www.linkedin.com/in/dairy-duan-7a5327268/"
      >
        <p className="mb-5">
          I completed my Master’s in Finance at Washington University in St.
          Louis. My background is in financial analysis, with experience in
          reporting, variance analysis, and building models to support
          decision-making. As someone who has studied and lived in different
          countries, including Australia and China. I’ve seen how access to
          education and resources can significantly shape career paths. I’ve met
          people who are just as motivated and capable, but don’t always have
          the opportunity or support to pursue skill-based careers, especially
          in fields like tech.
        </p>
        <p className="mb-5">
          That’s one of the main reasons I chose to become a financial analyst.
          I enjoy working with data and structure, but more importantly, I want
          to use those skills to support real-world impact and decision-making.
        </p>
        <p className="mb-5">
          I joined Outcome School because I really connect with the mission of
          creating pathways for underserved communities. I believe that behind
          every strong program is a solid financial foundation, and I’m excited
          to contribute by helping build that structure and support the
          organization’s growth.
        </p>
        <p className="mb-5">
          Really happy to be part of the team and looking forward to
          contributing!
        </p>
      </Modal>
      <Modal
        isOpen={openModupe}
        onClose={() => setOpenModupe(false)}
        title="Modupe Ola"
        imageSrc={Modupe}
        linkedinUrl="https://www.linkedin.com/in/modupeolabeauty/"
      >
        <p className="mb-5">
          A voice-over artist who is passionate about using her voice to
          inspire, educate, and inform her world.
        </p>
        <p className="mb-5">
          In recent times, I've come to realize that powerful storytelling goes
          beyond reading, it lives in the combination of powerful visuals and
          sounds. And as someone who loves bringing stories to life in a way
          people can feel, coming across an organisation who is deeply
          passionate about uplifting the underrepresented, really caught my
          attention.
        </p>
        <p className="mb-5">
          So, I joined Outcome School as the Video Content Strategist to sharpen
          my ability to create contents that not only look good but truly
          connects, and drive real impacts. What better way to lend my Voice if
          not in projecting a course of ensuring Youths around us live a
          meaningful live while contributing to the development of their
          society.
        </p>
      </Modal>

      <Modal
        isOpen={openAddy}
        onClose={() => setOpenAddy(false)}
        title="Addy K"
        imageSrc={Addy}
        linkedinUrl="https://www.linkedin.com/in/adelynkurniawan/"
      >
        <p className="mb-5">
          I am a Finance and Psychology graduate from the University of San
          Diego with a strong passion for helping others make informed financial
          decisions about their futures. Through my experience across asset
          management, venture capital, and outreach, I often navigated career
          pathways without access to structured resources or mentorship. That
          experience shaped my motivation to support others facing similar
          challenges, which inspired me to join Outcome School as a Financial
          Analyst. Supporting students in gaining access to opportunities,
          guidance, and skill-building resources feels like helping a past
          version of myself move closer to their goals.
        </p>
        <p className="mb-5">
          I am excited to help bridge the gap between resource availability and
          students’ future aspirations through my work in financial planning and
          analysis.
        </p>
      </Modal>

      <Modal
        isOpen={openAsya}
        onClose={() => setOpenAsya(false)}
        title="Asya Greinert"
        imageSrc={Asya}
        linkedinUrl="https://www.linkedin.com/in/asya-greinert/"
      >
        <p className="mb-5">
          I focus on Learning Experience and a background in Educational
          Research. I bring 3.5+ years of experience in EdTech SaaS for K-12.
        </p>
        <p className="mb-5">
          As a Product Manager, I conduct user and market research, owned the
          end-to-end product lifecycle of a core subject domain, including a
          content strategy and learning experience, launch courses ensuring
          alignment with learner needs, and track a balanced set of quality
          metrics including satisfaction scores, engagement, and completion
          rates.
        </p>
        <p className="mb-5">
          I  pursued a Master's in Evidence-Based Education Development while
          working as a Research Assistant on consulting projects for leading
          EdTech companies. This gave me a rare opportunity to study learning
          experience across multiple products and organizational contexts – not
          just one platform. I applied both qualitative and quantitative
          research methods to inform product and instructional decisions, and my
          thesis explored learning engagement in STEM education in a blended
          environment.
        </p>
        <p className="mb-5">
          I've seen what happens when learning quality is measured rather than
          assumed – learners go further than they thought they could, and
          educators feel the difference too. That's what I'm here to build at
          Outcome School: a quality system that makes that kind of impact
          consistent and scalable.
        </p>
      </Modal>

      <Footer />
    </>
  );
};

export default TeamPage;
