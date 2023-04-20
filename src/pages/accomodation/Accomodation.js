import './Accomodation.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";

export default function Accommodation() {

  // On utilise useState pour stocker les données à partir du fichier data.json.
  const [currentAccommodation, setCurrentAccommodation] = useState({});
  const [imageSlider, setImageSlider] = useState([]);


  // On récupère l'ID à partir de l'URL.
  const { id: idAccommodation } = useParams();

  //  On utilise useEffect pour récupérer des données de data.json en utilisant la méthode fetch qui effectue une requête HTTP.
  useEffect(() => {

    // La fonction getData est une fonction asynchrone qui utilise await pour attendre la réponse de la requête avant de continuer.
    const getData = async () => {
        await fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const accommodation = data.find((item) => item.id === idAccommodation);
        setCurrentAccommodation(accommodation);
        setImageSlider(accommodation.pictures);
      })
      .catch((error) => console.error(error));
    }
    getData();
  }, [idAccommodation]);

  // On extrait les variables du state local pour name, rating, description et equipments.
  // On extrait le nom et l'hôte et on le transforme en tableau a l'aide de méthode .split().
  const name = currentAccommodation.host?.name?.split(" ");
  const rating = currentAccommodation?.rating;
  const description = currentAccommodation?.description;
  const equipments = Object.values(currentAccommodation?.equipments || []);

  return (
    <>
      <Carousel imageSlider={imageSlider} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{currentAccommodation.title}</h1>
            <p>{currentAccommodation.location}</p>
            <div>
              {currentAccommodation.tags?.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="accomodation_content_host">
            <div>
              <div className="accomodation_content_host_name">
                <span>{name?.[0]}</span>
                <span>{name?.[1]}</span>
              </div>
              <img
                src={currentAccommodation.host?.picture}
                alt="host of this accomodation"
              />
            </div>
            <div className="accomodation_content_host_stars">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index < rating ? redStar : greyStar}
                  alt="star"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={"Description"} description={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={"Équipements"} description={equipments} />
          </div>
        </div>
      </main>
    </>
  );
}
