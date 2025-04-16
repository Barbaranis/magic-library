import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaHeart, FaRegUser, FaMagic, FaFeatherAlt, FaScroll, FaSignOutAlt } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import '../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prenom, setPrenom] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
	const panier = JSON.parse(localStorage.getItem('panier')) || [];
	setCartCount(panier.length);
  }, []);

  useEffect(() => {
	const token = localStorage.getItem('token');
	if (!token) {
  	setIsLoggedIn(false);
  	setPrenom('');
  	return;
	}

	const checkAuth = async () => {
  	try {
    	const res = await fetch('http://localhost:5000/api/verify-token', {
      	headers: { Authorization: `Bearer ${token}` }
    	});
    	if (!res.ok) throw new Error("Token invalide");
    	const data = await res.json();
    	setIsLoggedIn(true);
    	setPrenom(data.prenom || '');
  	} catch {
    	setIsLoggedIn(false);
    	setPrenom('');
    	localStorage.removeItem('token');
  	}
	};

	checkAuth();
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = (e) => {
	e.preventDefault();
	if (searchTerm.trim() !== '') {
  	navigate(`/leslivres?q=${encodeURIComponent(searchTerm)}`);
  	setMenuOpen(false);
  	setSearchTerm('');
	}
  };

  const handleLogout = () => {
	localStorage.removeItem('token');
	setIsLoggedIn(false);
	setPrenom('');
	navigate('/');
  };

  return (
	<header className="header">
  	<div className="header-content">
    	{/* Logo */}
    	<div className="logo">
      	<NavLink to="/">
        	<img src="/images/Logomagiclibrary.jpg" alt="Logo Librairie Magique" />
      	</NavLink>
    	</div>

    	{/* Barre de recherche centrée */}
    	<form className="search-form" onSubmit={handleSearch}>
      	<input
        	type="text"
        	className="search-bar"
        	placeholder="Rechercher un livre enchanté..."
        	value={searchTerm}
        	onChange={(e) => setSearchTerm(e.target.value)}
        	aria-label="Rechercher un livre"
      	/>
    	</form>

    	{/* Icônes */}
    	<div className="header-icons">
      	<div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        	<span></span><span></span><span></span>
      	</div>

      	<nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        	<NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          	<FaMagic /> <strong>Accueil</strong>
        	</NavLink>
        	<NavLink to="/leslivres" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          	<FaFeatherAlt /> <strong>Les livres</strong>
        	</NavLink>
        	<NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          	<FaScroll /> <strong>À propos</strong>
        	</NavLink>
        	<NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          	<i className="fas fa-envelope-open-text"></i> <strong>Contact</strong>
        	</NavLink>
      	</nav>

      	<NavLink to="/coups-de-coeur" className="heart" title="Coups de cœur"><FaHeart /></NavLink>

      	<NavLink to="/panier" className="panier" title="Panier">
        	<div className="cart-wrapper">
          	<BsCart />
          	<span id="cart-count" className="cart-badge">{cartCount}</span>
        	</div>
      	</NavLink>

      	{isLoggedIn ? (
        	<>
          	<span className="user-prenom">Bonjour, {prenom}</span>
          	<button className="logout-btn" onClick={handleLogout} title="Déconnexion">
            	<FaSignOutAlt />
          	</button>
        	</>
      	) : (
        	<NavLink to="/connexion" className="compte" title="Compte">
          	<FaRegUser />
        	</NavLink>
      	)}
    	</div>
  	</div>
	</header>
  );
};

export default Header;

