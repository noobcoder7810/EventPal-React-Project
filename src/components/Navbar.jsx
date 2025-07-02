import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-4">
      <div className="container mx-auto px-4 py-3 flex space-x-4">
        <NavLink to="/" className="text-lg font-semibold">Discover</NavLink>
        <NavLink to="/create" className="text-lg font-semibold">Create Event</NavLink>
        <NavLink to="/calendar" className="text-lg font-semibold">Calendar</NavLink>
      </div>
    </nav>
  );
}
