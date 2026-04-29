import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

import icon from "../assets/images/Icon.svg";
import acquire from "../assets/images/acquire.svg";
import volunteer from "../assets/images/Volunteer.svg";
import employ from "../assets/images/Employ.svg";
import annual from "../assets/images/Annual.svg";
import blogs from "../assets/images/Blogs.svg";
import about from "../assets/images/About.svg";
import { Link } from "react-router";
import report2025 from "../assets/2025 Annual Report.pdf";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white">
        <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
          <div className="mb-14">
            <p className="text-[40px] text-center mb-5 mx-auto font-bold">
              Contact Us
            </p>
            <p className=" text-[16px] font-regular mx-auto text-center">
              Click to learn more or click and complete the form below to
              contact us.
            </p>
          </div>

          <div>
            <div className="flex flex-col mt-10 mx-auto items-center justify-center">
              <div className="flex flex-col lg:flex-row gap-2  justify-center mx-auto items-center">
                <Link to="/donate">
                  <div className="bg-[#8A38F5] mb-5 rounded-[25px] h-[170px] w-[290px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={icon} alt="icon" className="mx-auto mt-5 " />
                    <p className="text-white text-center text-[28px] font-bold">
                      Donate
                    </p>
                  </div>
                </Link>

                <Link to="/tech-school">
                  <div className="bg-[#8A38F5] mb-5  rounded-[25px] h-[170px] w-[290px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={acquire} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      Acquire
                    </p>
                  </div>
                </Link>

                <div
                  onClick={() => window.open(report2025, "_blank")}
                  className="bg-[#8A38F5] mb-5 rounded-[25px] h-[170px] w-[290px] items-center  pr-4 pt-4"
                >
                  <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                  <img src={annual} alt="icon" className="mx-auto mt-5" />
                  <p className="text-white text-center text-[28px] font-bold">
                    Annual Reports
                  </p>
                </div>

                <Link to="/volunteer-form">
                  <div className="bg-[#8A38F5] mb-5  rounded-[25px] h-[170px] w-[290px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>

                    <img src={volunteer} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      Volunteer
                    </p>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col lg:flex-row lg:gap-10 lg:mt-10 mx-auto items-center">
                <a href="/#blog">
                  <div className="bg-[#8A38F5] mb-5  rounded-[25px] h-[170px] w-[290px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={blogs} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      Blogs & Events
                    </p>
                  </div>
                </a>

                <Link to="/employer-partnerships">
                  <div className="bg-[#8A38F5] mb-5 rounded-[25px] h-[170px] w-[290px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={employ} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      Employ
                    </p>
                  </div>
                </Link>
                <Link to="/aboutUs">
                  <div className="bg-[#8A38F5]  mb-5 rounded-[25px] h-[170px] w-[290px] items-center  pr-4 pt-4">
                    <i className="fa-solid fa-arrow-up text-white float-right rotate-45 translate-y-1"></i>
                    <img src={about} alt="icon" className="mx-auto mt-5" />
                    <p className="text-white text-center text-[28px] font-bold">
                      About Us
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-3 mb-5">
            <Link
              to="/contact-us"
              className="block ml-5 mt-3 w-[20%] text-center justify-content:center font-semibold border-2 border-[#8A38F5] text-white rounded-[999px] px-3 py-3 hover:text-[#8A38F5] hover:bg-white mb-5 bg-[#8A38F5]"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
