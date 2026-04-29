import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Home from "./Pages/Home";
import ScrollToTop from "./ScrollToTop";
import Courses from "./Pages/Courses";
import IntroProgram from "./Pages/CoursesDescription/IntroProgram";
import TechSchool from "./Pages/TechSchool";
import TraineeProject from "./Pages/TraineeProject";
import ApplicationProcess from "./Pages/ApplicationProcess";
import InfoSession from "./Pages/InfoSession";
import Donate from "./Pages/Donate";
import EmployerPartner from "./Pages/EmployerPartner";
import EmployerPartnerships from "./Pages/EmployerPartnerships";
import Apprenticeship from "./Pages/Apprenticeship";
import Blog from "./Pages/Blog";
import Events from "./Pages/Events";
import ApplicationForm from "./Component/ApplicationForm";
import Contact from "./Pages/Contact";
import ContactUS from "./Component/ContactUs";
import VolunteerForm from "./Component/VolunteerForm";
import EmployerPartnerApplicationForm from "./Component/EmployerPartnerApplicationForm";
import TeamPage from "./Pages/teamPage";
import OurVolunteer from "./Pages/ourVolunteers";
import VolunteerOpportunity from "./Pages/VolunteerOpportunity";
import FrontEnd from "./Pages/CoursesDescription/FrontEnd";
import AboutUs from "./Pages/AboutUS";
import FullStack from "./Pages/CoursesDescription/FullStack";
import MobileProduction from "./Pages/CoursesDescription/MobileProduction";
import GameProgramming from "./Pages/CoursesDescription/Game/GameProgramming";
import PythonFoundations from "./Pages/CoursesDescription/PythonFoundations";
import MLFundamentals from "./Pages/CoursesDescription/MLFundamentals";
import DeepLearning from "./Pages/CoursesDescription/DeepLearning";
import LLMSSystems from "./Pages/CoursesDescription/LLMSSystems";
import GameDevelopment from "./Pages/CoursesDescription/Game/GameDevelop";
import AdvancedGame from "./Pages/CoursesDescription/Game/AdvancedGame";
import StudioSimulation from "./Pages/CoursesDescription/Game/StudioSimulation";
import IntroTechnology from "./Pages/CoursesDescription/Cybersecurity/IntroTechnology";
import NetworkSecurity from "./Pages/CoursesDescription/Cybersecurity/NetworkSecurity";
import EventDetails from "./Pages/EventDetails";
import SecurityProgramming from "./Pages/CoursesDescription/Cybersecurity/SecurityProgramming";
import EthnicalHacking from "./Pages/CoursesDescription/Cybersecurity/EthnicalHacking";
import StartupReadiness from "./Pages/CoursesDescription/StartupAccelerator/StartupReadiness";
import MvpPlanning from "./Pages/CoursesDescription/StartupAccelerator/MvpPlanning";
import Launch from "./Pages/CoursesDescription/StartupAccelerator/Launch";
import Growth from "./Pages/CoursesDescription/StartupAccelerator/Growth";
import Press from "./Pages/CoursesDescription/StartupAccelerator/Press";
import Communication from "./Pages/CoursesDescription/TechSoftSkills/Communication";
import ProblemSolving from "./Pages/CoursesDescription/TechSoftSkills/ProblemSolving";
import ProductManagement from "./Pages/CoursesDescription/UIUXDesign/ProductManagement";
import ProductMFundamentals from "./Pages/CoursesDescription/UIUXDesign/ProductMFundamentals";
import ProductStrategy from "./Pages/CoursesDescription/UIUXDesign/ProductStrategy";
import UXUIDesignBootcamp from "./Pages/CoursesDescription/UIUXDesign/UXUIDesignBootcamp";
import Teamwork from "./Pages/CoursesDescription/TechSoftSkills/Teamwork";
import Adaptability from "./Pages/CoursesDescription/TechSoftSkills/Adaptability";
import TimeManagement from "./Pages/CoursesDescription/TechSoftSkills/TimeManagement";
import JobSearch from "./Pages/CoursesDescription/TechSoftSkills/JobSearch";
import BoardDirector from "./Pages/BoardDirector";
import RoboticsLevel1 from "./Pages/CoursesDescription/Robotics/level1";
import RoboticsLevel2 from "./Pages/CoursesDescription/Robotics/level2";
import RoboticsLevel3 from "./Pages/CoursesDescription/Robotics/level3";
import RoboticsLevel4 from "./Pages/CoursesDescription/Robotics/level4";
import RoboticsLevel5 from "./Pages/CoursesDescription/Robotics/level5";
import RoboticsLevel6 from "./Pages/CoursesDescription/Robotics/level6";

import BlogEventsDetails from "./Pages/BlogEventsDetails";
import CompanyPolicies from "./Pages/CompanyPolicies";
const App = () => {
  return (
    <>
      <Helmet>
        <title>Outcome School</title>
      </Helmet>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-school" element={<TechSchool />} />
          <Route path="/application-process" element={<ApplicationProcess />} />
          <Route path="/course-description" element={<Courses />} />
          <Route path="/trainee-project" element={<TraineeProject />} />
          <Route path="/info-session" element={<InfoSession />} />
          <Route path="/donate" element={<Donate />} />
          <Route
            path="/become-an-employer-partner"
            element={<EmployerPartner />}
          />
          <Route
            path="/employer-partnerships"
            element={<EmployerPartnerships />}
          />
          <Route path="/apprenticeship" element={<Apprenticeship />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/volunteer-form" element={<VolunteerForm />} />
          <Route path="/board-of-directors" element={<BoardDirector />} />
          <Route path="/team-page" element={<TeamPage />} />
          <Route path="/our-volunteer" element={<OurVolunteer />} />
          <Route
            path="/volunteer-opportunities"
            element={<VolunteerOpportunity />}
          />
          <Route
            path="/employer-partner-form"
            element={<EmployerPartnerApplicationForm />}
          />
          <Route path="/aboutUs" element={<AboutUs />} />

          {/* courses */}
          <Route
            path="/introduction-to-programming"
            element={<IntroProgram />}
          />
          <Route path="/frontend-development" element={<FrontEnd />} />
          <Route path="/full-stack-development" element={<FullStack />} />
          <Route
            path="/mobile-production-engineering"
            element={<MobileProduction />}
          />
          <Route path="/game-development" element={<GameDevelopment />} />
          <Route path="/game-programming" element={<GameProgramming />} />
          <Route path="/frontend-development" element={<FrontEnd />} />
          <Route path="/full-stack-development" element={<FullStack />} />
          <Route path="/python-foundations" element={<PythonFoundations />} />
          <Route path="/ml-fundamentals" element={<MLFundamentals />} />
          <Route path="/llms-systems" element={<LLMSSystems />} />
          <Route path="/deep-learning" element={<DeepLearning />} />
          <Route path="/advanced-game-development" element={<AdvancedGame />} />
          <Route path="/studio-simulation" element={<StudioSimulation />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route
            path="/introduction-to-technology"
            element={<IntroTechnology />}
          />
          <Route path="/network-security" element={<NetworkSecurity />} />
          <Route
            path="/security-programming"
            element={<SecurityProgramming />}
          />
          <Route path="/privacy-page" element={<CompanyPolicies />} />
          <Route path="/ethnical-hacking" element={<EthnicalHacking />} />
          <Route path="/startup-readiness" element={<StartupReadiness />} />
          <Route path="/mvp-planning" element={<MvpPlanning />} />
          <Route path="/launch-first-customers" element={<Launch />} />
          <Route path="/growth-KPIs-business-models" element={<Growth />} />
          <Route
            path="/press-funding-readiness-team-leadership"
            element={<Press />}
          />
          <Route
            path="/communication-that-gets-you-hired"
            element={<Communication />}
          />
          <Route
            path="/problem-solving-under-pressure"
            element={<ProblemSolving />}
          />
          <Route path="/uiux-design" element={<UXUIDesignBootcamp />} />
          <Route
            path="/product-fundamentals"
            element={<ProductMFundamentals />}
          />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/product-strategy" element={<ProductStrategy />} />
          <Route
            path="/teamwork-collaboration-and-feedback"
            element={<Teamwork />}
          />
          <Route
            path="/adaptability-critical-thinking-in-fast-moving-tech"
            element={<Adaptability />}
          />
          <Route
            path="/time-management-ownership-mindset"
            element={<TimeManagement />}
          />
          <Route
            path="/job-search-readiness-mock-interview-final-polish"
            element={<JobSearch />}
          />
          <Route path="/events/:id" element={<BlogEventsDetails />} />
          <Route path="/robotics-level1" element={<RoboticsLevel1 />} />
          <Route path="/robotics-level2" element={<RoboticsLevel2 />} />
          <Route path="/robotics-level3" element={<RoboticsLevel3 />} />
          <Route path="/robotics-level4" element={<RoboticsLevel4 />} />
          <Route path="/robotics-level5" element={<RoboticsLevel5 />} />
          <Route path="/robotics-level6" element={<RoboticsLevel6 />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
