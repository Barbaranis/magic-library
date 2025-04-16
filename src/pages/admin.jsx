import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase-config.jsx';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import '../styles/admin.css';
import Footer from '../components/footer';



export default function Admin() {
  const [adminName, setAdminName] = useState("Admin");
  const [activeTab, setActiveTab] = useState("utilisateurs");
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);


  // Vérifie l’authentification
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAdminName(user.email);
      } else {
        window.location.href = "/compte";
      }
    });
  }, []);


  // Récupération des données
  useEffect(() => {
    const fetchData = async () => {
      const usersSnap = await getDocs(collection(db, "users"));
      const booksSnap = await getDocs(collection(db, "livres"));
      const ordersSnap = await getDocs(collection(db, "commandes"));
      const reviewsSnap = await getDocs(collection(db, "avis"));


      setUsers(usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setBooks(booksSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setOrders(ordersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setReviews(reviewsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };


    fetchData();
  }, []);


  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };


  return (
    <div className="admin-page">
      {/* HEADER */}
      <header>
        <div className="logo">
          <a href="/"><img src="/images/Logomagiclibrary.jpg" alt="Logo Librairie Magique" /></a>
        </div>
        <div className="admin-header-right">
          <span id="admin-name">Bienvenue, {adminName}</span>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      </header>


      {/* NAVIGATION */}
      <nav className="admin-nav">
        <button className={activeTab === 'utilisateurs' ? 'active' : ''} onClick={() => setActiveTab("utilisateurs")}>Utilisateurs</button>
        <button className={activeTab === 'livres' ? 'active' : ''} onClick={() => setActiveTab("livres")}>Livres</button>
        <button className={activeTab === 'commandes' ? 'active' : ''} onClick={() => setActiveTab("commandes")}>Commandes</button>
        <button className={activeTab === 'avis' ? 'active' : ''} onClick={() => setActiveTab("avis")}>Avis</button>
      </nav>


      {/* CONTENU */}
      <main>
        {activeTab === "utilisateurs" && (
          <section>
            <h2>Gestion des Utilisateurs</h2>
            <ul>
              {users.map((u) => (
                <li key={u.id}>{u.nom} - {u.email}</li>
              ))}
            </ul>
          </section>
        )}


        {activeTab === "livres" && (
          <section>
            <h2>Gestion des Livres</h2>
            <ul>
              {books.map((b) => (
                <li key={b.id}>{b.titre} - {b.prix} €</li>
              ))}
            </ul>
          </section>
        )}


        {activeTab === "commandes" && (
          <section>
            <h2>Gestion des Commandes</h2>
            <ul>
              {orders.map((o) => (
                <li key={o.id}>Commande #{o.id} - {o.status}</li>
              ))}
            </ul>
          </section>
        )}


        {activeTab === "avis" && (
          <section>
            <h2>Modération des Avis</h2>
            <ul>
              {reviews.map((r) => (
                <li key={r.id}>{r.commentaire} ({r.note}/5)</li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <>
  {/* contenu */}
  <Footer />
</>


    </div>
  );
}

