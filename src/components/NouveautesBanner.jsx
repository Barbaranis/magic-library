import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/banniere.css';


const slides = [
  {
    image: "/images/slide1.jpg",
    titre: "Bienvenue dans la Librairie Magique",
    texte: "Entrez dans un monde de savoirs enchantés et de livres vivants..."
  },
  {
    image: "/images/slide2.jpg",
    titre: "Explorez les Royaumes Oubliés",
    texte: "Chaque livre est une clé vers un univers ancien."
  },
  {
    image: "/images/slide3.jpg",
    titre: "Les Secrets Attendent",
    texte: "Osez tourner la première page..."
  }
];


const responsive = {
  all: { breakpoint: { max: 3000, min: 0 }, items: 1 }
};


const BanniereSlider = () => {
  return (
    <div className="banniere-slider">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots
        arrows={false}
        transitionDuration={1000}
      >
        {slides.map((slide, index) => (
          <div className="slide-item" key={index}>
            <img src={slide.image} alt={slide.titre} />
            <div className="slide-overlay">
              <h1>{slide.titre}</h1>
              <p>{slide.texte}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};


export default BanniereSlider;

