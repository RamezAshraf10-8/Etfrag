import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileSelector.css";
import { FaTrash } from "react-icons/fa"; // trash icon

const ProfileSelector = ({ onSelect }) => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("userProfiles");
    if (saved) setProfiles(JSON.parse(saved));
  }, []);

  const selectProfile = (profile) => {
    localStorage.setItem("activeProfile", JSON.stringify(profile));
    if (onSelect) onSelect(profile);
    navigate("/");
  };

  const deleteProfile = (index) => {
    const updated = profiles.filter((_, i) => i !== index);
    setProfiles(updated);
    localStorage.setItem("userProfiles", JSON.stringify(updated));
  };

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // fallback if no history
    }
  };

  return (
    <div className="profile-selector">

      {/* BACK BUTTON */}
      <button className="back-btn" onClick={goBack}>← Back</button>

      {profiles.map((p, i) => (
        <div key={i} className="profile-card">
          <div className="avatar-wrapper">
            <img
              src={p.avatar ? require(`../../assets/avatars/${p.avatar}`) : ""}
              alt=""
              className="profile-avatar"
              onClick={() => selectProfile(p)}
            />

            {/* Trash Icon */}
            <FaTrash
              className="trash-icon"
              onClick={() => deleteProfile(i)}
            />
          </div>

          <p onClick={() => selectProfile(p)}>{p.username}</p>
        </div>
      ))}

      {profiles.length < 5 && (
        <div className="profile-card add" onClick={() => navigate("/create-profile")}>
          <span>+</span>
          <p>Add Profile</p>
        </div>
      )}
    </div>
  );
};

export default ProfileSelector;
