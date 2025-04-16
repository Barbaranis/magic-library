import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/carrousel.css';
import { useNavigate } from 'react-router-dom';
import { FaMagic } from 'react-icons/fa';


const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};


const Carrousel = ({ titre, livresId, livres, favoris, toggleFavori }) => {
  const navigate = useNavigate();
  // Filtrage des livres en fonction de la catégorie (livresId)
  const livresFiltres = livres.filter(livre => livre.categorie === livresId);


  return (
    <div className="section-carrousel">
      {/* Titre de section avec une icône magique */}
      <h2 className="section-titre">
        <FaMagic className="magical-icon" /> {titre}
      </h2>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3500}>
        {livresFiltres.map(livre => (
          <div className="livre-card" key={livre.id}>
            <span
              className="coeur-fav"
              onClick={(e) => {
                e.stopPropagation(); // Empêche la navigation lors du clic sur le cœur
                toggleFavori(livre.id);
              }}
              title="Ajouter aux coups de cœur"
            >
              {favoris.includes(livre.id) ? '❤️' : '🤍'}
            </span>
            <img
              src={livre.image}
              alt={livre.titre}
              onClick={() => navigate(`/livre/${livre.id}`)}
            />
            <h3 className="titre-livre">{livre.titre}</h3>
            <p className="prix">{livre.prix}</p>
            <div className="popup-hover">
              <p>{livre.description}</p>
              <button onClick={() => navigate(`/livre/${livre.id}`)} className="voir-plus-btn">
                Voir plus
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};


export default Carrousel;





