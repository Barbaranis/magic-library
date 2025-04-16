import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/panier.css';
import { useNavigate } from 'react-router-dom';
import { GiSpellBook, GiFairyWand } from 'react-icons/gi';


const Panier = () => {
  const [panier, setPanier] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const panierLocal = JSON.parse(localStorage.getItem('panier')) || [];
    setPanier(panierLocal);
  }, []);


  const calculerTotal = () => {
    return panier.reduce((total, livre) => {
      const prix = parseFloat(livre.prix.replace(',', '.'));
      const quantite = livre.quantite || 1;
      return total + prix * quantite;
    }, 0).toFixed(2);
  };


  const passerCommande = () => {
    navigate('/paiement');
  };


  const modifierQuantite = (index, nouvelleQuantite) => {
    const updatedPanier = [...panier];
    updatedPanier[index].quantite = parseInt(nouvelleQuantite);
    setPanier(updatedPanier);
    localStorage.setItem('panier', JSON.stringify(updatedPanier));
  };


  const supprimerLivre = (index) => {
    const updatedPanier = panier.filter((_, i) => i !== index);
    setPanier(updatedPanier);
    localStorage.setItem('panier', JSON.stringify(updatedPanier));
  };


  return (
    <>
      <Header />
      <main className="contenu-panier">
        <h1 className="titre-page"><GiSpellBook /> Votre Panier Enchanté</h1>


        {panier.length === 0 ? (
          <div className="panier-vide">
            <p><GiFairyWand /> Votre panier est actuellement vide.</p>
            <a href="/" className="btn-retour">← Revenir à la librairie</a>
          </div>
        ) : (
          <>
            <div className="panier-liste">
              {panier.map((livre, index) => (
                <div className="panier-livre" key={index}>
                  <img src={livre.image} alt={livre.titre} />
                  <div className="infos">
                    <h3>{livre.titre}</h3>
                    <label>
                      Quantité :
                      <input
                        type="number"
                        min="1"
                        value={livre.quantite || 1}
                        onChange={(e) => modifierQuantite(index, e.target.value)}
                      />
                    </label>
                    <p>{(parseFloat(livre.prix.replace(',', '.')) * (livre.quantite || 1)).toFixed(2)} €</p>
                    <button className="supprimer" onClick={() => supprimerLivre(index)}>Supprimer</button>
                  </div>
                </div>
              ))}
            </div>


            <div className="panier-total">
              <div className="resume-commande">
                <h3>Résumé de votre commande</h3>
                <p>Total : <strong>{calculerTotal()} €</strong></p>
                <button className="btn-commander" onClick={passerCommande}>Passer à la caisse</button>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};


export default Panier;











