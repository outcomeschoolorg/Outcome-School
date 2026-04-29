import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import { Link } from "react-router";

const EmployerPartner = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10  pt-[10em] pb-10 mx-auto items-center  ">
          <div className="mb-10">
            <p className="text-[48px] font-bold text-center mb-8">
              Become An Employer Partner
            </p>
            <p className="text-start font-regular mb-5">
              Be the change you want to see in tech and help change lives along
              the way.
            </p>
            <p className="text-start font-regular mb-5 ">
              Outcome School Employer Partnerships connect mission-aligned
              organizations with top emerging tech talent. Whether you’re
              looking to hire, explore our <span> Tandem Apprenticeship </span>,
              or build a stronger long-term pipeline, we’d love to connect.
            </p>
            <p className="text-start font-regular mb-5 ">
              Interested in partnering with us? Complete the form below to start
              a conversation with our partnerships team.
            </p>
            <p className="text-start font-regular mb-5 ">
              For questions, contact us at:{" "}
              <span className="font-medium text">
                employerpartnership@outcomeschool.org
              </span>
            </p>
          </div>

          <div className="mb-10">
            <p className="text-[36px] font-bold text-center mb-5">
              Employer Partnerships
            </p>
            <p className="text-[20px] font-medium text-start mb-3">
              Stay Connected to Top Emerging Tech Talent
            </p>
            <p>
              <p className="text-start mb-3">
                Fill out the form below to explore:
              </p>
              <ul className="list-disc ml-5">
                <li className="mb-3">Hiring Outcome School job-seekers</li>
                <li className="mb-3">Tandem Apprenticeships</li>
                <li className="mb-3">Referrals into your internal roles</li>
                <li className="mb-3">
                  Program participation (volunteering, speaking, events, and
                  more)
                </li>
              </ul>
              <p className="text-start">
                We look forward to learning about your needs and finding the
                best way to collaborate.
              </p>
            </p>
          </div>

          <div className="mb-8">
            <p className="text-[36px] font-bold text-center mb-5">
              Subscribe to Our Employer Newsletter: The Talent Loop
            </p>
            <p className=" font-medium text-start mb-3">
              Outcome School’s employer newsletter, The Talent Loop, is your
              inside track to the next generation of software developers and
              emerging tech professionals.
            </p>
            <p>
              <p className="text-start mb-3">From time to time, we share:</p>
              <ul className="list-disc ml-5">
                <li className="mb-3">Spotlighted job-ready candidates</li>
                <li className="mb-3">
                  Invitations to exclusive hiring and career development
                  initiatives
                </li>
                <li className="mb-3">
                  Early access to candidate resumes and portfolios
                </li>
                <li className="mb-3">
                  Updates on curriculum and tech stack training
                </li>
              </ul>
              <p className="text-start">
                Whether you’re hiring right now or building your pipeline,
                subscribing keeps you connected to our growing talent network
                and the developers shaping tomorrow’s teams.
              </p>
            </p>
          </div>

          <div>
            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-black">
                Employer Partner Application
              </h1>

              <div className="flex justify-center mt-3 mb-5">
                <Link
                  to="/employer-partner-form"
                  className="block ml-5 mt-3 w-[70%] lg:w-[25%] text-center justify-content:center font-semibold border-2 border-[#6036E1] text-white rounded-[999px] px-5 py-5 hover:text-[#6036E1] hover:bg-white mb-5 bg-[#6036E1]"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EmployerPartner;
