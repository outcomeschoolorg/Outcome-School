import Footer from "../../Component/Footer"
import NavBar from "../../Component/NavBar"
import one from "../../assets/images/07.svg"
import { Link } from "react-router";
import StudentReview from "../../Component/StudentReview";


const FullStack = () => {
    return (
        <>
            <NavBar />

            <div className="bg-white">
                <div className="container px-10 pt-[10em] py-10 mx-auto items-center justify-center h-auto">
                    <div className="mb-14">
                    <p className="text-black font-bold lg:font-extrabold text-[30px] lg:text-[45px] text-center ">
                        Full-Stack Development (Backend + Database + Auth)
                    </p>
                    <p className="text-[18px] font-semibold text-[#BDBEEE] text-center">Level 3 — Advanced</p>
                    </div>

                    <div className=" mx-auto items-center flex flex-col md:flex-row gap-10   ">
                        <div className="md:w-1/2 items-center justify-center ">

                            <div className=" leading-relaxed    ">
                                <p className="font-medium">
                                    <span className="text"> Goal: </span> Build complete products with backend logic, database, authentication, and deployment.
                                </p>
                                <div>
                                    <p className="font-medium  mb-3">Choose a stack (recommended)</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>  Node.js + Express + PostgreSQL (or MongoDB)</li>
                                        <li>OR Next.js full-stack (API routes + database)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium  mb-3">Learn</p>
                                    <ul className="list-disc   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>  Backend fundamentals: REST APIs, middleware, validation, error handling</li>
                                        <li> Databases:
                                            <ul className="list-decimal ml-4 mb-3">
                                                <li>  SQL basics (tables, joins, indexes) or Mongo collections  </li>
                                                <li> ORM option: Prisma / Sequelize / Mongoose </li>
                                            </ul>
                                        </li>
                                        <li>Authentication & security: JWT/sessions, hashing passwords, RBAC basics</li>
                                        <li>File storage: image upload (cloud storage concept), form-data</li>
                                        <li>Deployment: Render/Fly.io/Vercel + DB hosting</li>
                                        <li>API documentation: Swagger/OpenAPI (basic)</li>
                                        <li>Performance basics: pagination, caching, rate limits</li>
                                    </ul>
                                </div>
                                <p className="my-5">
                                    <p className="font-medium  mb-3">Portfolio projects (build 2)</p>
                                    <ul className="list-decimal   font-regular lg:ml-5 mb-3 px-5 lg:px-0">
                                        <li>   Full-Stack Booking App (users, listings, booking flow, admin dashboard)</li>
                                        <li>Social App or CRM
                                                <ul className="list-disc ml-4">
                                                        <li>auth, CRUD, search, comments/likes, notifications (basic), role permissions</li>
                                                </ul>
                                        </li>
                                        
                                    </ul>
                                </p>
                                <p className="">
                                    <p className="font-medium  mb-3">Level 3 milestone</p>
                                    <p className="font-regular">
                                        You can ship a full-stack app end-to-end with a real database, auth, and deployment.
                                    </p>

                                </p>

                            </div>

                        </div>

                        <div className="md:w-1/2  rounded-lg  mx-auto items-center">
                            <img src={one} alt="Programming" className=" object-cover w-[502px] h-[502px] rounded-[20px] " />

                        </div>
                    </div>

                </div>
            </div>
<StudentReview/>


 

      <div className="pb-10">
        <div className="bg-[#5D7BF380] rounded-[20px] container flex flex-col py-10 gap-4 px-10 mx-auto items-center  ">
          <p className="font-extrabold  text-[45px] text-center">
            Ready to Take the Next Step?
          </p>
          <Link to="/application-process">
          <button type="button" className="background rounded-[999px] py-4 lg:py-6 px-7 lg:px-9 mx-auto text-white font-semibold text-[16px]">
            Go to the Application Process
          </button>
          </Link>
        </div>
      </div>

      <Footer />


        </>
    )
}

export default FullStack;
