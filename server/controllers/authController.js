import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectDB from '../config/db.js';

export const inscription = async (req, res) => {
  try {
    const { nom, prenom, email, mot_de_passe } = req.body;
    if (!nom || !prenom || !email || !mot_de_passe) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    const db = await connectDB();
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
      await db.end();
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
    await db.execute(
      'INSERT INTO users (nom, prenom, email, mot_de_passe, date_inscription) VALUES (?, ?, ?, ?, NOW())',
      [nom, prenom, email, hashedPassword]
    );

    await db.end();
    res.status(201).json({ message: 'Inscription réussie' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const connexion = async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;
    if (!email || !mot_de_passe) {
      return res.status(400).json({ message: 'Email et mot de passe requis' });
    }

    const db = await connectDB();
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      await db.end();
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    const user = rows[0];
    const validPassword = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!validPassword) {
      await db.end();
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = jwt.sign({ id: user.id_client, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
    await db.end();

    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const verifyToken = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Aucun token fourni' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const db = await connectDB();
    const [rows] = await db.execute('SELECT nom, prenom, email, date_inscription FROM users WHERE id_client = ?', [decoded.id]);
    await db.end();

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const user = rows[0];
    res.json({
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      date_inscription: user.date_inscription
    });
  } catch (error) {
    console.log('Erreur lors de la vérification du token :', error);
    res.status(401).json({ message: 'Token invalide' });
  }
};

