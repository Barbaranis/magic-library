import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/acceuil.css';
import { FaFeatherAlt, FaRegClock, FaMagic } from 'react-icons/fa';
import DOMPurify from 'dompurify';


const AvisSection = () => {
  const [avis, setAvis] = useState([]);


  useEffect(() => {
    const fetchAvis = async () => {
      try {
        const q = query(collection(db, "avis"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        const avisData = querySnapshot.docs.map(doc => doc.data());
        setAvis(avisData);
      } catch (error) {
        console.error("Erreur lors du chargement des avis :", error);
      }
    };


    fetchAvis();
  }, []);


  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return `${date.toLocaleDateString()} à ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };


  return (
    <section className="avis-section">
      <h2><FaMagic className="icon-title" /> Ce que pensent nos lecteurs</h2>
      <div className="avis-grid">
        {avis.map((a, index) => (
          <div className="avis-card" key={index}>
            <p className="commentaire">
              <FaFeatherAlt className="icon-feather" /> “
              <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(a.commentaire) }} />
              ”
            </p>
            <span className="auteur">- {DOMPurify.sanitize(a.auteur)}</span>
            {a.date && (
              <span className="date">
                <FaRegClock className="icon-clock" /> {formatDate(a.date)}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};


export default AvisSection;

