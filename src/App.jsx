import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./index.css";

const containerStyle = {
  width: "100%",
  height: "200px",
};

const App = ({ profiles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const mapCenter = profiles.length > 0 ? profiles[0].location : { lat: 40.7128, lng: -74.006 };

  return (
    <div className="profile-container">
      <h2>Profiles</h2>
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul>
        {profiles
          .filter((profile) => profile.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((profile) => (
            <li key={profile.id}>
              <img src={profile.image} alt={profile.name} className="profile-image" />
              <span>
                {profile.name} - {profile.description}
              </span>
              <LoadScript googleMapsApiKey="AIzaSyD1EET_rdEGUJ1sp9gWCbZrehaKbuoAHiI">
                <GoogleMap mapContainerStyle={containerStyle} center={profile.location} zoom={10}>
                  <Marker position={profile.location} />
                </GoogleMap>
              </LoadScript>
            </li>
          ))}
      </ul>
      <Link to="/admin">
        <button className="switch-button">Go to Admin Panel</button>
      </Link>
    </div>
  );
};
export default App;