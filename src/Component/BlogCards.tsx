import { useRef } from "react";
import "../App.css";
import blog from "../assets/images/blog.jpg";
import htmlevent from "../assets/images/HTML-CSS.png";
import UIevent from "../assets/images/UI-UX.png";
import { Link } from "react-router-dom";
import FreeTechSchool from "../assets/images/FreeTechSchool.png";
import Flyers from "../assets/images/Flyers.png";

interface BlogItem {
  type: "card" | "iframe";
  id?: number;
  title?: string;
  date?: string;
  description?: string;
  image?: string;
  src?: string;
}

const items: BlogItem[] = [
  {
    id: 1,
    type: "card",
    title: "Product Demo (UX/UI Design Graduation Event)",
    date: "May 14, 2026",
    image: UIevent,
    description: "UI/UX graduation showcase event with student projects.",
  },
  {
    id: 2,
    type: "card",
    date: "April 9, 2026",
    image: blog,
  },
  {
    type: "iframe",
    src: "urn:li:ugcPost:7445512886438801408",
  },
  {
    type: "iframe",
    src: "urn:li:ugcPost:7445509020490084353",
  },
  {
    type: "iframe",
    src: "urn:li:ugcPost:7445504594341752834",
  },
  {
    type: "card",
    image: FreeTechSchool,
    date: "May 2026",
    src: "https://medium.com/@outcomeschoolorg/outcome-school-partners-with-grow-with-google-to-bring-free-digital-skills-training-to-underserved-cb8ba1ed43af",
  },
  {
    type: "card",
    image: Flyers,
    date: "May 2026",
    src: "https://medium.com/@outcomeschoolorg/outcome-school-joins-cisco-networking-academy-expanding-tech-access-for-youth-f123a5f61b33",
  },
  {
    id: 0,
    type: "card",
    title: "Product Demo (HTML/CSS Graduation Event)",
    date: "",
    image: htmlevent,
    description: "Final HTML/CSS project showcase.",
  },
];

const MixedCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const parseDate = (date?: string) => {
    if (!date) return new Date(0); // fallback for iframes
    if (/^[A-Za-z]+ \d{4}$/.test(date)) {
      return new Date(`1 ${date}`);
    }

    return new Date(date);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#7C33FF] relative" id="blog">
      <div className="container relative py-10 px-10 mx-auto">
        <p className="text-white text-[40px] font-bold text-center">
          Blogs & Events
        </p>

        {/* arrows */}
        <div className="flex flex-row gap-5 my-5 justify-end">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-5 text-center mx-auto items-center"> */}
          <i
            onClick={() => scroll("left")}
            className="fa-solid fa-arrow-left border bg-white py-3 px-3 rounded-[12px] cursor-pointer hover:bg-[#7C33FF] hover:text-white"
          ></i>

          <i
            onClick={() => scroll("right")}
            className="fa-solid fa-arrow-right border bg-white py-3 px-3 rounded-[12px] cursor-pointer hover:bg-[#7C33FF] hover:text-white"
          ></i>
        </div>

        {/* scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth mt-10 pb-4 hide-scrollbar"
        >
          {[...items]
            .sort(
              (a, b) =>
                parseDate(b.date).getTime() - parseDate(a.date).getTime(),
            )
            .map((item, index) => {
              const content =
                item.type === "card" ? (
                  <>
                    {item.date && (
                      <time className="inline-block px-3 py-3 mt-2 ml-2 text-s font-medium text-gray-700  rounded-full">
                        &nbsp;&nbsp; {item.date}
                      </time>
                    )}

                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full min-h-[350px] max-h-[450px] object-cover rounded-md mb-2"
                      />
                    )}

                    <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
                      {item.title && (
                        <h3 className="font-bold text-lg text-center py-3 px-4 break-words text-gray-700 bg-gray-100 rounded-full">
                          {item.title}
                        </h3>
                      )}

                      {item.description && (
                        <p className="text-gray-600 text-sm break-words overflow-hidden">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <iframe
                    src={`https://www.linkedin.com/embed/feed/update/${item.src}?collapsed=1`}
                    className="w-full h-full rounded-[10px]"
                    frameBorder="0"
                    allowFullScreen
                    title={`iframe-${index}`}
                  />
                );

              return (
                <div
                  key={index}
                  className="
                  flex-shrink-0 w-[404px] h-[610px]
                  rounded-[10px] border-4 border-[#7C33FF]
                  bg-white shadow-md overflow-hidden flex flex-col
                  transition-all duration-400 ease-in-out
                  hover:scale-102 hover:shadow-lg hover:border-white
                  cursor-pointer
                "
                >
                  {item.type === "card" ? (
                    item.src ? (
                      <a
                        href={item.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full flex flex-col w-full"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        to={`/events/${item.id}`}
                        className="h-full flex flex-col w-full"
                      >
                        {content}
                      </Link>
                    )
                  ) : (
                    content
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MixedCarousel;
