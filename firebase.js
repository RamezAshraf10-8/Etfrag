.navbar {
  height: 60px;
  padding: 0 6%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 220ms ease, box-shadow 220ms ease, backdrop-filter 220ms ease;
  background-color: transparent;
  box-sizing: border-box;
}

.navbar.nav-dark {
  background-color: rgba(20,20,20,0.95);
  box-shadow: 0 2px 10px rgba(0,0,0,0.35);
  backdrop-filter: blur(6px);
}

.navbar.at-top {
  background-color: transparent;
  box-shadow: none;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 18px;
}

.navbar-logo {
  max-height: 100px;
  width: auto;      
  display: block;
  filter: drop-shadow(0 0 4px rgba(237, 150, 24, 0.5))
          drop-shadow(0 0 8px rgba(237, 150, 24, 0.3));
  transition: filter 0.3s ease;
}

.navbar-logo:hover {
  filter: drop-shadow(0 0 6px rgba(237, 150, 24, 0.6))
          drop-shadow(0 0 12px rgba(237, 150, 24, 0.4));
}

.nav-links {
  display: flex;
  gap: 18px;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  color: #e5e5e5;
  font-size: 14px;
}

.nav-links li {
  cursor: pointer;
  user-select: none;
  color: #e5e5e5;
  transition: color 0.25s ease; 
}

.navbar .nav-links li:hover {
  color: #ED9618 !important;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.icon-btn {
  background: transparent;
  border: none;
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icons {
  width: 20px;
  height: 20px;
  display: block;
}

.kids-label {
  color: #e5e5e5;
  font-size: 14px;
  margin: 0 6px;
  cursor: pointer;
  transition: color 0.25s ease;
}

.kids-label:hover {
  color: #ED9618;
}

.navbar .kids-label.kids-active {
  color: #ED9618 !important;
  font-weight: 700;
}

.navbar-profile {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.profile-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.caret {
  width: 12px;
  height: 12px;
}

.dropdown {
  position: absolute;
  top: 42px;
  right: 0;
  background: rgba(15, 15, 15, 0.97);
  padding: 10px 0;
  border-radius: 10px;
  min-width: 160px;
  display: none;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.45);
  animation: fadeIn 0.25s ease forwards;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.08);
}

.dropdown.show {
  display: block;
}

/* Dropdown items */
.dropdown p {
  margin: 0;
  padding: 10px 18px;
  font-size: 14px;
  color: #e5e5e5;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, padding-left 0.25s ease;
  white-space: nowrap;
}

/* Hover */
.dropdown p:hover {
  background: rgba(237, 150, 24, 0.12);
  color: #ED9618;
  padding-left: 22px;
}

/* Divider */
.dropdown .divider {
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.08);
  margin: 6px 0;
}

/* Fade Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.search-container {
  position: relative;
  display: inline-block;
}

.search-input {
  padding: 8px 12px;
  font-size: 16px;
  outline: none;
  border: 1px solid #333;
  background-color: #1a1a1a;
  color: #fff;
  width: 200px;
  transition: all 0.25s ease;
  border-radius: 12px; 
}

.search-suggestions {
  position: absolute;
  top: 36px;
  left: 0;
  background: #1a1a1a;
  border: 1px solid #333;
  margin-top: 4px;
  border-radius: 12px; 
  overflow: hidden;
  width: 240px;
  max-height: 250px;
  z-index: 1001;
  box-shadow: 0 2px 10px rgba(0,0,0,0.7);
}

.suggestion-item {
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease;
}

.suggestion-item:hover {
  background: #222;
}

/* Notification badge */
.notification-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: #ED9618;
  color: #1a1f29;
  border-radius: 50%;
  font-size: 10px;
  padding: 2px 5px;
  font-weight: bold;
  z-index: 10;
}

.notifications-dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background: rgba(10,10,10,0.95);
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  min-width: 220px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
}

.notifications-dropdown p {
  margin: 5px 0;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s;
}

.notifications-dropdown p:hover {
  background-color: rgba(237, 150, 24, 0.2);
  border-radius: 4px;
}

.unread-notification {
  background-color: #1a1a1a;
  color: #fff;
  padding: 6px 10px;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 4px;
}

.unread-notification:hover {
  background-color: #333;
}

.read-notification {
  background-color: #0b0b0b;
  color: #888;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 4px;
}

/* Hide nav links on mobile */
@media (max-width: 900px) {
  .nav-links {
    display: none; 
  }

  .navbar {
    padding: 14px 4%;
  }

  .navbar-left {
    gap: 12px;
  }

  .navbar-logo {
    height: 28px;
  }
}
