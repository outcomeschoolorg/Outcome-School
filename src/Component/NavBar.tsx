import { useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/SSchool.svg";
import { Link } from "react-router-dom";

type DropdownMenu = "acquire" | "about" | "volunteer" | "employ" | null;

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<DropdownMenu>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const toggleDropdown = useCallback((menu: DropdownMenu) => {
    setDropdown((prev) => (prev === menu ? null : menu));
  }, []);

  // Handle hover for desktop dropdown
  const handleMouseEnter = useCallback(
    (menu: DropdownMenu) => {
      if (window.innerWidth >= 768) {
        // Only for desktop
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
        setDropdown(menu);
      }
    },
    [hoverTimeout],
  );

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth >= 768) {
      // Only for desktop
      // Add a small delay before closing to allow moving cursor to dropdown
      const timeout = setTimeout(() => {
        setDropdown(null);
      }, 150);
      setHoverTimeout(timeout);
    }
  }, [hoverTimeout]);

  // Handle dropdown mouse enter to prevent closing when moving to dropdown
  const handleDropdownMouseEnter = useCallback(() => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
  }, [hoverTimeout]);

  // Handle dropdown mouse leave
  const handleDropdownMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  }, [hoverTimeout]);

  return (
    <nav className="shadow-md w-full z-50 text-black bg-white fixed">
      <div className="container mx-auto px-6 py-10 flex justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className=" logo rounded-lg" />
        </a>

        <div className="hidden md:flex space-x-6 text-center mx-auto items-center justify-center relative">
          {/* Services Dropdown - Desktop (Hover) */}

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("acquire")}
            onMouseLeave={handleMouseLeave}
          >
            <button className=" focus:outline-none  font-semibold">
              Acquire ▾
            </button>
            {dropdown === "acquire" && (
              <div
                className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg w-40 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                style={{
                  transform: "translateY(10px)",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <Link
                  to="/tech-school"
                  className="block px-4 py-2 hover:bg-gray-200 "
                >
                  Our Tech School
                </Link>
                <Link
                  to="/course-description"
                  className="block px-4 py-2 hover:bg-gray-200 "
                >
                  Courses
                </Link>
                <Link
                  to="/application-process"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Application
                </Link>
                <Link
                  to="/info-session"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Info Sessions
                </Link>
                <Link
                  to="/trainee-project"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Trainee Project
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button className=" focus:outline-none  font-semibold">
              About Us ▾
            </button>
            {dropdown === "about" && (
              <div
                className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg w-40 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                style={{
                  transform: "translateY(10px)",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <Link
                  to="/aboutUs"
                  className="block px-4 py-2 hover:bg-gray-200 "
                >
                  About Outcome School
                </Link>
                <Link
                  to="/team-page"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Meet The Team
                </Link>
                <Link
                  to="/board-of-directors"
                  className="block px-4 py-2 hover:bg-gray-200 "
                >
                  Boards Directors
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Blogs
                </Link>
                <Link
                  to="/events"
                  className="block px-4 py-2 hover:bg-gray-200 "
                >
                  Events
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("volunteer")}
            onMouseLeave={handleMouseLeave}
          >
            <button className=" focus:outline-none  font-semibold">
              Volunteer ▾
            </button>
            {dropdown === "volunteer" && (
              <div
                className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg w-40 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                style={{
                  transform: "translateY(10px)",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <Link
                  to="/volunteer-form"
                  className="block px-4 py-2 hover:bg-gray-200 "
                >
                  Become a Volunteer
                </Link>
                <Link
                  to="/volunteer-opportunities"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Volunteer Opportunities
                </Link>
                <Link
                  to="/our-volunteer"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Meet The Volunteers
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("employ")}
            onMouseLeave={handleMouseLeave}
          >
            <button className=" focus:outline-none  font-semibold">
              Employ ▾
            </button>
            {dropdown === "employ" && (
              <div
                className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg w-40 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                style={{
                  transform: "translateY(10px)",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <Link
                  to="/employer-partnerships"
                  className="block px-4 py-2 hover:bg-gray-200 "
                >
                  Employer Partnership
                </Link>
                <Link
                  to="/apprenticeship"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Apprenticeship
                </Link>
                <Link
                  to="/become-an-employer-partner"
                  className="block px-4 py-2 bg-white hover:bg-gray-200 "
                >
                  Become an Employer Partner
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="float left hidden md:block">
          <Link
            to="/donate"
            className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] text-white rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-4 py-3 hover:text-[#6036E1] hover:bg-white"
          >
            Donate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden shadow-md bg-white">
          <button
            className="block w-full text-left px-6 py-3 text-black"
            onClick={() => toggleDropdown("acquire")}
          >
            Acquire ▾
          </button>
          {dropdown === "acquire" && (
            <div className="text-black bg-white block">
              <Link
                to="/tech-school"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Our Tech School
              </Link>
              <Link
                to="/course-description"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/application-process"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Application
              </Link>
              <Link
                to="/info-session"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Info Sessions
              </Link>
              <Link
                to="/trainee-project"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Trainee Project
              </Link>
            </div>
          )}

          <button
            className="block w-full text-left px-6 py-3 text-black"
            onClick={() => toggleDropdown("about")}
          >
            About Us ▾
          </button>
          {dropdown === "about" && (
            <div className="text-black bg-white block">
              <Link
                to="/"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                About Outcome School
              </Link>
              <Link
                to="/team-page"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Meet The Team
              </Link>
              <Link
                to="/board-of-directors"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Boards Of Directors
              </Link>
              <Link
                to="/blog"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/events"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          )}

          <button
            className="block w-full text-left px-6 py-3 text-black"
            onClick={() => toggleDropdown("volunteer")}
          >
            Volunteer ▾
          </button>
          {dropdown === "volunteer" && (
            <div className="text-black bg-white block">
              <Link
                to="/"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Become a Volunteer
              </Link>
              <Link
                to="/volunteer-opportunities"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Volunteer Opportunities
              </Link>
              <Link
                to="/our-volunteer"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Meet The Volunteers
              </Link>
            </div>
          )}

          <button
            className="block w-full text-left px-6 py-3 text-black"
            onClick={() => toggleDropdown("employ")}
          >
            Employ ▾
          </button>
          {dropdown === "employ" && (
            <div className="text-black bg-white block">
              <Link
                to="/employer-partnerships"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Employer Partnership
              </Link>
              <Link
                to="/apprenticeship"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Apprenticeship
              </Link>
              <Link
                to="/become-an-employer-partner"
                className="block px-6 py-3 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Become an Employer Partner
              </Link>
            </div>
          )}

          <Link
            to="/donate"
            className="block ml-5 mt-3 w-[20%] text-center font-semibold border-2 border-[#6036E1] text-white rounded-[999px] px-3 py-3 hover:text-[#6036E1] hover:bg-white mb-5 bg-[#6036E1]"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
