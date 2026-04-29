import NavBar from "../Component/NavBar";
import one from "../assets/images/06.svg";
import three from "../assets/images/07.svg";
import four from "../assets/images/08.svg";
import two from "../assets/images/09.png";
import five from "../assets/images/10.svg";
import six from "../assets/images/11.svg";
import seven from "../assets/images/12.svg";
import eight from "../assets/images/13.svg";
import strategy from "../assets/images/strategy.png";
import intro from "../assets/images/intro.png";
import uiux from "../assets/images/UIUX.png";
import product from "../assets/images/product.png";
import math from "../assets/images/math.png";
import system from "../assets/images/system.png";
import ai from "../assets/images/ai.png";
import mechanics from "../assets/images/mechanics.png";
import python from "../assets/images/python.png";
import robotics from "../assets/images/robotics.png";
import development from "../assets/images/development.png";
import programming from "../assets/images/programming.png";
import game from "../assets/images/game.png";
import studio from "../assets/images/studio.png";
import technology from "../assets/images/technology.png";
import ethnical from "../assets/images/ethnical.png";
import security from "../assets/images/security.png";
import network from "../assets/images/network.png";
import startup from "../assets/images/Startup.png";
import planning from "../assets/images/planning.png";
import launch from "../assets/images/launch.png";
import growth from "../assets/images/growth.png";
import press from "../assets/images/press.png";
import communication from "../assets/images/communication.png";
import job from "../assets/images/job.png";
import time from "../assets/images/time.png";
import tech from "../assets/images/tech.png";
import teamwork from "../assets/images/teamwork.png";
import problem from "../assets/images/problem.png";
import Footer from "../Component/Footer";
import { Link } from "react-router";
import StudentReview from "../Component/StudentReview";
import { Helmet } from "react-helmet-async";

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Courses | Outcome School</title>
        <meta
          name="description"
          content="Explore Outcome School courses including full-stack development, backend engineering, and real-world project-based learning designed to build job-ready skills."
        />
      </Helmet>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center ">
          <p className="text-[45px] font-bold">Course Descriptions</p>
          <p className="text-[16px] font-regular my-5">
            Outcome School offers six career tracks:{" "}
            <span className="text-[#6036E1]">
              {" "}
              Software Engineering, AI Engineering, UX/UI Design & Product
              Management, Robotics Engineering, Game Development, and
              Cybersecurity{" "}
            </span>
          </p>
          <p className="font-regular text-[16px] my-5">
            Students choose one pathway and follow a guided series of courses
            built specifically for that track.
          </p>
          <p className="font-regular text-[16px] my-5">
            Explore each pathway and take our short quiz to find the track that
            best fits your goals.
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pb-10 mx-auto items-center gap-10 min-h-screen ">
          <p className="text-[35px] font-bold text-center">
            Software Engineering
          </p>
          <p className="font-regular text-[16px] my-5">
            This pathway takes you from beginner coding to shipping real
            products. You’ll start with HTML, CSS, and JavaScript to build
            responsive websites and interactive pages, then progress to
            React/Vue to build front-end apps that consume APIs and manage
            state. Next, you’ll learn full-stack development with Node/Express
            and a database, including authentication, authorization, and
            deployment. At the expert level, you’ll build mobile apps (React
            Native/Flutter) and learn production skills like TypeScript,
            testing, CI/CD, monitoring, and scalable architecture. You will
            complete at least 6 portfolio projects, including a full-stack CRUD
            app and a deployed web + mobile capstone. By graduation, you’ll be
            confident building multi-page apps with routing, reusable
            components, APIs, and secure login.
          </p>
          <p>
            <p className="font-medium text-[16px] mb-3">Jobs after:</p>
            <ul className="list-disc  font-regular lg:ml-5 mb-3 px-5 lg:px-0">
              <li> Junior Front-End Developer</li>
              <li>Junior Full-Stack Developer</li>
              <li>Web Developer / Web App Developer.</li>
              <li>React Developer / UI Developer</li>
              <li>Software Engineer (Entry-Level)</li>
              <li>Junior Mobile Developer (React Native)</li>
              <li>QA / Test Automation Intern (junior)</li>
              <li>Junior DevOps / CI/CD Support (entry-level)</li>
              <li>
                Technical Support Engineer / Implementation Specialist (web
                products)
              </li>
            </ul>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full rounded-xl overflow-hidden group">
              <img
                src={one}
                alt="Programming"
                className="object-cover w-full h-[250px]"
              />

              {/* Dark overlay - hidden on hover */}
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <Link to="/introduction-to-programming">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-[16px] bg-[#7C33FF] font-bold text-center px-4 py-7 rounded-[10px] relative z-10">
                    Intro to Programming
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={two}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />

              {/* Dark overlay - hidden on hover */}
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <Link to="/frontend-development">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white bg-[#7C33FF]  text-[16px] font-bold text-center px-8 py-7 rounded-[10px]">
                    Front-End Dev
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={three}
                alt="Programming"
                className=" object-cover w-full h-[250px] "
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/full-stack-development">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white bg-[#7C33FF]  text-[16px] font-bold text-center px-10 py-4 w-[50%] lg:w-[70%] rounded-[10px]">
                    Full-Stack Development
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={four}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/mobile-production-engineering">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-3 py-4  w-[50%] lg:w-[70%] rounded-[10px]">
                    Mobile + Production Engineering
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pb-10 mx-auto items-center gap-10 min-h-screen ">
          <p className="text-[35px] font-bold text-center">AI Engineering</p>
          <p className="font-regular text-[16px] my-5">
            This pathway prepares you to build real AI systems, not just
            notebooks. You’ll begin with Python foundations and data handling
            using NumPy/Pandas, then learn how to pull data from APIs and build
            small automation projects. Next, you’ll study machine learning
            fundamentals, including preprocessing, model evaluation, and
            scikit-learn pipelines. In advanced levels, you’ll build and deploy
            deep learning models using PyTorch and create inference APIs
            (FastAPI) with basic MLOps habits. At the expert level, you’ll
            develop modern AI products using LLMs, including prompt patterns,
            RAG systems, evaluation, monitoring, and production tradeoffs like
            latency and cost. You’ll graduate with a portfolio that includes
            classic ML projects, deep learning work, and an LLM product with
            deployment and documentation.
          </p>
          <p>
            <p className="font-medium text-[16px] mb-3">Jobs after:</p>
            <ul className="list-disc  font-regular lg:ml-5 mb-3 px-5 lg:px-0">
              <li> Junior AI Engineer</li>
              <li>Machine Learning Intern</li>
              <li>Data Analyst (AI track)</li>
              <li>Junior ML Engineer (entry-level)</li>
              <li>AI Product Builder (RAG/LLM)</li>
              <li>Applied AI Developer</li>
              <li>Automation Engineer (Python)</li>
            </ul>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={five}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/python-foundations">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-7 rounded-[10px]">
                    Python Foundations
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={six}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/ml-fundamentals">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-10 py-5 w-[50%] lg:w-[80%] rounded-[10px]">
                    Machine Learning Fundamentals
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={seven}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/deep-learning">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-5 w-[50%] lg:w-[90%] rounded-[10px]">
                    Deep Learning + Real AI Engineering Workflow
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={eight}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/llms-systems">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-7 py-7 rounded-[10px]">
                    LLMS Systems
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pb-10 mx-auto items-center gap-10 min-h-screen ">
          <p className="text-[35px] font-bold text-center">
            UI/UX Design & Product Management
          </p>
          <p className="font-regular text-[16px] my-5">
            This pathway trains you to design products users love and to think
            like a product leader. You’ll start with user-centered UX/UI design,
            learning research, personas, journey maps, wireframes, prototyping,
            accessibility, and usability testing using Figma. Then you’ll
            transition into product thinking: customer discovery, value
            propositions, and business modeling to define what to build and why.
            In the next phase, you’ll learn data-informed product
            delivery—metrics, experiments, backlog planning, execution rhythms,
            and stakeholder alignment. At the strategy level, you’ll master
            go-to-market planning, OKRs, pricing basics, and product lifecycle
            funding. You graduate with a complete portfolio: UX case study,
            prototype demo, PRD-lite documents, roadmaps, experiment packs, and
            a capstone strategy project.
          </p>
          <p>
            <p className="font-medium text-[16px] mb-3">Jobs after:</p>
            <ul className="list-disc  font-regular lg:ml-5 mb-3 px-5 lg:px-0">
              <li> Junior UX Designer</li>
              <li>UI Designer</li>
              <li>Product Designer (entry-level)</li>
              <li>UX Research Assistant</li>
              <li>Associate Product Manager (entry-level)</li>
              <li>Product Coordinator, Design/PM Intern</li>
            </ul>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={uiux}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover 
              <Route path="/uiux-design" element={<UXUIDesignBootcamp />} />
          <Route
            path="/product-fundamentals"
            element={<ProductMFundamentals />}
          />
          <Route path="/data-delivery" element={<DataDeliveryPM />} />
          <Route path="/product-strategy" element={<ProductStrategy />} />*/}

              <Link to="/uiux-design">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-7 rounded-[10px]">
                    UX/UI Design Bootcamp
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={intro}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/product-fundamentals">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-4 w-[50%] lg:w-[80%] rounded-[10px]">
                    Intro to Product Management
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={product}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/product-management">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-5 py-7 rounded-[10px]">
                    Product Management
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={strategy}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/product-strategy">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-5 py-7 rounded-[10px]">
                    Product Strategy
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pb-10 mx-auto items-center gap-10 min-h-screen ">
          <p className="text-[35px] font-bold text-center">
            Robotics Engineering
          </p>
          <p className="font-regular text-[16px] my-5">
            This pathway builds the foundation to design and develop robotics
            systems with confidence. You’ll begin with the math and physics
            behind motion—linear algebra, modeling, and simulation—so you can
            predict and control behavior. Next, you’ll learn robotics
            programming in Python and C++, building sensor simulations, control
            loops, and clean project structure. You’ll progress into mechanics
            and mechatronics, understanding sensors, actuators, and how hardware
            becomes a controllable system. Then you’ll study control and
            estimation (PID/LQR/Kalman filtering) and how robots navigate with
            noisy data. In advanced levels, you’ll add perception and AI
            concepts like object detection and SLAM, then finish with product
            engineering: safety, reliability, testing, and deployment practices.
            You graduate with simulations, robotics code artifacts, and a
            product-style capstone (drone/vehicle/robot).
          </p>
          <p>
            <p className="font-medium text-[16px] mb-3">Jobs after:</p>
            <ul className="list-disc  font-regular lg:ml-5 mb-3 px-5 lg:px-0">
              <li> Robotics Technician (entry-level)</li>
              <li>Junior Robotics Software Developer</li>
              <li>Robotics QA/Test Technician</li>
              <li>Mechatronics Technician</li>
              <li>Junior Control/Systems Assistant</li>
              <li>Robotics Research Intern</li>
            </ul>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={math}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/robotics-level1">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-5 w-[50%] lg:w-[60%] rounded-[10px]">
                    Mathematics + Applied Physics
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={python}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/robotics-level2">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-5 py-7 rounded-[10px]">
                    C++ & Python
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={mechanics}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/robotics-level3">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-5 py-4 w-[50%] lg:w-[60%] rounded-[10px]">
                    Mechanics & Mechatronics
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={system}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/robotics-level4">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-6 rounded-[10px]">
                    Guidance Systems
                  </h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={ai}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/robotics-level5">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-6 rounded-[10px]">
                    Perception + AI
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={robotics}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <Link to="/robotics-level6">
                <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-4 w-[50%] lg:w-[60%] rounded-[10px]">
                    Robotics Product Engineering
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pb-10 mx-auto items-center gap-10 min-h-screen ">
          <p className="text-[35px] font-bold text-center">Game Development</p>
          <p className="font-regular text-[16px] my-5">
            This pathway trains you to ship games like a real studio. You’ll
            start by learning the core game loop, player input, collisions, UI,
            and basic physics while shipping small playable projects quickly.
            Next, you’ll level up into systems thinking—state machines, events,
            reusable gameplay systems, and production-friendly architecture. In
            the advanced stage, you’ll specialize in areas like AI behaviors,
            multiplayer/networking, 3D animation pipelines, or UX/UI for player
            experience. Finally, you’ll run a studio-style capstone: milestone
            planning, playtesting, bug tracking, optimization, polish, and
            publishing assets (screenshots, trailer, store page). You graduate
            with multiple shipped games plus a publish-ready capstone that
            demonstrates real production workflow.
          </p>
          <p>
            <p className="font-medium text-[16px] mb-3">Jobs after:</p>
            <ul className="list-disc  font-regular lg:ml-5 mb-3 px-5 lg:px-0">
              <li> Junior Game Developer</li>
              <li>Gameplay Programmer (entry-level)</li>
              <li>Unity/Unreal Developer (entry-level)</li>
              <li>Technical Designer (entry-level)</li>
              <li>QA Game Tester</li>
              <li>Tools/Content Integration Assistant</li>
            </ul>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={development}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/game-development">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-7 rounded-[10px]">
                    Game Development
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={programming}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/game-programming">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-7 rounded-[10px]">
                    Game Programming
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={game}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/advanced-game-development">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-4 w-[50%] lg:w-[60%] rounded-[10px]">
                    Advanced Game Development
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={studio}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/studio-simulation">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-6 rounded-[10px]">
                    Studio Simulation
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pb-10 mx-auto items-center gap-10 min-h-screen ">
          <p className="text-[35px] font-bold text-center">Cybersecurity</p>
          <p className="font-regular text-[16px] my-5">
            This pathway prepares you for real cybersecurity work through strong
            fundamentals and hands-on labs. You’ll start with IT, operating
            systems (Windows/Linux), networking basics, and core security
            principles like least privilege and risk thinking. Next, you’ll
            build deeper network skills—segmentation, troubleshooting, secure
            protocols, identity and access concepts, and SOC-style alert
            thinking. In the third phase, you’ll learn Python for cybersecurity,
            building practical tools for log analysis, detection, DFIR triage,
            and safe testing workflows. In the final stage, you’ll specialize
            (offense, defense, DFIR, or app/cloud security) and ship an
            end-to-end capstone with a threat model, controls, detections,
            runbooks, and reporting. You graduate able to assess, detect,
            respond, and communicate like a professional.
          </p>
          <p>
            <p className="font-medium text-[16px] mb-3">Jobs after:</p>
            <ul className="list-disc  font-regular lg:ml-5 mb-3 px-5 lg:px-0">
              <li> SOC Analyst (Tier 1)</li>
              <li>Junior Cybersecurity Analyst</li>
              <li>IT Support + Security Pathway</li>
              <li>Junior Security Operations</li>
              <li>DFIR Assistant (entry-level)</li>
              <li>Vulnerability Management Assistant</li>
              <li>Security Intern</li>
            </ul>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={technology}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/introduction-to-technology">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-7 rounded-[10px]">
                    Intro to Technology
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={network}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/network-security">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-5 py-4 w-[50%] lg:w-[60%] rounded-[10px]">
                    Network & Security Basics
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={security}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/security-programming">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-7 rounded-[10px]">
                    Security Programming
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={ethnical}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/ethnical-hacking">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-7 rounded-[10px]">
                    Ethical Hacking
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pb-10 mx-auto items-center gap-10 min-h-screen ">
          <p className="text-[45px] font-extrabold text-start">
            Bonus Alumni Programs
          </p>
          <p className="text-[35px] mt-5 font-bold text-center">
            Startup Accelerator
          </p>
          <p className="font-regular text-[16px] my-5">
            12-Week, hands-on program to plan your MVP, get users, earn
            traction, and become funding-ready. A studio-style experience where
            alumni teams build like real founders: ship weekly, talk to users,
            iterate fast, and grow what works.
          </p>
          <p className="font-regular text-[16px] my-5">
            This accelerator is built for Outcome School alumni who are serious
            about building a company—not just learning startup theory. You’ll
            work in a replicated startup environment where your team moves from
            idea clarity → MVP → first users → growth → press → fundraising
            readiness → leadership systems in 12 weeks.
          </p>
          <p className="font-regular text-[16px] my-5">
            You’ll study founding patterns and decision-making from:
            <ul className="list-disc  font-regular lg:ml-5 mb-3 px-5 lg:px-0">
              <li> Apple, Google, Microsoft</li>
              <li>Tesla, NVIDIA, OpenAI</li>
              <li>Twitch, DoorDash, Instacart, Calendly</li>
              <li>World Wide Technology, Flutterwave</li>
            </ul>
          </p>
          <p className="font-regular text-[16px] my-5">
            We don’t study these stories to “feel inspired.” We study them to
            learn how great startups actually start, pivot, grow, and scale.
          </p>
          <p className="font-regular text-[16px] my-5">
            <span className="font-bold">Outcomes:</span> MVP, user insights,
            growth plan, deck draft, traction narrative, founder operating
            system.
          </p>
          <p>
            <p className="font-medium text-[16px] mb-3">Jobs after:</p>
            <ul className="list-disc  font-regular lg:ml-5 mb-3 px-5 lg:px-0">
              <li> Founder/Co-founder track</li>
              <li>Product Builder</li>
              <li>Startup Operator</li>
              <li>PM/Business Development (early-stage)</li>
            </ul>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={startup}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/startup-readiness">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-5 w-[50%] lg:w-[80%] rounded-[10px]">
                    Startup Readiness + Idea Clarity
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={planning}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/mvp-planning">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-3 w-[50%] lg:w-[80%] rounded-[10px]">
                    MVP Planning + Product Development Cycle
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={launch}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/launch-first-customers">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-5 py-5 w-[50%] lg:w-[60%] rounded-[10px]">
                    Launch + First Customers
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={growth}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/growth-KPIs-business-models">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-1 py-5 w-[50%] lg:w-[60%] rounded-[10px]">
                    Growth + KPIs + Business Models
                  </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={press}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/press-funding-readiness-team-leadership">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-2 py-4 w-[50%] lg:w-[60%] rounded-[10px]">
                    Press + Funding Readiness + Team Leadership
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pb-10 mx-auto items-center gap-10 min-h-screen ">
          <p className="text-[35px] mt-5 font-bold text-center">
            Tech Soft Skills
          </p>
          <p className="font-regular text-[16px] my-5">
            This program strengthens the communication, teamwork,
            problem-solving, and interview readiness needed to get hired. You’ll
            build STAR stories, polish resume bullets, practice mock interviews,
            improve portfolio storytelling, and learn how to collaborate
            professionally.
          </p>
          <p className="font-regular text-[16px] my-5">
            Outcomes: job-ready personal pitch, interview toolkit, improved
            resume/portfolio, confident communication habits.
          </p>
          <p className="font-regular text-[16px] my-5">
            <span className="font-bold"> Jobs after: </span> strengthens hiring
            odds across all tracks (especially entry-level dev, design, data,
            and security roles).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={communication}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/communication-that-gets-you-hired">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-3 py-5 w-[50%] lg:w-[70%] rounded-[10px]">
                    Communication that Gets You Hired
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={problem}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/problem-solving-under-pressure">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-3 py-4 w-[50%] lg:w-[60%] rounded-[10px]">
                    Problem-Solving Under Pressure
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={teamwork}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/teamwork-collaboration-and-feedback">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-2 w-[50%] lg:w-[60%] rounded-[10px]">
                    Teamwork, Collaboration, & Feedback
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={tech}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/adaptability-critical-thinking-in-fast-moving-tech">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-3 w-[50%] lg:w-[80%] rounded-[10px]">
                    Adaptability + Critical Thinking in Fast-Moving Tech
                  </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto items-center justify-center">
            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={time}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/time-management-ownership-mindset">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-5 w-[50%] lg:w-[80%] rounded-[10px]">
                    Time Management + Ownership Mindset
                  </h2>
                </div>
              </Link>
            </div>

            <div className="relative w-full   rounded-xl overflow-hidden group">
              <img
                src={job}
                alt="Programming"
                className=" object-cover w-full h-[250px]"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Purple overlay - appears on hover */}
              <div className="absolute inset-0 bg-[#7C33FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/job-search-readiness-mock-interview-final-polish">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white background  text-[16px] font-bold text-center px-4 py-3 w-[50%] lg:w-[76%] rounded-[10px]">
                    Job Search Readiness + Mock Interview + Final Polish
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <StudentReview />
      {/* <div className="bg-white">
        <div className="container px-10 pt-[10em] lg:py-10 mx-auto items-center ">
          <p className="text-[45px] font-bold text-center lg:text-start">
            Hear from our students!
          </p>

          <div>
            <p className="flex flex-row justify-between my-5 items-center justify-center gap-10">
              <hr className="text-[#DAD8FC] border border-[#DAD8FC] w-full " />
              <img src={mark} alt="mark" className="w-100" />
              <hr className="text-[#DAD8FC] border border-[#DAD8FC] w-full " />
            </p>

            <div className="flex flex-col lg:flex-row  my-5 items-center justify-center gap-8">
              <div>
                <img src={newIcon} alt="mark" className="w-100 rounded-full " />
              </div>

              <div>
                <p className="text text-[22px] font-bold">
                  Jordache Wilson
                </p>
                <p className="text-[16px] font-medium">
                  “Outcome School’s Python class is well structured and thoughtfully led, creating a strong learning environment. Dr. Powell steers the ship with clear direction and control, while Hrishikash brings deep technical knowledge and consistently pushes the class to perform at a higher level. Pushpa plays a key moderating role, providing timely assistance and support where needed to ensure everyone stays on track.”
                </p>
              </div>

            </div>
          </div>

          <div>
            <p className="flex flex-row justify-between my-5 items-center justify-center gap-10">
              <hr className="text-[#DAD8FC] border border-[#DAD8FC] w-full " />
              <img src={mark} alt="mark" className="w-100" />
              <hr className="text-[#DAD8FC] border border-[#DAD8FC] w-full " />
            </p>

            <div className="flex flex-col lg:flex-row  my-5 items-center justify-center gap-8">
              <div>
                <p className="text text-right text-[22px] font-bold">
                  Justin H
                </p>
                <p className="text-[16px] font-medium text-right">
                  “The instructors are really nice and give enough feedback/information in class. They are also willing to help outside of class if you have questions regarding your assignments or about UI/UX Design in general.”
                </p>
              </div>

              <div>
                <img src={newIco} alt="mark" className="w-[70%]  rounded-full " />
              </div>

            </div>
          </div>
        </div>
      </div> */}

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

export default Courses;
