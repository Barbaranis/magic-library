import React from 'react';
import '../styles/acceuil.css'; // Ton CSS global avec le style du footer


const Footer = () => {
  return (
    <footer>
      <div className="reseaux">
        <h4>Suivez-nous</h4>
        <ul className="reseaux-list">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">TikTok</a></li>
        </ul>
      </div>


      <div className="newsletter">
        <h4>Newsletter</h4>
        <input type="email" placeholder="Votre e-mail" />
        <button>S'inscrire</button>
      </div>


      <div className="tags">
        <h4>Catégories</h4>
        <ul className="tags-list">
          <li><a href="#">Lecture</a></li>
          <li><a href="#">BD</a></li>
          <li><a href="#">Manga</a></li>
          <li><a href="#">Jeunesse</a></li>
          <li><a href="#">Vie pratique</a></li>
          <li><a href="#">Bien-être</a></li>
          <li><a href="#">Nature</a></li>
          <li><a href="#">Voyage</a></li>
          <li><a href="#">Science</a></li>
          <li><a href="#">Scolaire</a></li>
          <li><a href="#">Apprentissage</a></li>
          <li><a href="#">Art</a></li>
          <li><a href="#">Sciences humaines</a></li>
          <li><a href="#">Économie</a></li>
          <li><a href="#">Gestion</a></li>
          <li><a href="#">Documentation</a></li>
        </ul>
      </div>


      <div className="faq">
        <h4>FAQ</h4>
        <ul>
          <li><a href="#">Livraison</a></li>
          <li><a href="#">Retours</a></li>
          <li><a href="#">Conditions générales</a></li>
        </ul>
      </div>
    </footer>
  );
};


export default Footer;

