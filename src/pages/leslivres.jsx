import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import livresEnchantes from '../data/livresEnchantes';
import '../styles/leslivres.css';


import { GiSpellBook, GiFairyWand, GiCrystalBall, GiMagicGate, GiMagicLamp, GiBookCover, GiMeditation, GiOpenBook, GiFeather } from 'react-icons/gi';


const categories = [
  { id: "enchanted", label: "Enchanted", icon: <GiSpellBook /> },
  { id: "bestsellers", label: "Meilleures ventes", icon: <GiCrystalBall /> },
  { id: "apparitions", label: "Apparitions", icon: <GiMagicGate /> },
  { id: "jeunesse", label: "Jeunesse", icon: <GiMagicLamp /> },
  { id: "manga", label: "Manga", icon: <GiBookCover /> },
  { id: "bd", label: "BD", icon: <GiFeather /> },
  { id: "science", label: "Science", icon: <GiOpenBook /> },
  { id: "bien-etre", label: "Bien-être", icon: <GiMeditation /> },
  { id: "voyage", label: "Voyage", icon: <GiFairyWand /> },
];


const LesLivres = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('enchanted');
  const [favoris, setFavoris] = useState([]);
  const [recherche, setRecherche] = useState('');


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    setRecherche(query ? query.toLowerCase() : '');
  }, [location.search]);


  useEffect(() => {
    const favorisFromStorage = JSON.parse(localStorage.getItem('favoris')) || [];
    setFavoris(favorisFromStorage);
  }, []);


  const toggleFavori = (id) => {
    const updatedFavoris = favoris.includes(id)
      ? favoris.filter((fid) => fid !== id)
      : [...favoris, id];
    setFavoris(updatedFavoris);
    localStorage.setItem('favoris', JSON.stringify(updatedFavoris));
  };


  const livresFiltres = recherche
    ? livresEnchantes.filter((livre) =>
        livre.titre.toLowerCase().includes(recherche)
      )
    : livresEnchantes.filter((livre) => livre.categorie === selectedCategory);


  return (
    <>
      <Header />
      <div className="leslivres-container">
        <aside className="sidebar-categories">
          <h2>Catégories</h2>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat.id}
                role="button"
                tabIndex={0}
                className={!recherche && selectedCategory === cat.id ? 'active' : ''}
                onClick={() => setSelectedCategory(cat.id)}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCategory(cat.id); }}
              >
                <span className="cat-icon">{cat.icon}</span> {cat.label}
              </li>
            ))}
          </ul>
        </aside>


        <main className="livres-liste">
          {livresFiltres.length === 0 ? (
            <p className="no-results">Aucun livre trouvé.</p>
          ) : (
            livresFiltres.map((livre) => (
              <div key={livre.id} className="livre-carte">
                <span
                  className="coeur-fav"
                  onClick={() => toggleFavori(livre.id)}
                  title="Ajouter aux coups de cœur"
                >
                  {favoris.includes(livre.id) ? '❤️' : '🤍'}
                </span>
                <img src={livre.image} alt={livre.titre} title={livre.titre} />
                <h3>{livre.titre}</h3>
                <p className="prix">{livre.prix}</p>
                <p className="description">{livre.description}</p>
                <a className="voir-plus" href={`/livre/${livre.id}`}>Voir plus</a>
              </div>
            ))
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};


export default LesLivres;

