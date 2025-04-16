import React from 'react';
import '../styles/about.css';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { GiSpellBook, GiFairyWand, GiMagicSwirl, GiTreeDoor, GiScrollQuill, GiFeather, GiStarsStack } from 'react-icons/gi';


const About = () => {
  return (
    <>
      <Header />
      <main className="about-container">
        <section className="apropos-section">
          <h2><GiMagicSwirl /> Notre univers magique</h2>
          <p>Bienvenue à <strong>Magic Library</strong>, un sanctuaire de l’imaginaire où chaque livre est une porte vers un monde enchanté, peuplé de créatures anciennes et d’histoires oubliées.</p>
        </section>


        <section className="apropos-section">
          <h2><GiSpellBook /> La genèse de Magic Library</h2>
          <p>Née d’une étincelle lors d’une nuit d’étoiles filantes, notre librairie s’est construite autour d’un grimoire légendaire retrouvé dans les ruines d’Aeloria. Depuis, la magie n’a cessé de grandir entre ses pages.</p>
        </section>


        <section className="apropos-section">
          <h2><GiFairyWand /> Notre mission</h2>
          <p>Notre objectif est simple : propager la magie de la lecture à travers tous les royaumes, en éveillant les cœurs aux récits merveilleux et inspirants.</p>
        </section>


        <section className="apropos-section">
          <h2><GiTreeDoor /> Les gardiens du savoir</h2>
          <p>Derrière chaque page, une équipe passionnée veille à la magie de notre collection. Chaque membre est un Gardien, formé dans les plus grandes bibliothèques elfiques et humaines.</p>
        </section>


        <section className="apropos-section">
          <h2><GiScrollQuill /> Magie moderne & technologies</h2>
          <p>HTML, CSS, JavaScript, Firebase, PHPMyAdmin... Nos outils sont modernes, mais l’âme reste ancestrale. Nous conjuguons le code et l'incantation pour faire vibrer le monde numérique.</p>
        </section>


        <section className="apropos-section">
          <h2><GiFeather /> Un engagement écoresponsable</h2>
          <p>Notre hébergement est alimenté par la lumière des étoiles et nos pixels sont recyclables. La magie n’oublie jamais la nature qui l’abrite.</p>
        </section>


        <section className="apropos-section">
          <h2><GiStarsStack /> Ce que disent nos lecteurs</h2>
          <p>"Un lieu enchanté. J’ai retrouvé le goût de lire avec les dragons et les grimoires vivants." — Élise T.</p>
          <p>"J’ai cliqué… et j’ai été aspiré dans un roman." — Malik Y.</p>
        </section>


        <section className="apropos-section">
          <h2><GiScrollQuill /> Contactez-nous</h2>
          <p>Une question ? Un parchemin à envoyer ? Rendez-vous sur la page <Link to="/contact">Contact</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};


export default About;





