import NavBar from "../Component/NavBar";
import one from "../assets/images/00.svg";
import icon from "../assets/images/Icon.svg";
import acquire from "../assets/images/acquire.svg";
import volunteer from "../assets/images/Volunteer.svg";
import employ from "../assets/images/Employ.svg";
import annual from "../assets/images/Annual.svg";
import blogs from "../assets/images/Blogs.svg";
import about from "../assets/images/About.svg";
import slack from "../assets/images/slack.svg";
import goggle from "../assets/images/google.svg";
import zoom from "../assets/images/zoom.svg";
import atlassian from "../assets/images/atlassian.svg";
import salesforce from "../assets/images/salesforce.svg";
import Footer from "../Component/Footer";
import { Link } from "react-router";
import StudentReview from "../Component/StudentReview";
import MixedCarousel from "../Component/BlogCards";
import report2025 from "../assets/2025 Annual Report.pdf";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Outcome School | Free Tech School</title>
        <meta
          name="description"
          content="Outcome School provides free tech bootcamps in AI, Robotics, Cybersecurity, Game Development to underserved youth to become job ready in less than 12 months and gain employable skills."
        />
        <link rel="canonical" href="https://www.outcomeschool.org/" />
      </Helmet>
      <NavBar />

      <div className="bg-white">
        <div className="container px-4 sm:px-6 lg:px-10 mx-auto items-center flex flex-col md:flex-row gap-10 min-h-screen ">
          <div className="md:w-1/2 text-white items-center justify-center ">
            <p className="text-4xl sm:text-5xl lg:text-[64px] font-medium uppercase text-gray-300 leading-tight mb-6">
              Learn
            </p>
            <p className="text-4xl sm:text-5xl lg:text-[64px] font-medium uppercase text-gray-300 leading-tight mb-6">
              By Doing
            </p>
            <Link to="/application-process">
              <button
                type="button"
                className="background w-full rounded-[999px] py-4 px-5 mx-auto text-white font-semibold text-[16px]"
              >
                Request an Application to our Tech School
              </button>
            </Link>

            <Link to="/donate">
              <button
                type="button"
                className="border-2 w-full border-[#7C33FF] mt-5 bg-white rounded-[999px] py-4 px-5 text-[#7C33FF] font-semibold text-[16px]"
              >
                Support our Mission to Transform Lives
              </button>
            </Link>
          </div>

          <div className="md:w-1/2  rounded-lg lg:mt-[4em] mx-auto items-center">
            <img
              src={one}
              alt=""
              className="text-center mx-auto items-center w-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-white mt-8 mb-5">
        <div className="container px-4 sm:px-6 lg:px-10 mx-auto items-center  ">
          <div className="border border-black text-center mx-auto text-black text-[28px] font-bold py-4 px-3 bg-[#8080801A] rounded-[25px]">
            At Outcome School, we engineer alternative roads into high-demand
            tech jobs and to support the launch of scrappy, bootstrap tech
            companies that solve real problems, create value, and hire from
            underprivileged communities.
          </div>
        </div>
      </div>

      <StudentReview />

      <div className="bg-[#8080801A]">
        <div className="container   mx-auto py-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full">
            <Link to="/donate">
              <div className="bg-[#8A38F5] rounded-[25px] h-[170px] lg:h-[350px] w-full max-w-[320px] items-center pr-4 pt-4">
                <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                <img src={icon} alt="icon" className="mx-auto mt-5 lg:mt-20" />
                <p className="text-white text-center text-[28px] font-bold">
                  Donate
                </p>
              </div>
            </Link>

            <div className="flex flex-col lg:flex-row lg:gap-10 mt-10 mx-auto items-center">
              <div>
                <Link to="/tech-school">
                  <div className="bg-[#8A38F5] mb-5  rounded-[25px] h-[170px] w-full max-w-[320px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={acquire} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      Acquire
                    </p>
                  </div>
                </Link>

                <Link to="/volunteer-form">
                  <div className="bg-[#8A38F5] mb-5  rounded-[25px] h-[170px] w-full max-w-[340px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={volunteer} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      Volunteer
                    </p>
                  </div>
                </Link>
              </div>

              <div className="">
                <Link to="/employer-partnerships">
                  <div className="bg-[#8A38F5] mb-5 rounded-[25px] h-[170px] w-full max-w-[320px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={employ} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      Employ
                    </p>
                  </div>
                </Link>

                <div
                  onClick={() => window.open(report2025, "_blank")}
                  className="bg-[#8A38F5] mb-5 rounded-[25px] h-[170px] w-full max-w-[320px] flex flex-col items-center justify-center pr-4 pt-4 cursor-pointer hover:shadow-lg transition"
                >
                  <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                  <img src={annual} alt="icon" className="mx-auto mt-5" />
                  <p className="text-white text-center text-[28px] font-bold mt-2">
                    Annual Reports
                  </p>
                </div>
              </div>
              <div>
                <a href="#blog">
                  <div className="bg-[#8A38F5] mb-5  rounded-[25px] h-[170px] w-full max-w-[320px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={blogs} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      Blogs & Events
                    </p>
                  </div>
                </a>

                <Link to="/aboutUs">
                  <div className="bg-[#8A38F5] mb-5 rounded-[25px] h-[170px] w-full max-w-[320px] flex flex-col items-center justify-center pr-4 pt-4 cursor-pointer hover:shadow-lg transition">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={about} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold mt-2">
                      About Us
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#5D7BF380] ">
        <div className="container flex flex-col py-10 gap-4 px-4 sm:px-6 lg:px-10 mx-auto items-center  ">
          <Link to="/application-process">
            <button
              type="button"
              className="w-full sm:w-auto background rounded-full py-4 px-5 text-white font-semibold"
            >
              ENROLL IN TECH PROGRAMS
            </button>
          </Link>
          <Link to="/employer-partnerships">
            <button
              type="button"
              className="w-full sm:w-auto border-2 border-[#7C33FF] bg-white rounded-full py-4 px-5 text-[#7C33FF] font-semibold"
            >
              HIRE OUR GRADS
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white ">
        <div className="container flex flex-col py-10 gap-4 px-4 sm:px-6 lg:px-10 mx-auto items-center  ">
          <iframe
            height="315"
            className="rounded-lg my-5 w-full max-w-3xl aspect-video"
            src="https://www.youtube.com/embed/pq-69jczjtE?si=zqYxOjPz8Kq7K-eC"
            title="UX/UI Student Meets an Industry Tech Expert at Outcome School"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div id="blog">
        <MixedCarousel />
      </div>

      <div className="bg-white ">
        <div className="container  py-10 gap-4 px-4 sm:px-6 lg:px-10 mx-auto items-center  ">
          <p className="text-black text-[28px] text-center font-bold">
            Thanking our Sponsors for free and discounted products
          </p>
          {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-10 px-[5em] text-center mx-auto items-center justify-center"> */}
          {/* <marquee> */}
          <div className="flex gap-8 sm:gap-12 lg:gap-[6em] mt-10  text-center mx-auto items-center justify-center animate-marquee whitespace-nowrap">
            <img src={slack} alt="image" className="text-center w-100" />
            <img src={goggle} alt="image" className="text-center w-100" />
            <img src={zoom} alt="image" className="text-center w-100" />
            <img src={atlassian} alt="image" className="text-center w-100" />
            <img src={salesforce} alt="image" className="text-center w-100" />
          </div>
          {/* </marquee> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
