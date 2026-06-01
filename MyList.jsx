import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateProfile.css";

import avatar1 from "../../assets/avatars/avatar1.jpg";
import avatar2 from "../../assets/avatars/avatar2.jpg";
import avatar3 from "../../assets/avatars/avatar3.jpg";
import avatar4 from "../../assets/avatars/avatar4.jpg";
import avatar6 from "../../assets/avatars/avatar6.jpg";
import avatar7 from "../../assets/avatars/avatar7.jpg";
import avatar8 from "../../assets/avatars/avatar8.jpg";
import avatar9 from "../../assets/avatars/avatar9.jpg";
import avatar10 from "../../assets/avatars/avatar10.jpg";
import avatar11 from "../../assets/avatars/avatar11.jpg";
import avatar12 from "../../assets/avatars/avatar12.jpg";

const avatars = [
{ file: "avatar1.jpg", img: avatar1 },
{ file: "avatar2.jpg", img: avatar2 },
{ file: "avatar3.jpg", img: avatar3 },
{ file: "avatar4.jpg", img: avatar4 },
{ file: "avatar6.jpg", img: avatar6 },
{ file: "avatar7.jpg", img: avatar7 },
{ file: "avatar8.jpg", img: avatar8 },
{ file: "avatar9.jpg", img: avatar9 },
{ file: "avatar10.jpg", img: avatar10 },
{ file: "avatar11.jpg", img: avatar11 },
{ file: "avatar12.jpg", img: avatar12 },
];

const CreateProfile = () => {
const navigate = useNavigate();
const [username, setUsername] = useState("");
const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
const [profiles, setProfiles] = useState([]);

useEffect(() => {
const saved = localStorage.getItem("userProfiles");
if (saved) setProfiles(JSON.parse(saved));
}, []);

const createProfile = () => {
if (!username.trim()) return alert("Enter a username");


const newProfile = { username, avatar: selectedAvatar.file, kidsMode: false };
const updatedProfiles = [...profiles, newProfile];
localStorage.setItem("userProfiles", JSON.stringify(updatedProfiles));
localStorage.setItem("activeProfile", JSON.stringify(newProfile));
navigate("/");


};

return ( <div className="create-profile-page"> <h1>Create Profile</h1>

  <div className="form">
    <input
      type="text"
      placeholder="Profile Name"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <div className="avatar-grid">
      {avatars.map((av, idx) => (
        <div
          key={idx}
          className={`avatar-card ${selectedAvatar.file === av.file ? "selected" : ""}`}
          onClick={() => setSelectedAvatar(av)}
        >
          <img src={av.img} alt={`Avatar ${idx + 1}`} />
        </div>
      ))}
    </div>
    <button onClick={createProfile}>Save Profile</button>

    {/* BACK BUTTON BELOW SAVE */}
    <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
  </div>
</div>

);
};

export default CreateProfile;
