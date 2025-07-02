import React, { useEffect, useState } from "react";
import EventCard from "../components/eventcard";
import defaultEvents from "../data/event";

export default function Home() {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const customEvents = JSON.parse(localStorage.getItem("customEvents")) || [];
    const combined = [...customEvents, ...defaultEvents];
    setAllEvents(combined);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>All Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allEvents.length === 0 ? (
          <p>No events found.</p>
        ) : (
          allEvents.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
}
