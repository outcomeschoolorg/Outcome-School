import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import one from "../../assets/images/4.avif";
import { Link } from "react-router";
import StudentReview from "../../Component/StudentReview";

const LLMSSystems = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
          <div className="mb-14">
            <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
              LLMs, Production Systems, Specialization, and Leadership
            </p>
            <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">
              Level 4 - Expert
            </p>
          </div>

          <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
            <div className="md:w-1/2 items-center justify-center ">
              <div className=" leading-relaxed    ">
                <p className="font-medium">
                  <span className="text"> Goal: </span> Become the AI engineer
                  who can build modern AI products (LLMs + scalable systems).
                </p>
                <br />
                <p>
                  <p className="font-medium  mb-3">Core skills</p>
                  <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li> LLM engineering:</li>
                    <ul className="list-[circle] font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                      <li>
                        prompt design patterns (structured outputs,
                        tools/function calling concepts){" "}
                      </li>

                      <li>
                        RAG (retrieval augmented generation): chunking,
                        embeddings, reranking, evaluation{" "}
                      </li>

                      <li>
                        fine-tuning basics: LoRA/QLoRA concepts, when to
                        fine-tune vs RAG{" "}
                      </li>

                      <li>
                        LLM evaluation: hallucination checks, test sets,
                        regression testing
                      </li>
                    </ul>
                    <li>Data + systems:</li>
                    <ul className="list-[circle] font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                      <li>data pipelines, feature stores concepts </li>
                      <li>model monitoring: drift, latency, cost, quality </li>
                      <li>vector databases + search fundamentals </li>
                      <li>
                        scaling inference: batching, caching, quantization
                        basics
                      </li>
                    </ul>
                    <li>Cloud + production:</li>

                    <ul className="list-[circle] font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                      <li>
                        deploy to a cloud platform (basic compute, storage,
                        environment variables, secrets)
                      </li>
                      <li>observability: logs/metrics/traces (basic)</li>
                    </ul>
                    <li>Advanced topics (choose 1–2 to specialize):</li>
                    <ul className="list-[circle] font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                      <li>multimodal AI (vision-language) </li>
                      <li>reinforcement learning (intro)</li>
                      <li>distributed training concepts</li>
                      <li>privacy/security basics for AI products</li>
                    </ul>
                  </ul>
                </p>
                <p className="my-5">
                  <p className="font-medium  mb-3">
                    <strong>Capstone (must-have) </strong>
                    <br />
                    Build a full AI product that looks like “real work,” such
                    as:
                  </p>
                  <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                    <li>
                      {" "}
                      <strong>RAG Knowledge Assistant </strong> for a domain
                      (school, IT helpdesk, HR, policy docs) Includes: ingestion
                      pipeline → retrieval → response → evaluation → monitoring
                      dashboard
                    </li>
                    <li>
                      <strong>AI Workflow Tool </strong>that automates a
                      business process (ticket triage, meeting summaries, lead
                      qualification)
                    </li>
                    <li>
                      <strong>LLM-powered Analytics: </strong>natural language
                      to SQL + guardrails + audit logs
                    </li>
                  </ul>
                </p>
                <p className="">
                  <p className="font-medium  mb-3">Milestone (Level 4 exit)</p>
                  <ul>
                    <li>
                      You can design, build, evaluate, and operate an AI system
                      in production—and explain it clearly.
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  <strong>
                    <h2 className="text-xl mb-2">
                      What your portfolio should contain (minimum)
                    </h2>
                  </strong>
                  By the end, aim for <strong>6 strong repos</strong>:
                  <ol className="list-decimal font-normal lg:ml-5 mb-3 px-5 lg:px-0 space-y-2">
                    <li>Python automation/data project</li>
                    <li>Classic ML project with clean evaluation + pipeline</li>
                    <li>Kaggle-style notebook with strong documentation</li>
                    <li>Deep learning (vision)</li>
                    <li>Deep learning (NLP/transformer)</li>
                    <li>LLM product (RAG + evaluation + deployment)</li>
                  </ol>
                  Each repo should include:
                  <ul className="list-disc font-normal lg:ml-5 mb-3 px-5 lg:px-0 space-y-2">
                    <li>README (problem, approach, results, how to run)</li>
                    <li>
                      Clean structure (
                      <span className="text-green-600">src/</span>,
                      <span className="text-green-600">notebooks/</span>,
                      <span className="text-green-600">data/</span> optional,
                      <span className="text-green-600">requirements.txt</span>)
                    </li>
                    <li>Metrics + charts + discussion of tradeoffs</li>
                    <li>Short demo video or screenshots (huge advantage)</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="md:w-1/2  rounded-lg  mx-auto items-center">
              <img
                src={one}
                alt="Programming"
                className=" object-cover w-[502px] lg:h-[1002px] items-center justify-center mx-auto rounded-[20px] "
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

export default LLMSSystems;
