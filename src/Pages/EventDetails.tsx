import { useParams, Link } from "react-router";
import { events } from "../data/events";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";

const EventDetails = () => {
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
          <div className="flex flex-wrap gap-2 mt-2">
            {event.tag.map((t, index) => (
              <span
                key={index}
                className="border px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-bold mt-4">{event.title}</h1>

          {/* META */}
          <p className="mt-4 text-gray-600">
            📅 {event.date} | 🕒 {event.time} | 🌍 {event.timezone}
          </p>

          {/* DESCRIPTION */}
          {event.description && (
            <div className="mt-8 whitespace-pre-line text-gray-700 leading-relaxed font-semibold">
              {event.description}
            </div>
          )}

          <br />
          {event.register && (
            <div className="mb-5">
              <a
                href={event.register}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full 
             bg-gradient-to-r from-[#8A38F5] to-[#6D28D9]
             text-white font-semibold shadow-lg
             hover:shadow-xl hover:scale-105 active:scale-95
             transition-all duration-200 ease-in-out"
              >
                Register Now
                <span className="text-lg">→</span>
              </a>
            </div>
          )}

          {!event.location.toLowerCase().includes("online") &&
            !event.location.toLowerCase().includes("virtual") &&
            event.mapEmbed && (
              <div className="overflow-hidden rounded-2xl border">
                <div>
                  <p className="text-gray-600">📍 {event.location}</p>
                </div>
                <iframe
                  src={event.mapEmbed}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            )}

          {/* BACK BUTTON */}
          <Link
            to="/events"
            className="inline-block mt-10 bg-[#7D65ED] text-white px-6 py-3 rounded-full"
          >
            Back to Events
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventDetails;
