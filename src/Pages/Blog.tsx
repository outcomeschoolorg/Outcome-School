import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import FreeTechSchool from "../assets/images/FreeTechSchool.png";
import Flyers from "../assets/images/Flyers.png";

interface BlogItem {
  type: "card" | "iframe";
  title?: string;
  date?: string;
  description?: string;
  image?: string;
  src?: string;
  tag?: string[];
  month?: string;
}

const items: BlogItem[] = [
  {
    type: "iframe",
    tag: ["TechBootcamps", "CareerGrowth", "Upskilling"],
    month: "Apr 2026",
    src: "urn:li:ugcPost:7445512886438801408",
  },
  {
    type: "iframe",
    tag: ["TechCareer", "StructuredLearning", "CareerGrowth"],
    month: "Apr 2026",
    src: "urn:li:ugcPost:7445509020490084353",
  },
  {
    type: "iframe",
    tag: ["RealProjects", "StructuredLearning", "TechCareer"],
    month: "Apr 2026",
    src: "urn:li:ugcPost:7445504594341752834",
  },
  {
    type: "card",
    tag: ["Social Impact", "Youth Empowerment", "Education Access"],
    image: "FreeTechSchool",
    month: "May 2026",
    src: "https://medium.com/@outcomeschoolorg/outcome-school-partners-with-grow-with-google-to-bring-free-digital-skills-training-to-underserved-cb8ba1ed43af",
  },
  {
    type: "card",
    image: "Flyers",
    date: "May 2026",
    src: "https://medium.com/@outcomeschoolorg/outcome-school-joins-cisco-networking-academy-expanding-tech-access-for-youth-f123a5f61b33",
  },
];

const Blog = () => {
  const parseMonth = (month?: string) => {
    if (!month) return new Date(0);
    return new Date(month); // "Apr 2026" → valid Date
  };
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[9em] py-10 mx-auto items-center ">
          <div className="mb-14">
            <p className="text-[48px] text-center mb-7 mx-auto font-bold">
              Blog
            </p>
            <p className="bg-[#6036E1] lg:w-[40%] mx-auto text-center font-semibold border-2 border-[#6036E1] text-white rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-3 py-3 hover:text-[#6036E1] hover:bg-white">
              Subscribe for the Latest News from Outcome School
            </p>

            <div className="mt-10">
              <p className="font-bold text-[28px]">Latest News</p>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                {[...items]
                  .sort(
                    (a, b) =>
                      parseMonth(b.month).getTime() -
                      parseMonth(a.month).getTime(),
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[12px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="bg-[#7C33FF] p-4 rounded-t-[12px] flex items-stretch h-[750px]">
                        {item.type === "iframe" ? (
                          <iframe
                            src={
                              item.src?.startsWith("urn:li:")
                                ? `https://www.linkedin.com/embed/feed/update/${item.src}?collapsed=1`
                                : item.src
                            }
                            className="w-full min-h-[500px] md:min-h-[500px] lg:min-h-[700px] rounded-[10px]"
                            allowFullScreen
                            title={`iframe-${index}`}
                          />
                        ) : (
                          <a
                            href={item.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center"
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <img
                                src={FreeTechSchool}
                                alt="Blog"
                                className="max-h-[100%] max-w-[100%] object-contain rounded-[10px]"
                              />
                            </div>
                          </a>
                        )}
                      </div>
                      <div className="bg-[#DCDAEC] p-5 flex justify-between items-center rounded-b-[12px]">
                        {/* Tags container */}
                        <div className="flex gap-2 flex-wrap">
                          {item.tag?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-white rounded-xl px-3 py-1 text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Month aligned to right */}
                        <span className="text-gray-600">
                          {item.month || "Month 00, 0000"}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
