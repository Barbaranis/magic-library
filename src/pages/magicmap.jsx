// src/components/MagicMap.jsx
import React from 'react';
import './MagicMap.css';
import mapImage from '../assets/carte-magique.png'; // image fantasy de la map


const MagicMap = () => {
  return (
    <div className="magic-map-container">
      <h2 className="magic-title">Carte enchantée de la Librairie</h2>
      <div className="map-wrapper">
        <img src={mapImage} alt="Carte magique" className="map-image" />
        <a href="/" className="zone zone-accueil">Accueil</a>
        <a href="/livres" className="zone zone-livres">Livres</a>
        <a href="/panier" className="zone zone-panier">Panier</a>
        <a href="/profil" className="zone zone-profil">Profil</a>
      </div>
    </div>
  );
};


export default MagicMap;

