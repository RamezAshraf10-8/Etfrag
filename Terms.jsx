.languages-page {
  min-height: 100vh;
  background-color: #0b0b0b;
  color: white;
}

.languages-container {
  padding: 120px 6% 60px;
}

.languages-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #fff;
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
}

.language-card {
  background: #1a1a1a;
  padding: 18px;
  text-align: center;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid #333;
}

.language-card:hover {
  background: #ED9618;
  color: #000;
  transform: translateY(-3px);
}
.active-language {
  background: #ED9618;
  color: #000;
  border: 2px solid #fff;
  font-weight: 700;
}