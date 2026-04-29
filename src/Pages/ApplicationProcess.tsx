import { useState } from "react";
import NavBar from "../Component/NavBar";
import Summer from "../assets/images/Summer.svg";
import stepOne from "../assets/images/stepOne.svg";
import two from "../assets/images/step2.svg";
import three from "../assets/images/step3.svg";
import four from "../assets/images/step4.svg";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Request Application",
    description:
      "Ready to begin? Once you've selected your career pathway, request an application by completing the form.",
    image: stepOne,
  },
  {
    id: 2,
    title: "Complete Application",
    description:
      "The application takes about 15 minutes to complete. Answer each question carefully and thoughtfully.",
    image: two,
  },
  {
    id: 3,
    title: "Submit the Pre-Work",
    description:
      "To be considered for admission, you must complete a pre-work assignment. This helps assess your current skill level.",
    image: three,
  },
  {
    id: 4,
    title: "Start Learning",
    description:
      "Once accepted, you’ll join your cohort and begin building the skills you need for a career in tech.",
    image: four,
  },
];

const ApplicationProcess = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const currentStepData = steps[currentStep];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <Helmet>
        <title>Apply | Outcome School</title>
        <meta
          name="description"
          content="Apply to Outcome School's free tech programs. Learn the step-by-step application process to join hands-on training in software development and real-world projects."
        />
      </Helmet>
      <NavBar />
      <div className="bg-white">
        <div className="container px-10 pt-[10em] mx-auto items-center">
          <p className="text-[40px] font-regular text-center mb-10">
            Application Process
          </p>

          {/* Semester Info */}
          <div className="border border-black">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mt-10 mb-8 items-center justify-center mx-auto px-16">
              <div className="bg-[#7D65ED] rounded-[10px] px-3 py-3 mx-auto">
                <p className="text-white text-[20px] lg:text-[24px] font-regular">
                  Summer 2026
                </p>
              </div>
              <div className="border border-black rounded-[10px] px-4 py-2 lg:py-3 mx-auto">
                <p className="text-black text-[24px] font-regular">Fall 2026</p>
              </div>
              <div className="border border-black rounded-[10px] px-3 py-3 mx-auto">
                <p className="text-black text-[24px] font-regular">
                  Winter 2026
                </p>
              </div>
              <div className="border border-black rounded-[10px] px-3 py-3 mx-auto">
                <p className="text-black text-[24px] font-regular">
                  Spring 2027
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 px-6 lg:px-10 mt-[4em] mx-auto">
              <div>
                <img src={Summer} alt="clock" className="w-100 mb-4" />
              </div>
              <div className="mb-3">
                <p className="text-start text-[32px] font-bold">Summer 2026</p>
                <p className="text-[18px] my-3">
                  Application Deadline: 3 weeks before the program start date
                </p>
                <p className="text-[18px] my-3">
                  Pre-work Deadline: 2 weeks before the start date
                </p>
                <p className="text-[18px] my-3">
                  Results Date: 3 days after your pre-work submission
                </p>
                <p className="text-[18px] my-3">
                  Class date: June 1st, 2026 - August 23rd, 2026
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-10">
            <p className="font-medium text-[35px] mb-10">How it Works</p>
            <div className="my-5 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-7 lg:px-10 mt-5 gap-3 mx-auto items-center justify-center">
              <span className="mb-4 font-medium">Request Application</span>
              <span>
                <i className="fa-solid fa-arrow-right mb-4 "></i>
              </span>
              <span className="mb-4 font-medium">Complete Application</span>
              <span>
                <i className="fa-solid fa-arrow-right mb-4"></i>
              </span>
              <span className="mb-4 font-medium">Submit Pre-work</span>
              <span>
                <i className="fa-solid fa-arrow-right mb-4"></i>
              </span>
              <span className="mb-4 font-medium">Start Acquiring Skills</span>
            </div>

            {/* Step-by-Step */}
            <div className="py-10">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                {/* Previous Step */}
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentStep === 0
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                  }`}
                >
                  <i className="fa-solid fa-less-than"></i>
                </button>

                {/* Step Image */}
                <img
                  src={currentStepData.image}
                  alt={`Step ${currentStepData.id}`}
                  className="w-100"
                />

                {/* Step Content */}
                <div className="flex-1">
                  <p className="text-[23px] my-3 font-bold text-gray-900">
                    Step {currentStepData.id}
                  </p>
                  <p className="my-3 text-lg font-semibold text-gray-800">
                    {currentStepData.title}
                  </p>
                  <p className="my-3 lg:w-[80%] text-gray-600 leading-relaxed">
                    {currentStepData.description}
                  </p>
                </div>

                {/* Next Step */}
                <button
                  onClick={handleNextStep}
                  disabled={currentStep === steps.length - 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentStep === steps.length - 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                  }`}
                >
                  <i className="fa-solid fa-greater-than"></i>
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentStep === index
                        ? "bg-purple-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3 mb-5">
        <Link
          to="/application-form"
          className="block ml-5 mt-3 lg:w-[20%] text-center justify-content:center font-semibold border-2 border-[#6036E1] text-white rounded-[999px] px-4 py-5 hover:text-[#6036E1] hover:bg-white mb-5 bg-[#6036E1]"
        >
          Request for Application
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ApplicationProcess;
