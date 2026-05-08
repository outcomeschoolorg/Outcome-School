import { Link } from "react-router";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import { events } from "../data/events";
import { useMemo, useState, useRef, useEffect } from "react";
import EventSearch from "../Component/EventSearch";

const Events = () => {
  const [filter, setFilter] = useState("all");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const normalize = (date: string | Date): Date => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const today = normalize(new Date());

  const getButtonClass = (value: string) =>
    `font-semibold border-2 rounded-full px-4 py-2 transition ${
      filter === value
        ? "bg-white text-[#6036E1] border-[#6036E1] shadow-md"
        : "bg-[#6036E1] text-white border-[#6036E1] hover:bg-white hover:text-[#6036E1]"
    }`;

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);

    // DATE FILTER
    let matchesDate = true;

    switch (filter) {
      case "past":
        matchesDate = eventDate < today;
        break;
      case "upcoming":
        matchesDate = eventDate >= today;
        break;
      case "next7":
        const next7 = new Date();
        next7.setDate(today.getDate() + 7);
        matchesDate = eventDate >= today && eventDate <= next7;
        break;
      case "next30":
        const next30 = new Date();
        next30.setDate(today.getDate() + 30);
        matchesDate = eventDate >= today && eventDate <= next30;
        break;
    }

    // KEYWORD SEARCH
    const matchesSearch = event.title
      .toLowerCase()
      .includes(eventName.toLowerCase());

    // LOCATION
    const matchesCity = location
      ? event.location.toLowerCase().includes(location.toLowerCase())
      : true;

    // ONLINE FILTER
    const matchesOnline = onlineOnly
      ? event.location.toLowerCase().includes("online")
      : true;

    // MULTI FILTER (FIXED)
    const matchesFilters =
      selectedFilters.length === 0 ? true : selectedFilters.includes(event.tag);

    return (
      matchesDate &&
      matchesSearch &&
      matchesCity &&
      matchesOnline &&
      matchesFilters
    );
  });

  return (
    <>
      <NavBar />

      <div className="container mx-auto px-10 py-10 pt-[9em]">
        <h1 className="text-4xl font-bold mb-6">Events</h1>

        {/* SEARCH */}
        <EventSearch
          eventName={eventName}
          setEventName={setEventName}
          location={location}
          setLocation={setLocation}
          onlineOnly={onlineOnly}
          setOnlineOnly={setOnlineOnly}
          setFilter={setFilter}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        {/* DATE FILTER BUTTONS */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setFilter("past")}
            className={getButtonClass("past")}
          >
            Past
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={getButtonClass("upcoming")}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter("next7")}
            className={getButtonClass("next7")}
          >
            Next 7 days
          </button>
          <button
            onClick={() => setFilter("next30")}
            className={getButtonClass("next30")}
          >
            Next 30 days
          </button>
        </div>

        {/* EVENTS GRID */}
        <div
          className={`grid gap-6 ${
            filteredEvents.length === 1
              ? "grid-cols-1"
              : filteredEvents.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : filteredEvents.length === 3
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          {" "}
          {filteredEvents.map((event, index) => (
            <Link
              key={event.id}
              to={`/event-details/${index}`}
              className="border rounded-lg p-4 hover:shadow-md"
            >
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg mb-3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-sm border px-2 py-1 rounded-full">
                {event.tag}
              </span>

              <h2 className="font-bold text-xl mt-3">{event.title}</h2>

              <p className="text-sm mt-2 text-gray-600">
                {event.date} • {event.time}
              </p>

              <p className="text-sm text-gray-600">{event.location}</p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;
