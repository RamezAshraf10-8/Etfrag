.contact-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #141414 0%, #1A1A1A 100%);
  color: #d4dbe6;
  text-align: center;
  padding: 40px 20px;
}

.contact-container h1 {
  font-size: 3rem;
  color: #ED9618;
  margin-bottom: 15px;
}

.contact-container p {
  font-size: 1.2rem;
  max-width: 800px;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;
}

.contact-form input, 
.contact-form textarea {
  padding: 12px 15px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  background-color: #1a1a1a;
  color: #d4dbe6;
  resize: none;
}

.contact-form input:focus, 
.contact-form textarea:focus {
  outline: 2px solid #ED9618;
}

.contact-form textarea {
  min-height: 120px;
}

.contact-form button {
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

.contact-form button:hover {
  background-color: #ffae45;
}

.status-message {
  margin-top: 10px;
  font-size: 1rem;
  color: #ED9618;
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
