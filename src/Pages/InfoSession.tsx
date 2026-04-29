import NavBar from "../Component/NavBar";
import info from "../assets/images/info.svg";
import image from "../assets/images/image.svg";
import Footer from "../Component/Footer";
import { Helmet } from "react-helmet-async";

const InfoSession = () => {
  return (
    <>
      <Helmet>
        <title>Info Sessions | Outcome School</title>
        <meta
          name="description"
          content="Join Outcome School info sessions to learn about our programs, application process, and how we help students build careers in tech."
        />
      </Helmet>
      <NavBar />
      <div className="bg-white">
        <div className="container px-10  pt-[10em] mx-auto items-center  ">
          <p className="text-[45px] font-extrabold text-center mb-10">
            Outcome School Info Sessions
          </p>
          <div>
            <img src={info} alt="info" className="w-100" />
          </div>
          <p className="text-[18px] my-5">
            Want to learn more about Outcome School? Join one of our{" "}
            <span className="text"> 60-minute information </span> sessions to
            hear about our mission, application process, program outcomes, and
            what to expect as a student. You’ll also have time to ask questions
            directly with our team.
          </p>
          <p className="text-[18px] my-5">
            Below are our upcoming session dates and registration links.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between my-10 ">
            <div>
              <p className="text-[18px] font-medium my-5">
                Summer 2026 Info Sessions
              </p>
              <p className="text-[18px] my-5">
                {" "}
                <span className="font-medium"> When: </span> Every 2nd Wednesday
                of the month at 1:00 PM ET
              </p>
              <p className="text-[18px] my-5">
                {" "}
                <span className="font-medium"> Register: </span> Register here
              </p>
            </div>
            <img src={image} alt="info" className="w-100" />
          </div>
          <hr className="my-5" />
          <div>
            <p className="text-[18px] font-medium my-5 text-start">
              Can’t Make a Session?
            </p>
            <p className="text-[18px] font-normal my-5 text-start">
              No problem—we’d still love to connect. Email{" "}
              <span className="text font-medium">
                {" "}
                admission@outcomeschool.org{" "}
              </span>{" "}
              with your questions.
            </p>
          </div>
          <div className="my-5">
            <p className="text-[18px] font-medium my-5 text-start">
              For Organizations
            </p>
            <p className="text-[18px] my-5 text-start">
              If you represent an organization and would like a private
              information session for your members, contact us at{" "}
              <span className=" font-medium text">
                {" "}
                admission@outcomeschool.org{" "}
              </span>{" "}
              to schedule one.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InfoSession;
