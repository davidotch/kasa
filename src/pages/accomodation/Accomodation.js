import './Accomodation.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Collapse from "../../components/collapse/Collapse";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";

export default function Accommodation() {
  const [currentAccommodation, setCurrentAccommodation] = useState({});
  const [imageSlider, setImageSlider] = useState([]);

  const { id: idAccommodation } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const accommodation = data.find((item) => item.id === idAccommodation);
        setCurrentAccommodation(accommodation);
        setImageSlider(accommodation.pictures);
      })
      .catch((error) => console.error(error));
  }, [idAccommodation]);

  const name = currentAccommodation.host?.name?.split(" ");
  const rating = currentAccommodation?.rating;
  const description = currentAccommodation?.description;
  const equipments = Object.values(currentAccommodation?.equipments || []);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
