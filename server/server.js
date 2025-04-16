import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';

import authRoutes from './routes/authRoutes.js';

// Charge les variables d’environnement
config();

// Résout __dirname pour ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialisation
const app = express();

// Middleware pour parsing JSON
app.use(express.json());

// Middleware CORS pour permettre les requêtes du frontend
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(helmet());

// Servir le build Vite (frontend React)
app.use(express.static(path.join(__dirname, 'build')));

// Route de test
app.get('/api/test', (req, res) => {
    res.json({ message: 'Serveur Node.js fonctionne !' });
});

// Routes d'authentification (inscription et connexion)
app.use('/api', authRoutes);

// Route catch-all pour le frontend React
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Lancer le serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});