import { useMemo, useState } from "react";

type EventSearchProps = {
  eventName: string;
  setEventName: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  onlineOnly: boolean;
  setOnlineOnly: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;

  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

const usCities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "Seattle",
  "Boston",
];

const categories = [
  "Ages 7-13",
  "Ages 13-18",
  "Ages 18+",
  "HTML/CSS Demo",
  "UX/UI Demo",
  "Tech Demo",
  "Community Engagement",
  "Leadership Experience",
  "Leadership Workshop",
  "Summer Camp",
  "Technical Workshop",
  "In Person",
];

const EventSearch = ({
  setEventName,
  location,
  setLocation,
  onlineOnly,
  setOnlineOnly,
  setFilter,
  selectedFilters,
  setSelectedFilters,
}: EventSearchProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredOptions = useMemo(() => {
    return categories.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const handleSelect = (value: string) => {
    if (categories.includes(value) && !selectedFilters.includes(value)) {
      setSelectedFilters([...selectedFilters, value]);
    }

    setQuery("");
    setOpen(false);
  };

  const handleClear = () => {
    setEventName("");
    setLocation("");
    setOnlineOnly(false);
    setFilter("all");
    setSelectedFilters([]);
    setQuery("");
  };

  return (
    <form className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-end gap-4">
        <div className="relative w-full lg:flex-1 min-w-[240px]">
          <label className="block mb-2 font-semibold text-sm text-gray-700">
            Search Events
          </label>

          <input
            type="text"
            placeholder="Type a keywork or Select one or more options"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setEventName(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6036E1] focus:ring-2 focus:ring-[#6036E1]/20 transition"
          />

          {/* DROPDOWN */}
          {open && filteredOptions.length > 0 && (
            <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
              {filteredOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 transition flex items-center justify-between"
                >
                  <span>{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        {/* LOCATION */}
        <div className="w-full lg:w-[200px]">
          <label className="block mb-2 font-semibold text-sm text-gray-700">
            Location
          </label>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6036E1] focus:ring-2 focus:ring-[#6036E1]/20"
          >
            <option value="">All Locations</option>
            {usCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between lg:justify-start gap-4 w-full lg:w-auto pb-1">
          {/* ONLINE TOGGLE */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={onlineOnly}
              onChange={(e) => setOnlineOnly(e.target.checked)}
              className="accent-[#6036E1] w-4 h-4"
            />
            Online only
          </label>

          {/* CLEAR */}
          <button
            type="button"
            onClick={handleClear}
            className="bg-[#6036E1] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default EventSearch;
