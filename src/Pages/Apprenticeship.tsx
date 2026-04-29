import { useState } from "react";
import Footer from "../Component/Footer"
import NavBar from "../Component/NavBar"

const faqs = [
    {
        question: "How many apprentices are typically involved in a Tandem Apprenticeship?",
        answer:
            "Most partnerships include 3 to 10 apprentices, but the exact number is customized based on your scope and goals."
    },
    {
        question: "How long is the Tandem Apprenticeship program?",
        answer:
            "Most programs run full-time for 6 months, with the option to extend. Timelines can be tailored to your organization’s needs."
    },
    {
        question: "Can we hire apprentices after the program?",
        answer:
            "Yes. Hiring is a common outcome and a major goal of the program, but it is not required to participate."
    },
    {
        question: "Can we hire Outcome School grads or apprentices without joining Tandem?",
        answer:
            "Yes. You can still hire Outcome School graduates or apprentices even if you’re not currently participating in Tandem. See our Hiring Opportunities and Employer Partnerships page for details."
    },
    {
        question: "What does Tandem typically cost?",
        answer:
            "Cost depends on the defined scope—such as: <br/> <ul><li> the number of apprentices</li> <li>the level of senior developer support needed from Outcome School</li> <li>the length and structure of engagement</li></ul>  <p> Costs typically include recruitment, training, apprentice compensation, and benefits, and can be up to 15% lower than some traditional hiring approaches. Contact us to discuss pricing and fit. </p>"
    },
];

const Apprenticeship = () => {

 const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <>
            <NavBar />
            <div className="bg-white">
                <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
                    <div className="mb-14">
                        <p className="text-[48px] text-center lg:w-[70%] mb-7 mx-auto font-bold">
                            Tandem: Outcome School’s Managed Apprenticeship Model
                        </p>
                        <p className="my-3">
                            Tandem is a bespoke, low-risk, high-support talent development strategy that complements your existing hiring efforts. It gives your organization a dual benefit:
                        </p>
                        <p>
                            <ul className="list-decimal ml-5">
                                <li className="mb-3">Build a sustainable talent pipeline through a structured apprenticeship approach</li>
                                <li className="mb-3">Increase team capacity immediately with apprentices delivering real work</li>
                            </ul>
                        </p>
                    </div>

                    <div className="mb-10">
                        <p className="text-[36px] text text-center lg:w-[70%] mb-8 mx-auto font-medium">
                            Build a Sustainable Tech Talent Pipeline
                        </p>

                        <div className="mb-10">
                            <p className="text-[30px] mb-3 font-medium">
                                Trained, Tested Talent—Without the Guesswork
                            </p>
                            <p className="my-3">
                                Outcome School’s programs are highly selective and completely free for learners. That allows us to consistently identify motivated candidates who are prepared to contribute professionally.
                            </p>
                            {/* <p>
                                <ul className="list-decimal ml-5">
                                    <li className="mb-3">Build a sustainable talent pipeline through a structured apprenticeship approach</li>
                                    <li className="mb-3">Increase team capacity immediately with apprentices delivering real work</li>
                                </ul>
                            </p> */}
                        </div>

                        <div className="mb-10">
                            <p className="text-[30px] mb-3 font-medium">
                                Motivated, High-Potential Apprentices
                            </p>
                            <p className="my-3">
                                We select a small percentage of applicants nationwide for our rigorous training programs. Top performers earn an apprenticeship opportunity where they gain hands-on experience through real projects.
                            </p>
                            <p className="my-3">
                                Our learners often come from nontraditional backgrounds, bringing fresh perspectives, resilience, and strong problem-solving skills to business and technical challenges.
                            </p>
                        </div>

                        <div className="mb-14">
                            <p className="text-[30px] mb-3 font-medium">
                                A Partnership That Manages the Process
                            </p>
                            <p className="my-3">
                                Outcome School works with your team to mentor and support apprentices through our structured model. This “plug-and-play” approach allows you to benefit from apprenticeship talent without needing to build a full program from scratch or hire upfront.
                            </p>
                        </div>
                    </div>

                    <div className="mb-14">
                        <p className="text-[30px] mb-3 font-medium mx-auto text-center text">
                            Add Immediate Value to Your Tech Teams
                        </p>
                        <p className="my-3 font-medium">
                            Tandem is more than talent development—it’s capacity building. Apprentices are supported by Outcome School’s senior team and can contribute shippable work quickly.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mb-8 items-center justify-center text-center mx-auto">

                            <div className="background rounded-[12px] py-3 mx-auto  text-white lg:w-[290px] lg:h-[350px] ">
                                <p className="text-[28px] mt-5 mb-2 font-bold text-center  mx-auto">
                                    1. Scope
                                </p>
                                <p className="w-[80%] text-center mx-auto font-medium mb-2">
                                    We work with you to define the work apprentices will support. Apprentices can be:
                                </p>
                                <ul className="list-disc ml-10 w-[80%] items-center font-medium justify-center text-center mx-auto">
                                    <li className="mb-3 ">embedded into your existing teams, or</li>
                                    <li className="mb-3">assigned to a cohort-based project team supported by Outcome School senior developers</li>
                                </ul>
                            </div>

                            <div className="background rounded-[12px] py-3 mx-auto  text-white lg:w-[290px] lg:h-[350px]">
                                <p className="text-[28px] my-5 font-bold text-center w-[80%] mx-auto">
                                    2. Deploy
                                </p>
                                <p className="w-[70%] text-center mx-auto mb-3 font-medium">
                                    We place apprentices based on your scope and technical needs, with optional project oversight and mentorship from Outcome School senior developers.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mb-8 items-center justify-center text-center mx-auto">

                            <div className="background rounded-[12px] py-3 mx-auto  text-white lg:w-[290px] lg:h-[350px]">
                                <p className="text-[28px] mt-5 mb-8 font-bold text-center  mx-auto">
                                    3. Deliver
                                </p>
                                <p className="w-[80%] text-center mx-auto mb-2 font-medium">
                                    Apprentices contribute meaningful output and deliver shippable code that supports real business goals.
                                </p>
                            </div>

                            <div className="background rounded-[12px] py-3 mx-auto  text-white lg:w-[290px] lg:h-[350px]">
                                <p className="text-[28px] mb-2 font-bold text-center  w-[90%] mx-auto">
                                   4. Hire (Optional but Recommended)
                                </p>
                                <p className="w-[70%] text-center mx-auto mb-3  font-medium">
                                    At the end of the apprenticeship, you may offer full-time roles to apprentices who meet your standards—retaining the knowledge, momentum, and skills already developed.
                                </p>
                            </div>
                        </div>
                        <p><strong>Typical duration: </strong> 6–12 months (customizable based on your needs)</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-[30px] mb-3 font-medium mx-auto text-center text">
                            Ready to Get Started?
                        </p>
                        <p>
                            Contact us to explore a Tandem Apprenticeship partnership and discuss what scope and support would best fit your organization.
                        </p>
                    </div>


 <section className="py-10  ">

                            <h2 className="text-[32px] text-center font-bold  mb-12  tracking-wide">
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-4  mx-auto">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                                                    listStyleType: 'disc',
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                    </section>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default Apprenticeship
