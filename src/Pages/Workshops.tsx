import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import workshop from "../assets/images/workshop.jpg";

const Workshops = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <NavBar />
      </nav>

      <div className="bg-white pt-32 px-4 md:px-10 lg:px-20 space-y-16">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-medium uppercase">
          Workshops
        </h1>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <img
            src={workshop}
            alt="Workshops"
            className="w-full h-[300px] md:h-[420px] object-cover rounded-2xl shadow-md"
          />

          <div className="space-y-4">
            <p className="font-semibold text-lg">
              Build. Create. Discover Your Future in Tech.
            </p>

            <p>
              Outcome School workshops give students a hands-on introduction to
              technology, creativity, and future career pathways. Whether a
              student is curious about coding, AI, cybersecurity, robotics, game
              development, product design, or digital skills, our workshops help
              them take the first step.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>They build real projects.</li>
              <li>They solve real problems.</li>
              <li>They practice new skills.</li>
              <li>They showcase what they create.</li>
              <li>They leave with confidence and a clear next step.</li>
              <li>No prior tech experience is required.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/events">
            <button className="bg-[#6036E1] text-white font-semibold px-6 py-3 rounded-full border-2 border-[#6036E1] hover:bg-white hover:text-[#6036E1] transition">
              Register for an Upcoming Workshop
            </button>
          </Link>
        </div>

        {/* What Students Learn */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">What Students Will Experience</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Learn how technology connects to real-world problems</li>
            <li>Build a beginner project with instructor support</li>
            <li>Explore tech careers and future pathways</li>
            <li>Practice creativity, teamwork, and problem-solving</li>
            <li>Present what they built during a mini showcase</li>
            <li>Discover the next step into Outcome School programs</li>
          </ul>

          <p>
            Our workshops follow a simple model:{" "}
            <strong>
              Problem → Demo → Build → Practice → Showcase → Pathway
            </strong>
          </p>
        </div>

        {/* Workshop Types */}
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h3 className="font-bold text-xl">Future Builders Tech Camp</h3>
            <p className="text-sm text-gray-600">For ages 7–13</p>
            <p>
              A fun, creative introduction to technology where students explore
              coding, games, robotics ideas, and problem-solving.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Tech Career Launchpad</h3>
            <p className="text-sm text-gray-600">For ages 13–18</p>
            <p>
              A career-focused workshop exploring software engineering, AI,
              cybersecurity, robotics, and product design.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Digital Skills for Economic Mobility
            </h3>
            <p className="text-sm text-gray-600">
              Opportunity youth, reentry youth, young adults
            </p>
            <p>
              A practical workshop focused on job readiness, digital confidence,
              communication, and career pathways.
            </p>
          </div>
        </div>

        {/* Topics */}
        <div className="max-w-4xl mx-auto space-y-4">
          <p>
            Outcome School workshops can be delivered in person or virtually.
          </p>

          <h3 className="font-bold">Popular topics include:</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Build Your First Website</li>
            <li>AI for School, Work, and Life</li>
            <li>Intro to Coding with Python</li>
            <li>Cybersecurity Basics</li>
            <li>Game Development Starter</li>
            <li>Product Design with Figma</li>
            <li>Robotics and Real-World Engineering</li>
            <li>Resume, LinkedIn, and Interview Lab</li>
          </ul>
        </div>

        {/* Who Should Register */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Who Should Register?</h2>

          <p>
            Outcome School workshops are for students and organizations who want
            to explore technology and build confidence.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>A student curious about tech</li>
            <li>A parent looking for hands-on learning</li>
            <li>A school or youth organization</li>
            <li>A community organization</li>
            <li>An employer sponsoring workshops</li>
            <li>A partner bringing tech access to communities</li>
          </ul>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Join a Workshop?</h2>

          <p>Take the first step into tech with Outcome School.</p>

          <p>
            Register today to build your first project, explore future careers,
            and open new opportunities.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/events">
              <button className="bg-[#6036E1] text-white px-6 py-3 rounded-full border-2 border-[#6036E1] hover:bg-white hover:text-[#6036E1] transition">
                Register for a Workshop
              </button>
            </Link>

            <Link to="/contact">
              <button className="bg-[#6036E1] text-white px-6 py-3 rounded-full border-2 border-[#6036E1] hover:bg-white hover:text-[#6036E1] transition">
                Bring a Workshop to Your Organization
              </button>
            </Link>
          </div>

          <p className="italic">
            Do not just learn about tech. Build with it, present it, and see
            yourself in the future of technology.
          </p>
        </div>
      </div>
      <footer className="mt-3">
        <Footer />
      </footer>
    </>
  );
};

export default Workshops;
