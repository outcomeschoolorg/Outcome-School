import logo from "../assets/images/logoo.svg";
import { Link } from "react-router";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#6036E1]">
        <div className="container px-10  py-10 gap-4  mx-auto   ">
          <div className="flex flex-col lg:flex-row mx-auto text-center lg:text-start justify-between items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-[48px] logo rounded-lg" />
              <span className="text-white text-[43px] font-semibold">
                Outcome School
              </span>
            </a>
            <p className="text-white text-[16px] font-medium lg:w-[40%]">
              Welcome to Outcome School, where every lesson is a bridge to
              opportunity and every learner is empowered to build, innovate, and
              transform communities. <br/>
              "Outcome School is a 501(c)(3) nonprofit organization. <Link to="/donate" className="font-bold hover:underline hover:font-extrabold"> Donate</Link>  
              &nbsp; or <Link to="/volunteer-form" className="font-bold hover:underline hover:font-extrabold"> volunteer</Link> today!"
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-14 mx-auto">
            <div className="text-white">
              <h1 className="text-[18px] font-semibold">Acquire</h1>
              <ul className="text-white my-3">
                <Link to="/tech-school">
                  <li className="hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer">
                    Our Tech School
                  </li>
                </Link>
                <Link to="/course-description">
                  <li className="hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer">
                    Courses
                  </li>
                </Link>
                <Link to="/application-process">
                  <li className="hover:underline duration-300  my-2 ease-in-out text-[16px] text-white cursor-pointer">
                    Application
                  </li>
                </Link>
                <Link to="/info-session">
                  <li className="hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer">
                    Info Sessions
                  </li>
                </Link>
                <Link to="/trainee-project">
                  <li className="hover:underline duration-300  my-2 ease-in-out text-[16px] text-white cursor-pointer">
                    Trainee Project
                  </li>
                </Link>
              </ul>
            </div>

            <div className='text-white'>
              <h1 className='text-[18px] font-semibold'>Volunteer</h1>
              <ul className='text-white my-3'>
                <Link to="/volunteer-form">
                  <li className='hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer'>
                    Become a Volunteer
                  </li>
                </Link>
                <Link to="/volunteer-opportunities">
                  <li className="hover:underline duration-300  my-2 ease-in-out text-[16px] text-white cursor-pointer">
                    Volunteer Opportunities
                  </li>
                </Link>
                <Link to="/our-volunteer">
                  <li className="hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer">
                    Meet the Volunteers
                  </li>
                </Link>
              </ul>
            </div>

            <div className="text-white">
              <h1 className="text-[18px] font-semibold">Employ</h1>
              <ul className="text-white my-3">
                <Link to="/employer-partnerships">
                  <li className="hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer">
                    Employer Partnership
                  </li>
                </Link>
                <Link to="/apprenticeship">
                  <li className="hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer">
                    Apprenticeship
                  </li>
                </Link>
                <Link to="/become-an-employer-partner">
                  <li className="hover:underline duration-300  my-2 ease-in-out text-[16px] text-white cursor-pointer">
                    Become an Employer Partner
                  </li>
                </Link>
              </ul>
            </div>

            <div className='text-white'>
              <h1 className='text-[18px] font-semibold'>About Us</h1>
              <ul className='text-white my-3'>
                <Link to="/aboutUs">
                  <li className='hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer'>
                    About Outcome School
                  </li>
                </Link>
                <Link to="/team-page">
                  <li className="hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer">
                    Meet the Team
                  </li>
                </Link>
                <Link to="/board-of-directors">
                  <li className="hover:underline duration-300  my-2 ease-in-out text-[16px] text-white cursor-pointer">
                    Board of Directors
                  </li>
                </Link>
                <Link to="/blog">
                  <li className="hover:underline duration-300 my-2 ease-in-out text-white cursor-pointer">
                    Blogs
                  </li>
                </Link>
                <Link to="/events">
                  <li className="hover:underline duration-300  my-2 ease-in-out text-[16px] text-white cursor-pointer">
                    Events
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="hover:underline duration-300  my-2 ease-in-out text-[16px] text-white cursor-pointer">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>

            <div className="text-white">
              <ul>
                <Link to="/donate">
                  <li className="text-[18px] font-semibold hover:underline duration-300  my-2 ease-in-out text-[16px] text-white cursor-pointer">
                    Donate
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <hr className="text-white my-5 border border-white" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 mx-auto gap-5 text-center">
            <div className=" w-full flex text-white text-center mx-auto items-center justify-center  gap-4">
              {/* <Link to=''>
                <FaFacebook className="text-white" size={30} />
              </Link>
              <Link to=''>
                <FaTwitter className="text-white" size={30} />
              </Link>
              <Link to=''>
                <FaInstagram className="text-white" size={30} />
              </Link>
              <Link to=''>
                <FaLinkedin className="text-white" size={30} />
              </Link> */}
              <Link to="https://www.facebook.com/profile.php?id=61579731263258">
                <i className="fa-brands fa-facebook text-[25px]"></i>
              </Link>

              <Link to="https://x.com/outcomeschool">
                <i className="fa-brands fa-square-x-twitter  text-[25px] "></i>
              </Link>

              <Link to="https://www.tiktok.com/@outcomeschool">
                <i className="fa-brands fa-tiktok text-[25px]"></i>
              </Link>

              <Link to="https://www.instagram.com/outcomeschool/">
                <i className="fa-brands fa-square-instagram text-[25px]"></i>
              </Link>

              <Link to="https://www.linkedin.com/company/outcome-school">
                <i className="fa-brands fa-linkedin text-[25px] "></i>
              </Link>

              <Link to="https://www.youtube.com/@Outcomeschoolorg">
                <i className="fa-brands fa-youtube text-[25px] "></i>
              </Link>
            </div>

            <div>
              <Link to="/privacy-page" className="hover:underline text-white ">
                <span>Privacy Policy</span>
              </Link>
            </div>

            <div className="text-white">
              <p>2026 Outcome Schools. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
