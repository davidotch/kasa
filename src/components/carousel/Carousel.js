import './Carousel.scss';
import { useState } from 'react';
import arrowBack from '../../assets/carousel_arrow_back.png';
import arrowForward from '../../assets/carousel_arrow_forward.png';

// La fonction Carousel prend en paramètre un tableau d'images (imageSlider) et affiche une image à la fois, en fonction de l'indice (currentIndex).
export default function Carousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Les fonctions nextImg() et previousImg() sont appelées lorsqu'on clique sur les flèches "next" et "back".
  
  // La fonction nextImg() incrémente l'indice.
  const nextImg = () => {
    if (currentIndex === imageSlider.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  //  la fonction previousImg() décrémente l'indice.
  const previousImg = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageSlider.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //  L'image affichée est définie comme fond de la div, avec l'indice de l'image.
  // Si le tableau contient plus d'une image, les flèches et l'indicateur de position/nombre total sont affichés.
  return (
    <div className="carousel">
      <img className='carousel_img' src={imageSlider[currentIndex]} alt=''/>
      {imageSlider.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_back"
            src={arrowBack}
            alt="Show previous img"
            onClick={nextImg}
          />
          <img
            className="carousel_arrow carousel_arrow_forward"
            src={arrowForward}
            alt="Show next img"
            onClick={previousImg}
          />

          {/* On affiche une indication de la position actuelle de l'image affichée. */}
          <p className="slideCount">
            {currentIndex + 1}/{imageSlider.length}
          </p>
        </>
      )}
    </div>
  );
}
