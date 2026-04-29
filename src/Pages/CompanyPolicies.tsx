import { Link } from "react-router-dom"
import NavBar from "../Component/NavBar"
import Footer from "../Component/Footer"


const CompanyPolicies = () => {
    return (
        <>

            <NavBar />

            <div className="policy"></div>

            <div className="bg-[#F9F6FF]">
                <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">

                    <div >
                        <p className="text font-extrabold text-6xl mb-10 uppercase">Privacy Policy</p>
                        <p className="mb-5">
                            This Privacy Policy explains how Outcome School (“we,” “our,” “us”) collects, uses, and protects your personal information when you visit our website or use our services. By accessing our website or participating in our programs, you agree to the practices described in this policy.
                        </p>
                        <p>
                            We are committed to safeguarding your privacy. Any personal information collected is used only to support our educational mission, improve our services, and communicate with you. We do not sell or share your information with third parties for marketing purposes.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Information We Collect</p>
                        <p className="mb-5">
                            To provide our programs and services, we may ask you to share personal information such as:
                        </p>
                        <ul className="list-disc ml-8 mb-4">
                            <li className="mb-3">First and last name</li>
                            <li className="mb-3">Email address</li>
                            <li className="mb-3">Phone number</li>
                            <li className="mb-3">Mailing address</li>
                            <li className="mb-3">Course registration information</li>
                            <li className="mb-3">Usage data collected through cookies or similar technologies</li>
                        </ul>
                        <p>
                            We collect this information to deliver, improve, and support our educational services.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">How We Use Your Personal Information</p>
                        <p className="mb-5">
                            Outcome School may use your information for the following purposes:
                        </p>
                        <ul className="list-disc ml-8 mb-4">
                            <li className="mb-3"> To provide and maintain our programs and services.</li>
                            <li className="mb-3"> To monitor and improve the performance of our website and offerings.</li>
                            <li className="mb-3">To communicate with you via email, SMS, or phone regarding updates, classes, events, or support. </li>
                            <li className="mb-3">To share news, opportunities, or announcements related to our courses and mission (unless you opt out). </li>
                            <li className="mb-3">To respond to your questions or requests. </li>
                            <li className="mb-3">To conduct data analysis, evaluate program effectiveness, and enhance student experience.</li>
                        </ul>
                        <p>
                            We may also use your data for additional purposes consistent with our nonprofit mission, provided they are disclosed in this Policy or shared with your consent..
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Third-Party Service Providers</p>
                        <p className="mb-5">
                            We may work with trusted third-party providers who assist with:
                        </p>
                        <ul className="list-disc ml-8 mb-4">
                            <li className="mb-3"> Hosting and maintaining our website. </li>
                            <li className="mb-3"> Processing program registrations. </li>
                            <li className="mb-3"> Email and communication services. </li>
                            <li className="mb-3">Data analytics and reporting. </li>
                        </ul>
                        <p>
                            These partners may access your personal information solely to perform tasks on our behalf and are required to keep your data confidential.
                            .
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Links to External Websites</p>
                       
                        <p>
                            Our website may contain links to external sites not operated by Outcome School. We encourage you to review the privacy policies of any site you visit. We are not responsible for the practices of third-party websites.
                            .
                        </p>
                    </div>
                    
                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Children’s Privacy</p>
                        <p>
                           Outcome School does not knowingly collect personal information from children under the age of 13. If we learn that such information has been provided, we will delete it promptly. If you believe a child under 13 has submitted personal data to us, please contact us immediately.
                        </p>
                    </div>
                    
                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Data Retention</p>
                        <p>
                          We retain personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or to comply with legal obligations. Usage data may be retained for internal analysis or security purposes.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Data Transfers</p>
                        <p>
                          Your information may be processed on servers located outside your state or country. By submitting your information, you consent to these transfers. We take all reasonable steps to ensure your data is handled securely and in accordance with this Privacy Policy.
                        </p>
                    </div>
                    
                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Your Data Rights</p>
                        <p className="mb-5">     You have the right to: </p>
                        <ul className="list-disc ml-8 mb-4">
                            <li className="mb-3"> Request access to the personal information we hold. </li>
                            <li className="mb-3"> Correct or update inaccurate information. </li>
                            <li className="mb-3"> Request deletion of your data, unless we must retain it for legal reasons. </li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us using the information below.
                        </p>
                    </div>
                    
                    <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Disclosure of Information</p>
                        <p className="mb-5">    We may disclose your personal data only when required to: </p>
                        <ul className="list-disc ml-8 mb-4">
                            <li className="mb-3"> Comply with legal obligations. </li>
                            <li className="mb-3"> Respond to government or law-enforcement requests. </li>
                            <li className="mb-3"> Prevent or investigate misuse of our services. </li>
                            <li className="mb-3"> Protect the safety and rights of participants, staff, or the public. </li>
                            <li className="mb-3">Support organizational changes such as mergers, restructuring, or asset transfers. </li>
                        </ul>
                    </div>

                      <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Changes to This Privacy Policy</p>
                        <p>
                          We may update this Privacy Policy periodically. Any changes will be posted on this page and will take effect immediately upon posting. We encourage you to review this Policy regularly.
                        </p>
                    </div>
                      
                      <div className="mt-10">
                        <p className="text font-extrabold text-4xl mb-5 uppercase">Contact Us</p>
                        <p>
                          If you have any questions, concerns, or suggestions regarding this Privacy Policy, please contact us at <Link to="mailto: samson@outcomeschool.org " className="text font-medium text-[18px] cursor-pointer hover:underline">
                               samson@outcomeschool.org
                                  </Link>
                        </p>
                    </div>


                </div>
            </div>



            <Footer />



        </>
    )
}

export default CompanyPolicies
