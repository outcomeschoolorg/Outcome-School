import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import one from "../../assets/images/3.avif";
import { Link } from "react-router";
import StudentReview from "../../Component/StudentReview";

const DeepLearning = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center">
              Deep Learning + Real AI Engineering Workflow
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 3 - Advanced
            </p>
          </div>

          <div className="mx-auto items-center flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 items-center justify-center">
              <div className="leading-relaxed">
                <p className="font-medium mb-3">
                  <span className="text">Goal:</span> Build deep learning models
                  and deploy them like an engineer (not a hobbyist).
                </p>

                <div className="mb-5">
                  <p className="font-medium mb-3">Core skills</p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      Deep learning foundations: neural nets, backprop,
                      regularization, optimization
                    </li>
                    <li>
                      PyTorch (recommended): tensors, datasets/dataloaders,
                      training loops, GPU training
                    </li>
                    <li>
                      Core architectures:
                      <ul className="list-[circle] font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                        <li>CNNs (images)</li>
                        <li>RNNs/LSTMs (sequence basics)</li>
                        <li>Transformers (modern NLP foundation)</li>
                      </ul>
                    </li>
                    <li>
                      Practical training skills:
                      <ul className="list-[circle] font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                        <li>
                          learning rate schedules, early stopping, checkpointing
                        </li>
                        <li>debugging exploding/vanishing gradients</li>
                        <li>handling class imbalance</li>
                      </ul>
                    </li>
                    <li>
                      Basic MLOps:
                      <ul className="list-[circle] font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                        <li>experiment tracking (MLflow or simple logging)</li>
                        <li>packaging models</li>
                        <li>building inference APIs (FastAPI)</li>
                        <li>Docker basics</li>
                        <li>CI basics (linting, tests)</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="mb-5">
                  <p className="font-medium mb-3">
                    Portfolio projects (choose 2–3)
                  </p>
                  <ul className="list-disc font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      <strong>Computer Vision Model:</strong> image
                      classification + augmentation + evaluation report
                    </li>
                    <li>
                      <strong>NLP Model:</strong> text classification or named
                      entity recognition using transformers
                    </li>
                    <li>
                      <strong>Deploy an AI API:</strong> FastAPI endpoint +
                      Docker container + simple UI or Postman demo
                    </li>
                    <li>
                      <strong>End-to-End Pipeline:</strong> data ingestion →
                      training → model versioning → inference
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-3">Milestone (Level 3 exit)</p>
                  <p className="font-regular">
                    You can train deep learning models and deploy them as a
                    working service with reproducible results.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 rounded-lg mx-auto items-center">
              <img
                src={one}
                alt="Deep Learning"
                className="object-cover w-[502px] lg:h-[802px] items-center justify-center mx-auto rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <StudentReview />

      <div className="pb-10">
        <div className="bg-[#5D7BF380] rounded-[20px] container flex flex-col py-10 gap-4 px-10 mx-auto items-center">
          <p className="font-extrabold text-[45px] text-center">
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

export default DeepLearning;
