import { Link } from "react-router";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import { events } from "../data/events";

const Events = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 pt-[9em] py-10 mx-auto">
          {/* HEADER */}
          <div className="mb-14 text-center">
            <p className="text-[48px] font-bold">Events</p>
            <p className="text-[28px] lg:w-[90%] mx-auto font-semibold mt-3">
              Join a tech skill class, register for an info session, or attend a
              career development event. All for free.
            </p>
          </div>

          {/* EVENTS LIST */}
          <div>
            <p className="mb-5 text-[28px] font-bold">Upcoming Events</p>

            {events.map((event, index) => (
              <Link
                key={event.title}
                to={`/event-details/${index}`}
                className="block border-2 border-[#7D65ED] rounded-[12px] py-4 px-5 mb-5 max-w-5xl mx-auto flex flex-col lg:flex-row gap-5 hover:bg-gray-50 hover:shadow-md transition"
              >
                {/* IMAGE */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full lg:w-[260px] h-auto object-cover rounded-lg"
                />

                {/* CONTENT */}
                <div className="w-full">
                  {/* TAG */}
                  <span className="inline-block border border-[#DAD8FC] rounded-full px-3 py-1 text-sm">
                    {event.tag}
                  </span>

                  {/* TITLE */}
                  <p className="font-bold mt-4 text-[28px] break-words">
                    {event.title}
                  </p>

                  {/* DATE / TIME */}
                  <p className="flex flex-wrap items-center text-[16px] mt-4 mb-2 text-[#444269] font-medium gap-2">
                    <i className="fa-regular fa-calendar text-black"></i>
                    <span>{event.date}</span>
                    <span>|</span>
                    <span>{event.time}</span>
                    <span>|</span>
                    <span>{event.timezone}</span>
                  </p>

                  {/* LOCATION */}
                  <p className="text-[16px] text-[#444269] font-medium">
                    <i className="fa-solid fa-location-dot mr-2 text-black"></i>
                    {event.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="py-10">
            <div className="bg-[#DAD8FC] rounded-[20px] flex flex-col py-10 gap-4 px-10 items-center text-center">
              <p className="font-extrabold text-[45px]">
                Looking for Courses & Workshops?
              </p>
              <p className="font-bold text-[20px]">
                Role-relevant courses and hands-on workshops that build
                real-world AI capability.
              </p>

              <Link to="/course-description">
                <button
                  type="button"
                  className="rounded-full py-4 px-9 text-white font-semibold text-[18px] bg-[#7D65ED]"
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;
