# 🎬 Etfrag — Movie Browsing Website

> **Etfrag** (إتفرج) means *"watch"* in Egyptian Arabic.

Etfrag is a full-stack movie browsing web application built with **React** and **Firebase**. Users can sign up, browse a wide collection of movie trailers, and manage personalized watchlists across multiple profiles — inspired by the structure of modern streaming platforms.

> ⚠️ Due to licensing restrictions, only **trailers** are available — not full movies.

---

## 🌐 Live Demo

> Add your deployed link here (e.g. Vercel / Netlify)

---

## 📸 Screenshots

| Homepage | Browse by Language | Children Mode |
|---|---|---|
| ![Home](screenshots/home.png) | ![Languages](screenshots/languages.png) | ![Kids](screenshots/kids.png) |

> Add your own screenshots to a `/screenshots` folder in the repo.

---

## ✨ Features

- 🔐 **Authentication** — Sign up, sign in, remember me, and password reset via Firebase Auth, with full input validation and animated error/success toast notifications
- 👤 **Multi-profile support** — Each account supports up to 5 profiles, each with a unique avatar and its own independent watchlist
- 🎞️ **Featured content slider** — Animated hero banner showcasing newly released titles with fade transitions
- 🗂️ **Category rows** — Blockbuster Movies, Exclusive Originals, Upcoming, and Top Picks — all fetched live from the TMDB API
- 🎭 **Genre filter** — Dropdown to filter all movies by genre in real time
- 🌍 **Browse by Language** — Filter movies by language (English, Japanese, Korean, Hindi, etc.), combinable with the genre filter
- 👶 **Children Mode** — One-click toggle that hides mature content and shows only family-friendly titles
- 🔍 **Search with auto-suggestions** — Real-time movie suggestions appear as you type
- 🎬 **Movie details page** — Displays poster, overview, rating, release date, and full cast
- ▶️ **Player page** — Plays the official YouTube trailer fetched via TMDB
- 🔔 **Notifications panel** — In-app dropdown notification system
- 📩 **Contact Us** — Support form integrated with EmailJS — no backend server required
- ❓ **Help Centre** — Expandable FAQ sections for common issues
- 📋 **Terms of Use** — Expandable legal policy sections
- 📱 **Fully responsive** — Adapts cleanly across desktop, tablet, and mobile screens

---

## 🛠️ Tech Stack

### Frontend
| Tool | Purpose |
|------|---------|
| React (Vite) | UI framework |
| React Router DOM | Page routing |
| CSS (per-component) | Styling |
| react-toastify | Toast notifications |

### Backend & Services
| Service | Purpose |
|---------|---------|
| Firebase Auth | User authentication & session management |
| Firebase Firestore | User data & profile storage |
| TMDB API | Real-time movie data, trailers, cast info |
| EmailJS | Contact form email delivery (client-side only) |

### Design & Prototyping
| Tool | Purpose |
|------|---------|
| Figma | High-fidelity prototypes & component library |
| Canva | Logo and favicon design |

---

## 📁 Project Structure

```
src/
├── assets/                  # Images, icons, avatars
├── components/
│   ├── Navbar/              # Sticky navbar with search, notifications, profile menu
│   ├── Footer/              # Footer with Help Centre, Terms, Contact Us links
│   ├── TitleCards/          # Movie card component used across all pages
│   └── ProfileSelector/     # Profile switching UI
├── pages/
│   ├── Home/                # Homepage with hero slider and category rows
│   ├── Login/               # Sign in & Sign up page
│   ├── Profiles/            # Profile selection page
│   ├── CreateProfile/       # Create new profile with avatar picker
│   ├── Player/              # Trailer player page
│   ├── MovieDetails/        # Movie info + cast page
│   ├── MyList/              # User's personal saved movies list
│   ├── Languages/           # Browse movies by language
│   ├── HelpCentre/          # FAQ and support topics
│   ├── Terms/               # Terms of use
│   ├── ContactUs/           # Contact support form
│   └── Reset/               # Password reset page
├── App.jsx                  # Main app with routing logic
├── firebase.js              # Firebase config & auth functions
└── main.jsx                 # App entry point
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/etfrag.git
cd etfrag
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id
```

> 🔑 Get your TMDB API key from [themoviedb.org](https://www.themoviedb.org/)
> 🔥 Set up Firebase at [firebase.google.com](https://firebase.google.com/)
> 📧 Set up EmailJS at [emailjs.com](https://www.emailjs.com/)

### 4. Run the development server

```bash
npm run dev
```

---

## 📦 Dependencies

```json
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "firebase": "^10.x",
  "emailjs-com": "^3.x",
  "react-toastify": "^9.x",
  "react-icons": "^4.x"
}
```

---

## 🎨 Design Choices

- **Font:** [Sora](https://fonts.google.com/specimen/Sora) — clean, modern sans-serif optimized for digital interfaces
- **Color Palette:**
  - `#141414` — Deep black background for a cinematic feel
  - `#ED9618` — Warm amber/orange for buttons, highlights, and titles
- **Design tool:** Figma was used to build a full high-fidelity prototype before development, including all user flows, component states, and responsive layouts

---

## 🔒 Authentication & Validation

All authentication is handled by **Firebase Authentication**. The following error states are handled with user-friendly messages:

| Error | Message Shown |
|-------|--------------|
| Empty email field | *"Email field cannot be empty."* |
| Invalid email format | *"Please enter a valid email address."* |
| Password too short | *"Password must be at least 6 characters."* |
| Email already registered | *"This email is already registered."* |
| Wrong credentials | *"Incorrect email or password."* |
| Too many attempts | *"Too many attempts. Please try again later."* |

---

## 📬 Contact & Support

The **Contact Us** page uses **EmailJS** to send messages directly to the support inbox without any backend server. The form captures the user's name, email, and message, then delivers it instantly using a pre-configured EmailJS template.

---

## 📄 License

This project is for educational purposes.

---

> Built with ❤️ using React, Firebase, and the TMDB API.
