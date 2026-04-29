import { useParams, Link } from "react-router";
import { events } from "../data/events";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";

const BlogEventsDetails = () => {
  const { id } = useParams();

  const event = events[Number(id)];

  if (!event) {
    return (
      <>
        <NavBar />
        <div className="pt-[10em] text-center">
          <h1 className="text-3xl font-bold">Event not found</h1>
          <Link to="/events" className="text-blue-500 underline">
            Go back
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <div className="pt-[9em] pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* IMAGE */}
          <img
            src={event.image}
            className="w-full rounded-xl mb-8"
            alt={event.title}
          />

          {/* TAG */}
          <span className="border px-3 py-1 rounded-full text-sm">
            {event.tag}
          </span>

          {/* TITLE */}
          <h1 className="text-4xl font-bold mt-4">{event.title}</h1>

          {/* META */}
          <p className="mt-4 text-gray-600">
            📅 {event.date} | 🕒 {event.time} | 🌍 {event.timezone}
          </p>

          <p className="text-gray-600">📍 {event.location}</p>

          {/* DESCRIPTION */}
          {event.description && (
            <div className="mt-8 whitespace-pre-line text-gray-700 leading-relaxed font-semibold">
              {event.description}
            </div>
          )}

          {/* BACK BUTTON */}
          <Link
            to="/"
            className="inline-block mt-10 bg-[#7D65ED] text-white px-6 py-3 rounded-full"
          >
            Back
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogEventsDetails;
