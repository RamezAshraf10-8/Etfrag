.help-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d4dbe6;
  text-align: center;
  background: linear-gradient(180deg, #141414 0%, #1A1A1A 100%);
  padding: 40px 20px;
}

.help-container h1 {
  font-size: 3rem;
  color: #ED9618;
  margin-bottom: 20px;
}

.help-container p {
  font-size: 1.2rem;
  max-width: 800px;
  margin-bottom: 30px;
  line-height: 1.5;
}

.help-sections {
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  align-items: flex-start;
}

.help-column {
  flex: 1;
  min-width: 280px;
}

.help-topics {
  list-style: none;
  padding: 0;
}

.help-topics li {
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
}

.topic-title {
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background-color: #1a1a1a;
  border-radius: 5px;
  transition: background 0.3s;
}

.topic-title:hover {
  background-color: #222;
}

.topic-title.active {
  color: #ED9618;
}

.topic-title span {
  font-size: 1.5rem;
}

.topic-content {
  font-size: 1rem;
  padding: 10px 15px;
  text-align: left;
  line-height: 1.5;
  background-color: #111;
  border-radius: 5px;
  margin-top: 5px;
  color: #d4dbe6;
}

.back-btn {
  margin-top: 30px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ED9618;
  color: #1a1f29;
  transition: 0.3s;
}

.back-btn:hover {
  background-color: #ffae45;
}
.section-title {
  font-size: 1.9rem; 
  margin-bottom: 15px;
  margin-top: 25px;
  color: #ED9618;
}

.help-container h1 {
  font-size: 3rem;
  color: #ED9618;
  margin-bottom: 20px;
}

.help-container p {
  font-size: 1.2rem;
  max-width: 800px;
  margin-bottom: 30px;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .help-sections {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  .help-container h1 {
    font-size: 2.5rem;
  }
  .help-container p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .help-container h1 {
    font-size: 2rem;
  }
  .topic-title {
    font-size: 1rem;
  }
  .topic-content {
    font-size: 0.95rem;
  }
}
