import { useState } from "react";
import Footer from "../Component/Footer"
import NavBar from "../Component/NavBar"


const faqs = [
    {
        question: "What impact do Outcome School and employer partners make?",
        answer:
        "Outcome School exists to expand access to life-changing tech careers. Our employer partners help turn training into real opportunity through hiring, mentorship, and support.<br /><br />Impact outcomes include::<br /><ul><li>Increased access to jobs in technology</li><li>Greater economic stability for learners and their communities</li><li>Stronger, more equitable talent pipelines for employers</li>"
    },
    {
        question: "What’s the difference between Outcome School Graduates and Apprentices?",
        answer:
        "Outcome <b>School Graduates</b> complete a structured training program with mentorship and a team-based capstone project. They receive a strong foundation in programming and career readiness.<br /><br />Apprentices are top-performing graduates selected into a 1-year apprenticeship where they gain real-world experience building applications and websites for clients under the guidance of senior developers. Apprentices strengthen their professional skills in remote/hybrid environments and work in Agile-style collaboration.<br /><br />."
    },
    
    {
        question: "What technologies do participants work with? ",
        answer:
        "<p>Graduates typically focus on one or more of:</p> <ul><li>JavaScript (all graduates)</li> <li>React.js</li><li>Node.js</li><li>Ruby on Rails</li></ul> <br/> <p><b>Apprentices</b> often work with a broader set of tools, such as:</p> <ul><li>React.js, Node.js, Ruby on Rails.</li> <li>JavaScript, SQL, MongoDB</li> <li>TypeScript, Jest, Playwright, and more</li> </ul> <p> They also gain experience in Agile workflows, project coordination, and client collaboration.</p>"
           
    },

    {
        question: "What roles do graduates and apprentices typically land?",
        answer:
            "<ul><li><b>Graduates:</b> entry-level to junior-level software developer roles.</li><li><b>Apprentices:</b> junior-level to mid-level software developer roles.</li>"
    },
    {
        question: "What are the backgrounds of Outcome School participants?",
        answer:
            "Outcome School learners come from a wide range of backgrounds—bringing diverse perspectives that strengthen teams.<br /><br />Some have college degrees and professional experience in fields like education, hospitality, or engineering. Others have advanced degrees and 5+ years of work experience. Regardless of formal education, we consistently see strong traits across our learners: <strong> resilience, work ethic, and the ability to learn quickly and solve problems creatively. </strong>"
    },
    {
        question: "Does it cost to become an Employer Partner?",
        answer:
            "There is currently no cost to become an Outcome School Employer Partner.<br/><br/> If your company participates in our <strong> Tandem Apprenticeship </strong>, there may be costs associated with that program, scoped collaboratively based on the needs and structure agreed upon by both organizations."
    },
];


const EmployerPartnerships = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center ">
                    <div>
                        <p className="text-[45px] font-bold">
                            Employer Partnerships
                        </p>
                        <p className="text-[16px] font-regular my-5">
                            Let’s change the face of tech together.
                        </p>
                        <p className="text-[16px] font-regular my-5">
                            Outcome School connects mission-aligned employers with exceptional emerging talent. We were founded on a simple belief: everyone deserves access to opportunity and the ability to use their talents to reach their highest career potential.
                        </p>
                        <p className="text-[16px] font-regular my-5">
                            Our model is good for people and good for business. We create career pathways for learners from underrepresented backgrounds while helping companies build strong, inclusive tech talent pipelines.
                        </p>
                        <p className="text-[16px] font-regular my-5">
                            Partner with us to hire Outcome School graduates and apprentices, and help transform lives while strengthening your team.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="text-center text-[36px] font-medium">
                            How We Support Employer Partners
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-8 items-center justify-center mx-auto">

                            <div className="background rounded-[12px] py-3 mx-auto  px-1 text-white lg:w-[290px] lg:h-[350px]">
                                <p className="text-[28px] my-5 font-bold text-center">Expand Your Reach</p>
                                <p className="w-[70%] text-center mx-auto mb-3">
                                    We have a growing national network of developers. We can share your opportunities with motivated, job-ready candidates across the U.S. who match your desired skill set and experience level.
                                </p>
                            </div>
                            <div className="background rounded-[12px] py-3 mx-auto  px-1 text-white lg:w-[290px] lg:h-[350px]">
                                <p className="text-[28px] my-5 font-bold text-center mx-auto w-[80%]">Connect More Meaningfully</p>
                                <p className="w-[70%] text-center mx-auto mb-3">
                                    We take time to understand your mission, culture, and team needs. That enables us to recommend candidates who are aligned not just technically, but also in values and fit.
                                </p>
                            </div>
                            <div className="background rounded-[12px] py-3 mx-auto  px-1 text-white lg:w-[290px] lg:h-[350px]">
                                <p className="text-[28px] my-5 font-bold text-center mx-auto w-[80%]">Increase Your Impact</p>
                                <p className="w-[80%] text-center mx-auto mb-3">
                                    When an Outcome School participant lands their first role, it increases economic stability for their family and community and helps narrow the tech opportunity gap. Your hiring creates measurable change.
                                </p>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mb-8 items-center justify-center text-center mx-auto">


                            <div className="background rounded-[12px] py-3 mx-auto  text-white lg:w-[290px] lg:h-[350px]">
                                <p className="text-[28px] my-5 font-bold text-center w-[80%] mx-auto">Exceed Your Hiring Goals</p>
                                <p className="w-[70%] text-center mx-auto mb-3">
                                    Looking to build a stronger pipeline or open roles to nontraditional talent? Our grads and apprentices bring real skills, work ethic, and the drive to contribute quickly.
                                </p>
                            </div>
                            <div className="background rounded-[12px] py-3 mx-auto  text-white lg:w-[290px] lg:h-[350px]">
                                <p className="text-[28px] my-5 font-bold text-center w-[80%] mx-auto">Build Long-Term Relationships</p>
                                <p className="w-[70%] text-center mx-auto mb-3">
                                    Partnerships go beyond hiring. Employers can participate through apprenticeship collaboration, volunteering, networking events, webinars, panel discussions, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <p className="text-center text-[36px] mb-5 font-medium">
                            Ways to Partner With Outcome School
                        </p>
                        <div>
                            <p className="text text-[30px] mb-3 font-medium"> 1) Share Roles + Get Matched</p>
                            <p className="mb-3">Connect with our Employer Partnerships team to share job openings. We can:</p>
                            <p>
                                <ul className="list-disc ml-5">
                                    <li className="mb-3">post your roles to our community, or</li>
                                    <li className="mb-3">match candidates based on your specific needs.</li>
                                </ul>
                                <p>You’ll have a dedicated Outcome School contact to keep the partnership efficient, responsive, and growing.</p>
                            </p>
                        </div>

                        <div className="my-5">
                            <p className="text text-[30px] mb-3 font-medium"> 2) Tandem Apprenticeship</p>
                            <p className="mb-3">Our Tandem Apprenticeship is a unique way to increase your team’s capacity in just a few months while creating life-changing opportunities for new developers. Your team collaborates alongside our apprentices as they gain real-world experience.
                            </p>
                        </div>

                        <div className="my-5">
                            <p className="text text-[30px] mb-3 font-medium"> 3) Program Participation Through Volunteering</p>
                            <p className="mb-3">Your staff can volunteer in our classes or apprenticeship programming. This creates stronger relationships with our learners and often leads to high-quality referrals, making hiring smoother, faster, and more aligned.
                            </p>
                        </div>

                    </div>


                    <section className="py-10  ">

                            <h2 className="text-[28px] font-bold  mb-12  tracking-wide">
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









                    <div className="mt-10">
                        <p className="text-center text-[36px] font-medium">
                            Ready to Partner With Us?
                        </p>
                        <p className="my-5 w-[90%] ">
                            Connect with our Employer Partnerships team to explore hiring, apprenticeship collaboration, or volunteer engagement—and join us in building a more inclusive tech industry.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="text-center text text-[36px] font-medium">
                            Tandem Apprenticeship
                        </p>
                        <p className="my-5  ">
                            Multiply opportunity and boost productivity with every line of code.
                        </p>
                        <p className="my-5  ">
                            Tandem is Outcome School’s managed apprenticeship program built to help companies strengthen their teams now while developing a long-term, sustainable tech talent pipeline. In just a few months, partners can increase engineering capacity while opening life-changing opportunities for emerging professionals—including software developers, cybersecurity analysts, AI engineers, game developers, and more.
                        </p>
                        <p className="my-5  ">
                            Become a partner
                        </p>
                        <p className="my-5  ">
                            <i className="fa-solid fa-download text-xl"></i> <span className="text font-medium"> Download program details </span>
                        </p>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default EmployerPartnerships
