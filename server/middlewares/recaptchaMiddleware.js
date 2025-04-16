import axios from 'axios';

export default async (req, res, next) => {
    const recaptchaResponse = req.body['g-recaptcha-response'];
    if (!recaptchaResponse) {
        return res.status(400).json({ message: 'reCAPTCHA requis' });
    }

    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaResponse}`
        );
        if (!response.data.success) {
            return res.status(400).json({ message: 'Vérification reCAPTCHA échouée' });
        }
        next();
    } catch (error) {
        console.log('Erreur lors de la vérification reCAPTCHA :', error); // Utilise la variable 'error'
        res.status(500).json({ message: 'Erreur lors de la vérification reCAPTCHA' });
    }
};