import express from 'express';
import { inscription, connexion, verifyToken } from '../controllers/authController.js';
import recaptchaMiddleware from '../middlewares/recaptchaMiddleware.js';
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 tentatives
  message: "Trop de tentatives de connexion. Réessayez plus tard."
});


router.post('/connexion', recaptchaMiddleware, loginLimiter, connexion);

const router = express.Router();

// Applique recaptchaMiddleware aux routes /inscription et /connexion
router.post('/inscription', recaptchaMiddleware, inscription);
router.post('/connexion',  recaptchaMiddleware,  connexion);
router.get('/verify-token', verifyToken); // Nouvelle route

export default router;