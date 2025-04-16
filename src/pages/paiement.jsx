import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/paiement.css';


const Paiement = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };


  return (
    <>
      <Header />
      <main>
        <section className="paiement">
          <h1>Finaliser votre achat</h1>


          {!isSubmitted ? (
            <form id="paiement-form" onSubmit={handleSubmit}>
              <div className="section-info">
                <h2>Informations personnelles</h2>
                <input type="text" placeholder="Nom complet" required />
                <input type="email" placeholder="Adresse e-mail" required />
                <input type="text" placeholder="Adresse postale" required />
                <input type="text" placeholder="Ville" required />
                <input type="text" placeholder="Code postal" required />
              </div>


              <div className="section-paiement">
                <h2>Détails de paiement</h2>
                <input type="text" placeholder="Numéro de carte (XXXX XXXX XXXX XXXX)" required />
                <input type="text" placeholder="Nom sur la carte" required />
                <div className="paiement-flex">
                  <input type="text" placeholder="MM/AA" required />
                  <input type="text" placeholder="CVC" required />
                </div>
              </div>


              <button type="submit" className="payer-btn">Procéder au paiement</button>
            </form>
          ) : (
            <div className="confirmation" id="confirmation-message">
              <h3>Merci pour votre commande !</h3>
              <p>Un e-mail de confirmation vous a été envoyé.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};


export default Paiement;

