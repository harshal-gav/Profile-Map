import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import AdminPanel from "./pages/AdminPanel";
import profilesData from "./profiles"; // Importing profiles
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Profile Management</h1>
      <div className="button-container">
        <Link to="/profiles">
          <button className="home-button">View Profiles</button>
        </Link>
        <Link to="/admin">
          <button className="home-button">Admin Panel</button>
        </Link>
      </div>
    </div>
  );
};

const Root = () => {
  const [profiles, setProfiles] = useState(profilesData);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<App profiles={profiles} />} />
        <Route path="/admin" element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
