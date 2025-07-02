import React, { useState, useEffect } from "react";

export default function eventcard({ event }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [attending, setAttending] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const attendingEvents = JSON.parse(localStorage.getItem("attending")) || [];
    setBookmarked(bookmarks.includes(event.id));
    setAttending(attendingEvents.includes(event.id));
  }, [event.id]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const updated = bookmarked
      ? bookmarks.filter((id) => id !== event.id)
      : [...bookmarks, event.id];
    localStorage.setItem("bookmarks", JSON.stringify(updated));
    setBookmarked(!bookmarked);
  };

  const toggleAttend = () => {
    const attendingEvents = JSON.parse(localStorage.getItem("attending")) || [];
    const updated = attending
      ? attendingEvents.filter((id) => id !== event.id)
      : [...attendingEvents, event.id];
    localStorage.setItem("attending", JSON.stringify(updated));
    setAttending(!attending);
  };

  return (
    <div style={{ border: "1px solid gray", borderRadius: "8px", padding: "10px"}}>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <div style={{ marginTop: "10px" }}>
        <button onClick={toggleBookmark} style={{ marginRight: "10px" }}>
          {bookmarked ? "Remove Bookmark" : "Bookmark"}
        </button>
        <button onClick={toggleAttend}>
          {attending ? "Cancel Attendance" : "Attend"}
        </button>
      </div>
    </div>
  );
}
