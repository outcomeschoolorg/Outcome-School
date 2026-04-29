import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import one from "../../assets/images/1.avif";
import { Link } from "react-router";
import StudentReview from "../../Component/StudentReview";

const PythonFoundations = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              Introduction to AI Eingeering (Python Foundation)
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 1 - Beginner
            </p>
          </div>

          <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
            <div className="md:w-1/2 items-center justify-center ">
              <div className=" leading-relaxed    ">
                <p className="font-medium">
                  <span className="text">
                    Python Foundations → Data & Coding Confidence
                  </span>
                </p>
              </div>
              <br />
              <div className=" leading-relaxed    ">
                <p className="font-medium">
                  <span className="text"> Goal: </span> Become fluent in Python
                  and comfortable building small apps + handling data.
                </p>
                <br />
                <p>
                  <p className="font-medium  mb-3">Core skills</p>
                  <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      {" "}
                      Python basics: variables, loops, functions, errors, files
                    </li>
                    <li>Data structures: lists, dicts, sets, tuples</li>
                    <li>
                      OOP: classes, methods (enough to read/write clean code)
                    </li>
                    <li>
                      Working environment: VS Code, Jupyter, virtual
                      environments, pip
                    </li>
                    <li>Git + GitHub: commits, branches, pull requests</li>
                    <li>Data handling: NumPy, Pandas basics</li>
                    <li>APIs basics: requests, JSON, simple REST usage</li>
                  </ul>
                </p>
                <p className="my-5">
                  <p className="font-medium  mb-3">
                    Mini-projects (choose 2–3)
                  </p>
                  <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      {" "}
                      <strong>CSV Analyzer:</strong>clean a messy dataset +
                      generate summary stats
                    </li>
                    <li>
                      <strong>API Data Collector: </strong>pull data from an
                      API, store as CSV/JSON, analyze trends
                    </li>
                    <li>
                      <strong>Automation Script:</strong> rename files, scrape
                      URLs, or process forms
                    </li>
                    <li>
                      <strong>Simple Dashboard:</strong> basic charts with
                      matplotlib/plotly
                    </li>
                  </ul>
                </p>
                <p className="">
                  <p className="font-medium  mb-3">Milestone (Level 1 exit)</p>
                  <ul>
                    <li>
                      You can build a Python project, use GitHub, and manipulate
                      datasets without fear.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="md:w-1/2  rounded-lg  mx-auto items-center">
              <img
                src={one}
                alt="Programming"
                className=" object-cover w-[502px] h-[502px] rounded-[20px] "
              />
            </div>
          </div>
        </div>
      </div>

      <StudentReview />

      <div className="pb-10">
        <div className="bg-[#5D7BF380] rounded-[20px] container flex flex-col py-10 gap-4 px-10 mx-auto items-center  ">
          <p className="font-extrabold  text-[45px] text-center">
            Ready to Take the Next Step?
          </p>
          <Link to="/application-process">
            <button
              type="button"
              className="background rounded-[999px] py-4 lg:py-6 px-7 lg:px-9 mx-auto text-white font-semibold text-[16px]"
            >
              Go to the Application Process
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PythonFoundations;
