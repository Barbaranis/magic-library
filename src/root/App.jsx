import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Pages
import Accueil from '../pages/accueil.jsx'
import About from '../pages/about.jsx'
import Contact from '../pages/contact.jsx'
import Admin from '../pages/admin.jsx'
import Connexion from '../pages/connexion.jsx'
import Inscription from '../pages/inscription.jsx'
import Profil from '../pages/profil.jsx'
import Paiement from '../pages/paiement.jsx'
import Panier from '../pages/panier.jsx'
import PageLivre from '../pages/pagelivre.jsx'
import LesLivres from '../pages/leslivres.jsx'
import CoupsDeCoeur from '../pages/CoupsdeCoeur.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/paiement" element={<Paiement />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/livre/:id" element={<PageLivre />} />
        <Route path="/leslivres" element={<LesLivres />} />
        <Route path="/coups-de-coeur" element={<CoupsDeCoeur/>} />
      </Routes>
    </Router>
  )
}


export default App

