import { useState } from "react";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

const faqs = [
  {
    question: "WHAT DOES MY DONATION DO?",
    answer:
      "Your donation keeps Outcome School free, reaches more students, and delivers world-class tech experiences to young people who deserve them most. Invest in their future today.",
  },
  {
    question: "DO YOU ACCEPT CHECKS?",
    answer:
      "Yes! Outcome School does accept checks. To send a check, contact us at info@outcomeschool.org and we will respond promptly with our mailing address.",
  },
  {
    question: "CAN I MAKE A DONATION VIA A WIRE TRANSFER?",
    answer:
      "Yes! Outcome School does accept wire transfers. To initiate a wire transfer, contact us at info@outcomeschool.org and we will respond promptly with our account information.",
  },

  {
    question: "IS MY DONATION TAX-DEDUCTIBLE?",
    answer:
      "Yes! We are a 501(c)(3) tax-exempt organization and your donation is tax-deductible within the guidelines of U.S. law. Our EIN is 39-3735718. To claim a donation as a deduction on your U.S. taxes, please keep your email donation receipt as your official record. You will receive an e-mail upon successful completion of your donation. Any questions can be directed to info@outcomeschool.org",
  },

  {
    question: "DO I GET A RECEIPT?",
    answer:
      "A donation receipt will be sent to you at the email address you provide on this form. Please be sure to keep a copy of your receipt for tax purposes. If you select a recurring donation, you will be sent an individual receipt each month when your donation is processed.",
  },
];

const DonateFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[10em] py-10 mx-auto items-center ">
          <section className="py-10  ">
            <h2 className="text-[28px] font-bold  mb-12  tracking-wide">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4  mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center text-white background  transition"
                  >
                    <span className="font-semibold  text-xl pr-4  font-bold">
                      {faq.question}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div
                      className="px-6 pb-6 pt-2 text-gray-500 text-lg border-t border-gray-200 animate-in fade-in slide-in-from-top-2 faq-answer"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                      style={{
                        listStyleType: "disc",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="mt-10">
            <p className="text-center text-[36px] font-medium">
              Ready to Partner With Us?
            </p>
            <p className="my-5 w-[90%] ">
              Connect with our Employer Partnerships team to explore hiring,
              apprenticeship collaboration, or volunteer engagement—and join us
              in building a more inclusive tech industry.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-center text text-[36px] font-medium">
              Tandem Apprenticeship
            </p>
            <p className="my-5  ">
              Multiply opportunity and boost productivity with every line of
              code.
            </p>
            <p className="my-5  ">
              Tandem is Outcome School’s managed apprenticeship program built to
              help companies strengthen their teams now while developing a
              long-term, sustainable tech talent pipeline. In just a few months,
              partners can increase engineering capacity while opening
              life-changing opportunities for emerging professionals—including
              software developers, cybersecurity analysts, AI engineers, game
              developers, and more.
            </p>
            <p className="my-5  ">Become a partner</p>
            <p className="my-5  ">
              <i className="fa-solid fa-download text-xl"></i>{" "}
              <span className="text font-medium">
                {" "}
                Download program details{" "}
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DonateFAQ;
