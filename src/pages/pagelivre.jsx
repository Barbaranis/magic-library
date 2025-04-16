import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pagelivre.css';
import { collection, addDoc, query, where, getDocs, serverTimestamp, orderBy } from 'firebase/firestore';
import { db } from '../firebase';


const livres = [
  {
    id: 1,
    titre: "Le Grimoire d'Émeraude",
    prix: "12,99 €",
    image: "/images/livre1.jpg",
    description: "Un grimoire ancien capable d’ouvrir des portails vers d’autres mondes...",
    longDescription: `La pluie tombait sans discontinuer sur les toits d’ardoise d’Elorwyn, cette cité oubliée des atlas modernes, blottie entre les collines des Brumes Dormantes. Dans les rues sinueuses, les lanternes diffusaient une lumière dorée tremblotante, comme si la ville tout entière hésitait entre le rêve et le réveil.
Alya, emmitouflée dans un manteau de laine épaisse, marchait vite. Elle connaissait le chemin par cœur : rue de la Verrière Oblique, puis une ruelle étroite bordée de glycines fanées, et enfin l’arrière-cour d’une librairie que peu de gens osaient encore fréquenter. On disait que les livres y respiraient encore.
Et c’était vrai.
La Librairie de Lysander n’ouvrait jamais ses portes au public. Elle n’en avait pas besoin. Ceux qui devaient y entrer savaient comment frapper : trois coups, une pause, deux coups. Puis, il fallait réciter une phrase oubliée dans la langue des Sylves Anciennes.
Alya, elle, n’avait jamais eu besoin de mots.
Elle y était née.
Ou du moins, c’est ce qu’on lui avait dit.

La clochette accrochée au-dessus de la porte n’émettait aucun son, mais l’air changea dès qu’elle entra. Une odeur de cuir vieilli, d’encre sèche et de poussière enchantée vint lui caresser les narines.
Les rayons, tordus comme les branches d’un arbre ancien, s’élevaient jusqu’au plafond de verre teinté. Certains livres lévitaient à mi-hauteur, tournoyant lentement comme des planètes silencieuses. D’autres, enfermés derrière des vitres scellées par des runes, palpitaient d’une lumière inquiétante.
Et au fond, bien au fond, là où les ombres semblaient s’accrocher aux murs comme des toiles d’araignée, se trouvait le coffre noir.
Alya s’y dirigea comme attirée par un fil invisible. Elle ne savait pas pourquoi. Elle ne se souvenait même pas de l’avoir déjà vu. Et pourtant, son cœur battait comme si elle s’apprêtait à ouvrir une tombe… ou une promesse.
Le coffre était en bois d’obsidienne, sculpté de glyphes qu’elle ne reconnut pas, mais qui semblèrent brûler légèrement sous ses doigts.
Il n’y avait pas de serrure.
Seulement une émeraude, profondément enchâssée au centre.
Elle posa sa main dessus.
Et le monde s’arrêta.

Un souffle. Un soupir. Le grondement sourd d’un autre monde qui se réveille.
Puis le couvercle se souleva dans un gémissement ancien, révélant un grimoire aussi noir que la nuit sans lune.
Sa couverture était douce comme du velours, mais chaude, presque vivante. Au centre, une pierre verte en forme de goutte semblait contenir une brume en mouvement.
Et quand Alya effleura le cuir, des lettres apparurent lentement, comme écrites à l’encre de brume :
« À toi qui lis ces mots…
…sache que les livres ne sont pas faits pour être lus.
Ils sont faits pour te lire. »
Un frisson la parcourut. Les bougies s’éteignirent. La pièce s’obscurcit, et la pierre d’émeraude pulsa une fois. Une seule.
Le livre s’ouvrit.
Et la voix parla.
Pas une voix humaine.
Pas une voix d’ici.
Une voix ancienne, tissée de vent et de cendre.
« Alya. Tu es revenue. »


Alya recula d’un pas, mais le livre la suivit. Pas physiquement — non — mais dans sa conscience. Il s’imposait comme une pensée étrangère, une présence invisible, accrochée à son souffle.
« Tu es revenue. Tu ne te souviens pas encore, mais tu portes en toi la clef. »
La voix vibrait dans son crâne, dans ses os, dans les murs même de la librairie. Elle n’était ni masculine, ni féminine. Elle était ancienne, comme si mille bibliothèques oubliées chuchotaient d’une seule bouche.
Alya tomba à genoux. Les glyphes gravés autour du grimoire s’étaient mis à luire, dessinant un cercle de lumière verte autour d’elle. Le sol tremblait. Les livres tremblaient. Et un à un, les grimoires des étagères s’ouvrirent, libérant des papillons de papier qui volèrent en spirale au-dessus d’elle.
Puis tout s’arrêta.
Un calme total. Comme le silence après une explosion.
Elle leva les yeux. Le grimoire était ouvert à une page vierge.
Une plume reposait à côté.
Alya la prit, presque en transe, et la plongea dans l’encre qui n’existait pas encore. Et alors, sans savoir pourquoi, elle écrivit :
« Je suis prête. »
Le livre absorba les mots. Littéralement. Les lettres se fondirent dans le parchemin, aspirées par la magie ancienne.
Et alors… les souvenirs revinrent.
Pas les siens.
Des souvenirs d’autres.
Une jeune femme en fuite, courant dans une forêt de racines mouvantes.
Un mage aux yeux vides, brûlant des pages pour survivre.
Un enfant muet, lisant à voix haute des runes interdites.
Des époques. Des échos. Des fragments.
Et à chaque vision, Alya sentait une chose grandir en elle : la certitude qu’elle n’était pas une simple lectrice.
Elle était une Héritière.
Pas d’un trône, ni d’un sang ancien, mais d’un Savoir perdu, d’une magie oubliée, contenue dans les fibres mêmes du grimoire.
Et ce livre… ce grimoire… lui appartenait.
Ou pire.
Elle lui appartenait.

Quand elle reprit conscience, la pièce était redevenue silencieuse.
Le cercle avait disparu. Les papillons de papier s’étaient figés dans les airs, puis s’étaient lentement déposés au sol.
Et devant elle, sur la page ouverte, une nouvelle phrase était apparue :
« Tu n’as plus le choix. »
Elle voulut refermer le livre.
Mais il refusa.
Il tourna les pages de lui-même, à toute vitesse, dans un bruissement comme une tempête.
Et chaque page racontait une histoire.
Mais pas des histoires passées.
Des histoires à venir.
Des événements qui n’avaient pas encore eu lieu. Des noms qu’elle ne connaissait pas. Des batailles, des pactes, des morts… sa propre destinée, couchée sur le parchemin comme une prophétie incertaine.
Alya comprit alors que ce grimoire n’était pas un simple livre.
C’était un oracle.
Et elle venait de l’éveiller.




`
  }
  // Ajoute d'autres livres ici
];


const PageLivre = () => {
  const { id } = useParams();
  const [livre, setLivre] = useState(null);
  const [nouvelAvis, setNouvelAvis] = useState('');
  const [avis, setAvis] = useState([]);
  const utilisateurConnecte = !!localStorage.getItem('token');


  useEffect(() => {
    const foundLivre = livres.find(l => l.id === parseInt(id));
    setLivre(foundLivre);
    if (foundLivre) {
      chargerAvis(foundLivre.id);
    }


    const compteur = document.getElementById("cart-count");
    if (compteur) {
      const panier = JSON.parse(localStorage.getItem("panier")) || [];
      compteur.textContent = panier.length;
    }
  }, [id]);


  const chargerAvis = async (livreId) => {
    try {
      const q = query(
        collection(db, "avis"),
        where("idLivre", "==", livreId),
        orderBy("date", "desc")
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => doc.data());
      setAvis(data);
    } catch (error) {
      console.error("Erreur lors du chargement des avis :", error);
    }
  };


  const envoyerAvis = async () => {
    if (!nouvelAvis.trim()) return;


    try {
      await addDoc(collection(db, "avis"), {
        idLivre: livre.id,
        auteur: localStorage.getItem('nom') || 'Anonyme',
        commentaire: nouvelAvis,
        date: serverTimestamp()
      });
      setNouvelAvis('');
      chargerAvis(livre.id);
    } catch (error) {
      console.error("Erreur en envoyant l’avis :", error);
    }
  };


  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return `le ${date.toLocaleDateString()} à ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };


  if (!livre) return <p>Livre introuvable.</p>;


  return (
    <>
      <Header />
      <div className="page-livre">
        <a href="/" className="retour-accueil">← Retour à l’accueil</a>
        <img src={livre.image} alt={livre.titre} />
        <h1>{livre.titre}</h1>
        <p>{livre.prix}</p>


        <div className="long-description">
          <p>{livre.longDescription}</p>
        </div>


        <button id="ajouter-panier" onClick={() => {
          let panier = JSON.parse(localStorage.getItem("panier")) || [];
          panier.push({ titre: livre.titre, prix: livre.prix, image: livre.image });
          localStorage.setItem("panier", JSON.stringify(panier));
          document.getElementById("cart-count").textContent = panier.length;
          alert("Livre ajouté au panier !");
        }}>Ajouter au panier</button>


        {/* Commentaires */}
        <div className="commentaires-section">
          <h2>Donnez votre avis sur ce livre</h2>
          
          <textarea
            placeholder="Partagez votre expérience magique..."
            value={nouvelAvis}
            onChange={(e) => setNouvelAvis(e.target.value)}
            className="champ-avis"
            rows="5"
          />


          {!utilisateurConnecte ? (
            <p className="message-connexion">
              Connecte-toi à ton compte pour pouvoir poster un avis !
            </p>
          ) : (
            <button className="btn-envoyer" onClick={envoyerAvis}>Envoyer l’avis</button>
          )}


          <div className="avis-existants">
            <h3>Avis des lecteurs :</h3>
            {avis.length === 0 ? (
              <p>Aucun avis pour ce livre... sois le premier à t’exprimer !</p>
            ) : (
              avis.map((a, index) => (
                <div key={index} className="avis-carte">
                  <p className="commentaire">{a.commentaire}</p>
                  <span className="auteur">- {a.auteur}</span>
                  <span className="date">{formatDate(a.date)}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default PageLivre;

