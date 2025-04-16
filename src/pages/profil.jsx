

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/profil.css';


const Profil = () => {
  
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [dateInscription, setDateInscription] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');
  
  

  const [nom, setNom] = useState('');
  const [section, setSection] = useState('dashboard');
  const navigate = useNavigate();
  

  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/connexion');
      return;
    }



    const verifyToken = async () => {
      try {
      const response = await fetch('http://localhost:5000/api/verify-token', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!response.ok) throw new Error('Token invalide');
      const data = await response.json();
      setNom(data.nom || '');
      setPrenom(data.prenom || '');
      setEmail(data.email || '');
      setDateInscription(data.date_inscription || '');
      } catch  {
      localStorage.removeItem('token');
      navigate('/connexion');
      }
    };
    
    

    verifyToken();
  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };


  return (
    <>
      <Header />
      <div className="profil-container">
        <aside className="sidebar">
          <h2>Mon espace</h2>
          <ul>
            <li><button onClick={() => setSection('dashboard')} className={section === 'dashboard' ? 'active' : ''}>Tableau de bord</button></li>
            <li><button onClick={() => setSection('coups')} className={section === 'coups' ? 'active' : ''}>Coups de cœur</button></li>
            <li><button onClick={() => setSection('favoris')} className={section === 'favoris' ? 'active' : ''}>Favoris à acheter</button></li>
            <li><button onClick={() => setSection('achats')} className={section === 'achats' ? 'active' : ''}>Livres achetés</button></li>
            <li><button onClick={() => setSection('infos')} className={section === 'infos' ? 'active' : ''}>Informations</button></li>
            <li><button id="logout-btn" onClick={handleLogout}>Déconnexion</button></li>
          </ul>
        </aside>


        <main className="profil-main">
          <header className="profil-header">
            <h1 id="bienvenue">Bienvenue, {nom} !</h1>
          </header>


          {(section === 'dashboard' || section === 'tableau') && (
            <section className="tableau-bord">
              <h2>Tableau de bord</h2>
              <div className="carte-info">
                <p>Retrouvez vos livres préférés, vos achats et votre suivi de fidélité ici.</p>
              </div>
            </section>
          )}


          {(section === 'dashboard' || section === 'coups') && (
            <section className="mes-coups">
              <h2>Mes coups de cœur</h2>
              <div className="livres-grille">
                <img src="/images/livre1.jpg" alt="Coup de cœur" />
                <img src="/images/livre2.jpg" alt="Coup de cœur" />
              </div>
            </section>
          )}


          {(section === 'dashboard' || section === 'favoris') && (
            <section className="mes-favoris">
              <h2>Favoris à acheter</h2>
              <div className="livres-grille">
                <img src="/images/livre3.jpg" alt="Favori" />
                <img src="/images/livre4.jpg" alt="Favori" />
              </div>
            </section>
          )}


          {(section === 'dashboard' || section === 'achats') && (
            <section className="mes-achats">
              <h2>Livres achetés</h2>
              <div className="livres-grille">
                <img src="/images/livre5.jpg" alt="Acheté" />
                <img src="/images/livre6.jpg" alt="Acheté" />
              </div>
            </section>
          )}


{(section === 'dashboard' || section === 'infos') && (
  <section className="mes-infos">
	<h2>Mes informations personnelles</h2>
	<div className="infos-bloc">
  	<p><strong>Nom :</strong> {nom}</p>
  	<p><strong>Prénom :</strong> {prenom}</p>
  	<p><strong>Email :</strong> {email}</p>
  	<p><strong>Date d’inscription :</strong> {new Date(dateInscription).toLocaleDateString('fr-FR')}</p>
	</div>


	<div className="modifier-mdp">
  	<label htmlFor="new-password">Nouveau mot de passe :</label>
  	<input
    	type="password"
    	id="new-password"
    	placeholder="***************"
    	value={newPassword}
    	onChange={(e) => setNewPassword(e.target.value)}
  	/>
  	<button onClick={async () => {
    	try {
      	const token = localStorage.getItem('token');
      	const res = await fetch('http://localhost:5000/api/update-password', {
        	method: 'POST',
        	headers: {
          	'Content-Type': 'application/json',
          	Authorization: `Bearer ${token}`
        	},
        	body: JSON.stringify({ newPassword })
      	});
      	const result = await res.json();
      	setUpdateMessage(result.message || 'Mot de passe mis à jour.');
      	setNewPassword('');
    	} catch  {
      	setUpdateMessage('Erreur lors de la mise à jour.');
    	}
  	}}>Mettre à jour</button>


  	{updateMessage && <p className="update-msg">{updateMessage}</p>}
	</div>
  </section>
)}


        </main>
      </div>
      <Footer />
    </>
  );
};


export default Profil;

