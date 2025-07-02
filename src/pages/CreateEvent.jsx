import React, { useState } from "react";

export default function CreateEvent() {
  const [formdata, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    type: "online",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("customEvents")) || [];
    const newEvent = { id: Date.now(), ...formdata };
    localStorage.setItem("customEvents", JSON.stringify([...existing, newEvent]));

    setSuccess(true);
    setFormData({ title: "", date: "", location: "", description: "", type: "online" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formdata.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formdata.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formdata.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formdata.description}
          onChange={handleChange}
          required
        />
        <select name="type" value={formdata.type} onChange={handleChange}>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <button type="submit">Create Event</button>
      </form>

      {success && <p style={{ color: "green", marginTop: "10px" }}>✅ Event created!</p>}
    </div>
  );
}
