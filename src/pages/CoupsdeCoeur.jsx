import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import livresEnchantes from '../data/livresEnchantes';
import '../styles/leslivres.css';


const CoupsDeCoeur = () => {
  const [favoris, setFavoris] = useState([]);


  useEffect(() => {
    const favorisIds = JSON.parse(localStorage.getItem('favoris')) || [];
    const livresFavoris = livresEnchantes.filter((livre) => favorisIds.includes(livre.id));
    setFavoris(livresFavoris);
  }, []);


  return (
    <>
      <Header />
      <div className="leslivres-container">
        <main className="livres-liste">
          {favoris.length === 0 ? (
            <p className="no-results">Aucun coup de cœur pour le moment...</p>
          ) : (
            favoris.map((livre) => (
              <div key={livre.id} className="livre-carte">
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


export default CoupsDeCoeur;

