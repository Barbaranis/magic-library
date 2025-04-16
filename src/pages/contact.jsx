import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/contact.css';
import { GiFeather, GiMagicSwirl, GiSpellBook, GiHummingbird } from 'react-icons/gi';


const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  });
  const [errors, setErrors] = useState({});


  const regex = {
    nom: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    objet: /^[a-zA-Z0-9\s.,!?'-]{2,100}$/,
    message: /^[\s\S]{10,500}$/,
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validateForm = () => {
    const newErrors = {};
    if (!regex.nom.test(formData.nom)) newErrors.nom = 'Le nom doit contenir 2 à 50 lettres.';
    if (!regex.email.test(formData.email)) newErrors.email = 'Adresse email invalide.';
    if (!regex.objet.test(formData.objet)) newErrors.objet = 'Objet incorrect.';
    if (!regex.message.test(formData.message)) newErrors.message = 'Message trop court ou trop long.';
    if (!document.getElementById('consent').checked) newErrors.consent = 'Consentement requis.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message envoyé avec succès !');
      setFormData({ nom: '', email: '', objet: '', message: '' });
    }
  };


  return (
    <>
      <Header />
      <main className="contact-section">
        <h1 id="contact-title"><GiSpellBook /> Contactez la Librairie Magique</h1>
        <p className="intro">
          Une question, un sort mal lancé ou un livre égaré ? <GiMagicSwirl /> Envoyez-nous un hibou magique !
        </p>


        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom"><GiFeather /> Nom :</label>
            <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
            {errors.nom && <p className="error">{errors.nom}</p>}
          </div>


          <div className="form-group">
            <label htmlFor="email"><GiHummingbird /> Adresse e-mail :</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>


          <div className="form-group">
            <label htmlFor="objet"><GiSpellBook /> Objet :</label>
            <input type="text" id="objet" name="objet" value={formData.objet} onChange={handleChange} />
            {errors.objet && <p className="error">{errors.objet}</p>}
          </div>


          <div className="form-group">
            <label htmlFor="message"><GiMagicSwirl /> Message :</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>


          <div className="form-group">
            <label htmlFor="consent">
              <input type="checkbox" id="consent" />
              J’accepte le traitement de mes données personnelles.
            </label>
            {errors.consent && <p className="error">{errors.consent}</p>}
          </div>


          <button type="submit">Envoyer le message</button>
        </form>


        <section className="magical-map">
          <h2><GiSpellBook /> Nous trouver dans le Monde Enchanté</h2>
          <img src="/images/carte-magique.jpg" alt="Carte magique" />
          <p><strong>Adresse :</strong> Rue des Livres Perdus, Quartier Sorcellerie, Royaume d'Aeloria</p>
        </section>
      </main>
      <Footer />
    </>
  );
};


export default Contact;

