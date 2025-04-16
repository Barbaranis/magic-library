import React, { useState, useRef } from 'react';
import axios from 'axios';
import Recaptcha from '../components/Recaptcha'; // Import du composant réutilisable
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/connexion.css';


const Connexion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const recaptchaRef = useRef(null);


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d])[ -~]{12,}$/;


    const validateForm = () => {
        const newErrors = {};


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
        }


        const recaptchaValue = recaptchaRef.current?.getValue();
        if (!recaptchaValue) {
            newErrors.recaptcha = 'Veuillez compléter le reCAPTCHA.';
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleLogin = async () => {
        if (!validateForm()) {
            return;
        }


        try {
            const recaptchaValue = recaptchaRef.current.getValue();
            const response = await axios.post('http://localhost:5000/api/connexion', {
                email,
                mot_de_passe: password,
                'g-recaptcha-response': recaptchaValue,
            });


            if (response.data.message === 'Connexion réussie') {
                localStorage.setItem('token', response.data.token);
                window.location.href = '/profil';
            }
        } catch (error) {
            setErrors({ form: error.response?.data?.message || 'Erreur lors de la connexion.' });
        }
    };


    return (
        <>
            <Header />
            <div className="form-container">
                <div className="form-box">
                    <h2>Connexion</h2>


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


                    {/* Utilisation du composant Recaptcha */}
                    <Recaptcha
                        recaptchaRef={recaptchaRef}
                        error={errors.recaptcha}
                        onChange={(value) => console.log('Captcha value:', value)}
                    />


                    {errors.form && <p className="error-message">{errors.form}</p>}


                    <button onClick={handleLogin}>Se connecter</button>
                    <p>
                        Pas encore de compte ? <a href="/inscription" className="switch-form">Créer un compte</a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default Connexion;


