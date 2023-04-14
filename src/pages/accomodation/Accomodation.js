// import './Accomodation.scss'
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
  const equipments = Object.keys(currentAccommodation?.equipments || []);

  return (
    <>
      <Header />
      <Carousel imageSlider={imageSlider} />
      <main className="accommodation">
        <div className="accommodation-content">
          <div className="accommodation-content-infos">
            <h1>{currentAccommodation.title}</h1>
            <p>{currentAccommodation.location}</p>
            <div>
              {currentAccommodation.tags?.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="accommodation-content-host">
            <div>
              <div className="accommodation-content-host-name">
                <span>{name?.[0]}</span>
                <span>{name?.[1]}</span>
              </div>
              <img
                src={currentAccommodation.host?.picture}
                alt="host of this accommodation"
              />
            </div>
            <div className="accommodation-content-host-stars">
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
        <div className="accommodation-collapse">
          <div className="accommodation-collapse-item">
            <Collapse title={"Description"} content={description} />
          </div>
          <div className="accommodation-collapse-item">
            <Collapse title={"Équipements"} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
