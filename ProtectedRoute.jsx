.footer{
  padding: 40px 4%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  opacity: .9;
}

.footer-icons{
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 40px 0;
}

.footer-icons img{
  width: 30px;
  cursor: pointer;
  transition: opacity .3s, transform .3s;
}

.footer-icons img:hover{
  opacity: 1;
  transform: scale(1.08);
}

.footer ul{
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 15px;
  margin-bottom: 30px;
  list-style: none;
  opacity: .8;
}

.footer ul li:hover{
  color: #ED9618;
  cursor: pointer;
}

.copyright-text{
  color: gray;
  font-size: 14px;
}

@media (max-width:800px){
  .footer-icons img{
    width: 25px;
  }
  .footer-icons ul{
    grid-template-columns: auto auto;
    gap: 8px;
    font-size: 14px;
  }
}

@media (max-width: 800px) {
  .footer ul {
    grid-template-columns: auto auto;
    font-size: 14px;
    gap: 10px;
  }
}

@media (max-width: 500px) {
  .footer ul {
    grid-template-columns: auto;
    text-align: center;
    gap: 8px;
  }

  .footer-icons img {
    width: 22px;
  }

  .copyright-text {
    font-size: 12px;
  }
}
.footer {
  padding: 30px;
  text-align: center;
  color: #999;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 25px;
  font-size: 15px;
}

.footer-links li {
  cursor: pointer;
  transition: 0.2s ease;
}

.footer-links li:hover {
  color: #fff;
}
