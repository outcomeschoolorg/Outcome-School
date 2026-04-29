import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import one from "../../assets/images/2.avif";
import { Link } from "react-router";
import StudentReview from "../../Component/StudentReview";

const MLFundamentals = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              Machine Learning Fundamentals (Classic ML)
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 2 - Intermediate
            </p>
          </div>

          <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
            <div className="md:w-1/2 items-center justify-center ">
              <div className=" leading-relaxed    ">
                <p className="font-medium">
                  <span className="text"> Goal: </span> Learn how ML works,
                  train models properly, and avoid beginner mistakes
                </p>

                <div>
                  <p className="font-medium mb-3">Core skills</p>
                  <ul className="list-disc font-regular lg:ml-5 mb-5 px-5 lg:px-0">
                    <li>
                      Math essentials (practical focus):
                      <ul className="list-[circle] font-normal lg:ml-5 px-5 lg:px-0">
                        <li>
                          linear algebra (vectors, matrices), probability
                          (distributions), calculus intuition (gradients)
                        </li>
                      </ul>
                    </li>
                    <li>
                      Data preprocessing: missing values, scaling, encoding,
                      leakage prevention
                    </li>
                    <li>Supervised learning: regression, classification</li>
                    <li>
                      Unsupervised learning: clustering, dimensionality
                      reduction (PCA)
                    </li>
                    <li>
                      Model evaluation: train/validation/test, cross-validation,
                      metrics (F1, ROC-AUC)
                    </li>
                    <li>Feature engineering + selection</li>
                    <li>
                      Scikit-learn workflows: pipelines, ColumnTransformer,
                      model comparison
                    </li>
                    <li>
                      Intro ML storytelling: explain results to non-technical
                      audiences
                    </li>
                  </ul>
                </div>
                <p className="my-5">
                  <p className="font-medium  mb-3">
                    Portfolio projects (choose 2–3)
                  </p>
                  <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      {" "}
                      <strong>Predictive Model: </strong>e.g., churn prediction,
                      loan risk, or demand forecasting Include EDA → pipelines →
                      model comparison → evaluation report
                    </li>
                    <li>
                      <strong>Kaggle Competition: </strong>not to “win”—to show
                      process + clean notebook + write-up
                    </li>
                    <li>
                      <strong>Anomaly Detection: </strong>fraud/outlier
                      detection using unsupervised methods
                    </li>
                  </ul>
                </p>
                <p className="">
                  <p className="font-medium  mb-3">Milestone (Level 2 exit)</p>
                  <ul>
                    <li>
                      You can train and evaluate models correctly, explain
                      tradeoffs, and ship a reproducible notebook/repo.
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

export default MLFundamentals;
