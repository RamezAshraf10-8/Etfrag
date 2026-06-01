import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TitleCards from "../../components/TitileCards/TitleCards";

import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import left_arrow from '../../assets/left_arrow.svg';
import right_arrow from '../../assets/right_arrow.svg';

import "./Home.css";

const categories = ["top_rated", "popular", "upcoming", "now_playing"];
const API_KEY = "661840277a0faebc10ce706ad40ddd47";

const heroItems = [
{ image: hero1, desc: "A darkly enchanting tale of magic and betrayal as unlikely heroes rise to fight against an ancient evil. Secrets, curses, and unexpected alliances shape their destiny.", movieId: 967941 },
{ image: hero2, desc: "Judy Hopps and Nick Wilde return to tackle a new mysterious case in the bustling city of Zootopia. Adventure and humor await as they uncover secrets that challenge the city's harmony.", movieId: 1084242 },
{ image: hero3, desc: "The Culling Games begin, forcing sorcerers into deadly battles for survival and supremacy. Strategy, power, and courage determine who will emerge victorious in this high-stakes challenge.", movieId: 1539104 }
];

const Home = ({ searchQuery, setSearchQuery }) => {
const location = useLocation();
const navigate = useNavigate();

const kidsMode = new URLSearchParams(location.search).get("kids") === "true";
const selectedLang = new URLSearchParams(location.search).get("lang") || "";
const kidsGenres = [16, 10751]; // Animation & Family

const [allMovies, setAllMovies] = useState([]);
const [genres, setGenres] = useState([]);
const [selectedGenre, setSelectedGenre] = useState(null);
const [currentHero, setCurrentHero] = useState(0);

// Get myList for current profile
const currentProfile = JSON.parse(localStorage.getItem('activeProfile')) || { username: "Guest" };
const storageKey = `myList_${currentProfile.username}`;
const [myList, setMyList] = useState(() => {
const saved = localStorage.getItem(storageKey);
return saved ? JSON.parse(saved) : [];
});

const isFiltered = searchQuery || selectedGenre || kidsMode || selectedLang;

const resetFilters = () => {
setSearchQuery("");
setSelectedGenre(null);
navigate("/");
};

useEffect(() => {
localStorage.setItem(storageKey, JSON.stringify(myList));
}, [myList, storageKey]);

useEffect(() => {
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
.then(res => res.json())
.then(data => setGenres(data.genres))
.catch(err => console.error(err));
}, []);

useEffect(() => {
const fetchAll = async () => {
try {
let results = [];
for (const category of categories) {
for (let page = 1; page <= 3; page++) {
const res = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`);
const data = await res.json();
if (data.results) results.push(...data.results);
}
}
const uniqueMovies = Array.from(new Map(results.map(m => [m.id, m])).values());
setAllMovies(uniqueMovies);
} catch (err) {
console.error(err);
}
};
fetchAll();
}, []);

const prevSlide = () => setCurrentHero((currentHero - 1 + heroItems.length) % heroItems.length);
const nextSlide = () => setCurrentHero((currentHero + 1) % heroItems.length);

const filteredByGenre = selectedGenre
? allMovies.filter(movie => movie.genre_ids && movie.genre_ids.includes(selectedGenre))
: allMovies;

const filteredByLanguage = selectedLang
? filteredByGenre.filter(movie => movie.original_language === selectedLang)
: filteredByGenre;

const filteredMovies = filteredByLanguage
.filter(movie => (movie.title || movie.name || "").toLowerCase().includes((searchQuery || "").toLowerCase()))
.filter(movie => !kidsMode || (movie.genre_ids && movie.genre_ids.some(g => kidsGenres.includes(g))));

return ( <div className="home"> <Navbar
     searchQuery={searchQuery}
     setSearchQuery={setSearchQuery}
     allMovies={allMovies}
     resetFilters={resetFilters}
   />


  <div className="hero">
    {heroItems.map((hero, index) => (
      <div key={index} className={`hero-slide ${index === currentHero ? 'active' : ''}`}>
        <img src={hero.image} alt={`hero-${index}`} className="banner-img" />
        <div className="hero-badge">New Release!</div>
        <div className="hero-overlay">
          <p className="hero-desc">{hero.desc}</p>
          <div className="hero-btns">
            <button className="btn" onClick={() => navigate(`/player/${hero.movieId}`)}>
              <img src={play_icon} alt="" /> Play
            </button>
            <button className="btn dark-btn" onClick={() => navigate(`/movie/${hero.movieId}`)}>
              <img src={info_icon} alt="" /> More Info
            </button>
          </div>
        </div>
      </div>
    ))}

    <button className="hero-arrow left" onClick={prevSlide}><img src={left_arrow} alt="prev" /></button>
    <button className="hero-arrow right" onClick={nextSlide}><img src={right_arrow} alt="next" /></button>

    <div className="hero-dots">
      {heroItems.map((_, idx) => (
        <span key={idx} className={`dot ${idx === currentHero ? 'active' : ''}`} onClick={() => setCurrentHero(idx)} />
      ))}
    </div>
  </div>

  <div className="genre-filter">
    <select value={selectedGenre || ""} onChange={e => setSelectedGenre(e.target.value ? Number(e.target.value) : null)}>
      <option value="">All Genres</option>
      {genres.map(g => (
        <option key={g.id} value={g.id}>{g.name}</option>
      ))}
    </select>
  </div>

  <div className="search-results">
    {isFiltered ? (
      filteredMovies.length > 0 ? (
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <TitleCards
              key={movie.id}
              movie={movie}
              single
              myList={myList}
              setMyList={setMyList} 
            />
          ))}
        </div>
      ) : (
        <p className="no-results">No movies found</p>
      )
    ) : (
      <>
        <TitleCards title="Blockbuster Movies" category="top_rated" myList={myList} setMyList={setMyList} />
        <TitleCards title="Exclusive Originals" category="popular" myList={myList} setMyList={setMyList} />
        <TitleCards title="Upcoming" category="upcoming" myList={myList} setMyList={setMyList} />
        <TitleCards title="Top Picks for You" category="now_playing" myList={myList} setMyList={setMyList} />
      </>
    )}
  </div>

  <Footer />
</div>


);
};

export default Home;
