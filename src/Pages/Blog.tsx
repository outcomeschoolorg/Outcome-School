import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

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
    tag: [
      "TechCareer",
      "StructuredLearning",
      "CareerGrowth",
      "OutcomeSchoolMethod",
    ],
    month: "Apr 2026",
    src: "urn:li:ugcPost:7445509020490084353",
  },
  {
    type: "iframe",
    tag: ["RealProjects", "StructuredLearning", "TechCareer"],
    month: "Apr 2026",
    src: "urn:li:ugcPost:7445504594341752834",
  },
];

const Blog = () => {
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
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[12px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="bg-[#7C33FF] p-4 rounded-t-[12px] flex justifycenter item-strech">
                      <iframe
                        src={`https://www.linkedin.com/embed/feed/update/${item.src}?collapsed=1`}
                        className="w-full min-h-[500px] md:min-h-[500px] lg:min-h-[700px] rounded-[10px]"
                        allowFullScreen
                        title={`iframe-${index}`}
                      />
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
