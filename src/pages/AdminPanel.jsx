import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = React.useState({ name: "", description: "", image: "", location: { lat: "", lng: "" } });

  const addProfile = () => {
    setProfiles([...profiles, { id: Date.now(), ...newProfile, location: { lat: parseFloat(newProfile.location.lat), lng: parseFloat(newProfile.location.lng) } }]);
    setNewProfile({ name: "", description: "", image: "", location: { lat: "", lng: "" } });
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  const handleEdit = (id) => {
    const name = prompt("Edit Name", profiles.find(p => p.id === id)?.name);
    if (name) {
      setProfiles(profiles.map(profile => (profile.id === id ? { ...profile, name } : profile)));
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div className="form-group">
        <input type="text" placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} />
        <input type="text" placeholder="Description" value={newProfile.description} onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })} />
        <input type="text" placeholder="Image URL" value={newProfile.image} onChange={(e) => setNewProfile({ ...newProfile, image: e.target.value })} />
        <input type="text" placeholder="Latitude" value={newProfile.location.lat} onChange={(e) => setNewProfile({ ...newProfile, location: { ...newProfile.location, lat: e.target.value } })} />
        <input type="text" placeholder="Longitude" value={newProfile.location.lng} onChange={(e) => setNewProfile({ ...newProfile, location: { ...newProfile.location, lng: e.target.value } })} />
        <button onClick={addProfile}>Add Profile</button>
      </div>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <span>{profile.name} - {profile.description}</span>
            <button onClick={() => deleteProfile(profile.id)}>Delete</button>
            <button onClick={() => handleEdit(profile.id)}>Edit</button>
          </li>
        ))}
      </ul>
      <Link to="/profiles">
        <button className="switch-button">Go to Profiles</button>
      </Link>
    </div>
  );
};

export default AdminPanel;