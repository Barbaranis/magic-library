import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Carrousel from '../components/carrousel';
import NouveautesBanner from '../components/NouveautesBanner';
import AvisSection from '../components/AvisSection';
import livresEnchantes from '../data/livresEnchantes';
import '../styles/acceuil.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

const Acceuil = () => {
  const [favoris, setFavoris] = useState([]);

  useEffect(() => {
    const favorisFromStorage = JSON.parse(localStorage.getItem("favoris")) || [];
    setFavoris(favorisFromStorage);

    const compteur = document.getElementById("cart-count");
    if (compteur) {
      let panier = JSON.parse(localStorage.getItem("panier")) || [];
      compteur.textContent = panier.length;
    }
  }, []);

  const toggleFavori = (id) => {
    const updatedFavoris = favoris.includes(id)
      ? favoris.filter((fid) => fid !== id)
      : [...favoris, id];

    setFavoris(updatedFavoris);
    localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
  };

  const livresEnchanted = livresEnchantes.filter(livre => livre.categorie === "enchanted");
  const livresBestsellers = livresEnchantes.filter(livre => livre.categorie === "bestsellers");
  const livresApparitions = livresEnchantes.filter(livre => livre.categorie === "apparitions");

  return (
    <>
      <Header />
      <main>
        <NouveautesBanner />

        <div className="particles-bg" aria-hidden="true"></div>

        <div className="section-spacing">
          <h2 className="section-titre"><i className="fas fa-book-open"></i> Nos livres enchantés</h2>
          <Carrousel
            titre=""
            livresId="enchanted"
            livres={livresEnchanted}
            favoris={favoris}
            toggleFavori={toggleFavori}
          />
        </div>

        <div className="section-spacing">
          <h2 className="section-titre"><i className="fas fa-hat-wizard"></i> Meilleures ventes</h2>
          <Carrousel
            titre=""
            livresId="bestsellers"
            livres={livresBestsellers}
            favoris={favoris}
            toggleFavori={toggleFavori}
          />
        </div>

        <div className="section-spacing">
          <h2 className="section-titre"><i className="fas fa-scroll"></i> Dernières apparitions</h2>
          <Carrousel
            titre=""
            livresId="apparitions"
            livres={livresApparitions}
            favoris={favoris}
            toggleFavori={toggleFavori}
          />
        </div>

        <h2 className="avis-titre"><i className="fas fa-star"></i> Ce que pensent nos lecteurs</h2>
        <AvisSection />
      </main>
      <Footer />
    </>
  );
};

export default Acceuil;
