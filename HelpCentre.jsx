import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TitleCards.css';

const API_KEY = "661840277a0faebc10ce706ad40ddd47";

const TitleCards = ({ title, category, movie, single = false, myList = [], setMyList }) => {
const [apiData, setApiData] = useState([]);
const navigate = useNavigate();

// Get active profile from localStorage
const activeProfile = JSON.parse(localStorage.getItem("activeProfile")) || { username: "Guest" };
const storageKey = `myList_${activeProfile.username}`;

// Fetch category data
useEffect(() => {
if (!single && category) {
const fetchPages = async () => {
try {
const res1 = await fetch(
`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`
);
const data1 = await res1.json();


      const res2 = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=2`
      );
      const data2 = await res2.json();

      const combined = [...(data1.results || []), ...(data2.results || [])];
      setApiData(combined);
    } catch (err) {
      console.error(err);
    }
  };

  fetchPages();
}


}, [category, single]);

const dataToDisplay = single
? [{ ...movie, title: movie?.title || movie?.original_title || "Untitled" }]
: apiData;

// Load My List for this profile from localStorage
const [addedIds, setAddedIds] = useState(() => {
const saved = localStorage.getItem(storageKey);
return saved ? JSON.parse(saved).map(m => m.id) : [];
});

useEffect(() => {
setAddedIds(myList.map(m => m.id));
}, [myList]);

const toggleMyList = (card) => {
if (!setMyList) return;


const exists = myList.some(m => m.id === card.id);

let updatedList;
if (exists) {
  updatedList = myList.filter(m => m.id !== card.id);
} else {
  updatedList = [...myList, card];
}

setMyList(updatedList);
localStorage.setItem(storageKey, JSON.stringify(updatedList));
setAddedIds(updatedList.map(m => m.id));

};

return ( <div className="title-cards">
{!single && <h2>{title || "Popular on Etfrag"}</h2>}

  <div className={`card-list ${single ? "single" : ""}`}>
    {dataToDisplay.map(card =>
      card.backdrop_path && (
        <div key={card.id} className="card-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
            alt={card.title}
            className="card-image"
            onClick={() => navigate(`/player/${card.id}`)}
            style={{ cursor: "pointer" }}
          />

          <button
            className="more-info-btn"
            onClick={() => navigate(`/movie/${card.id}`, { state: { movie: card } })}
          >
            More Info
          </button>

          <button
            className="mylist-btn"
            onClick={() => toggleMyList(card)}
            title={addedIds.includes(card.id) ? "Remove from My List" : "Add to My List"}
          >
            {addedIds.includes(card.id) ? "−" : "+"}
          </button>

          <p>{card.title}</p>
        </div>
      )
    )}
  </div>
</div>

);
};

export default TitleCards;
