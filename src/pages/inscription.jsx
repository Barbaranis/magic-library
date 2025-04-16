import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Recaptcha from '../components/Recaptcha';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/inscription.css';

const Inscription = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState({});
    const recaptchaRef = useRef(null);

    const nomPrenomRegex = /^[A-Za-zÀ-ÿ\s-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d])[ -~]{12,}$/;

    useEffect(() => {
        const removeAriaHidden = () => {
            const recaptchaTarget = document.querySelector('#rc-imageselect-target');
            if (recaptchaTarget) {
                recaptchaTarget.removeAttribute('aria-hidden');
            }
        };

        const timer = setTimeout(removeAriaHidden, 1000);
        return () => clearTimeout(timer);
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!nom) {
            newErrors.nom = 'Le nom est requis.';
        } else if (!nomPrenomRegex.test(nom)) {
            newErrors.nom = 'Le nom ne doit contenir que des lettres, espaces ou tirets.';
        }

        if (!prenom) {
            newErrors.prenom = 'Le prénom est requis.';
        } else if (!nomPrenomRegex.test(prenom)) {
            newErrors.prenom = 'Le prénom ne doit contenir que des lettres, espaces ou tirets.';
        }

        if (!email) {
            newErrors.email = 'L’adresse e-mail est requise.';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Veuillez entrer une adresse e-mail valide.';
        }

        if (!password) {
            newErrors.password = 'Le mot de passe est requis.';
        } else if (!passwordRegex.test(password)) {
            newErrors.password =
                'Le mot de passe doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.';
            console.log('Mot de passe non valide :', password); // Journal de débogage
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'La confirmation du mot de passe est requise.';
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas.';
        }

        if (!consent) {
            newErrors.consent = 'Vous devez accepter le traitement de vos données pour continuer.';
        }

        const recaptchaValue = recaptchaRef.current?.getValue();
        if (!recaptchaValue) {
            newErrors.recaptcha = 'Veuillez compléter le reCAPTCHA.';
        }

        console.log('Erreurs de validation :', newErrors); // Journal de débogage
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            const recaptchaValue = recaptchaRef.current.getValue();
            const response = await axios.post('http://localhost:5000/api/inscription', {
                nom,
                prenom,
                email,
                mot_de_passe: password,
                'g-recaptcha-response': recaptchaValue,
            });

            if (response.data.message === 'Inscription réussie') {
                window.location.href = '/profil';
            }
        } catch (error) {
            console.log('Erreur lors de l’inscription :', error.response?.data); // Journal de débogage
            setErrors({ form: error.response?.data?.message || 'Erreur lors de l’inscription. Vérifie tes informations.' });
        }
    };

    return (
        <>
            <Header />
            <div className="form-container">
                <div className="form-box">
                    <h2>Inscription</h2>

                    <div className="form-group name-group">
                        <div className="input-wrapper">
                            <label htmlFor="nom">Nom :</label>
                            <input
                                type="text"
                                id="nom"
                                placeholder="Nom"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                required
                                aria-required="true"
                                aria-describedby={errors.nom ? 'nom-error' : undefined}
                            />
                            {errors.nom && (
                                <p id="nom-error" className="error-message">
                                    {errors.nom}
                                </p>
                            )}
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="prenom">Prénom :</label>
                            <input
                                type="text"
                                id="prenom"
                                placeholder="Prénom"
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                                required
                                aria-required="true"
                                aria-describedby={errors.prenom ? 'prenom-error' : undefined}
                            />
                            {errors.prenom && (
                                <p id="prenom-error" className="error-message">
                                    {errors.prenom}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Adresse e-mail :</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Adresse e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-required="true"
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="error-message">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe :</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-required="true"
                            aria-describedby={errors.password ? 'password-error' : undefined}
                        />
                        {errors.password && (
                            <p id="password-error" className="error-message">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirmer le mot de passe :</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirmer le mot de passe"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            aria-required="true"
                            aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
                        />
                        {errors.confirmPassword && (
                            <p id="confirm-password-error" className="error-message">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    <Recaptcha
                        recaptchaRef={recaptchaRef}
                        error={errors.recaptcha}
                        onChange={(value) => console.log('Captcha value:', value)}
                    />

                    <div className="form-group consent-group">
                        <label htmlFor="consent" className="consent-label">
                            <input
                                type="checkbox"
                                id="consent"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                aria-describedby={errors.consent ? 'consent-error' : undefined}
                            />
                            J’accepte le traitement de mes données personnelles conformément à la{" "}
                            <a href="/politique-confidentialite" className="switch-form">
                                politique de confidentialité
                            </a>.
                        </label>
                        {errors.consent && (
                            <p id="consent-error" className="error-message">
                                {errors.consent}
                            </p>
                        )}
                    </div>

                    <p className="rgpd-info">
                        Vos données (nom, prénom, email) seront stockées de manière sécurisée pour gérer votre compte. Vous pouvez accéder, modifier ou supprimer vos données via votre profil. Consultez notre{" "}
                        <a href="/politique-confidentialite" className="switch-form">politique de confidentialité</a> pour plus d’informations.
                    </p>

                    {errors.form && <p className="error-message">{errors.form}</p>}

                    <button onClick={handleRegister}>S’inscrire</button>
                    <p>
                        Déjà un compte ? <a href="/connexion" className="switch-form">Se connecter</a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Inscription;