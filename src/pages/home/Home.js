import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import "../style/error-message.css";
import { Banner } from "../components/Banner";

export default function Home() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCtrl = new AbortController();

    const fetchData = async () => {
      await fetch("/db.json", { signal: abortCtrl.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("Sorry an error occured ...");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.name !== "AbortError") {
            console.error(error.message);
            setError(
              `An error occured : ${error.message}, please try again later`
            );
            setData(null);
            setIsLoading(false);
          }
        });
    };
    fetchData();
    return () => abortCtrl.abort();
  }, []);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <div className="home">
        <Banner />
        <ul className="container">
          {isLoading && <h1 className="loading">Loading ...</h1>}
          {!isLoading &&
            data &&
            data.map(({ id, cover, description, title }) => (
              <li className="card" key={id}>
                <Link to={`/flat-detail/${id}`}>
                  <img src={cover} alt={description} loading="lazy" />
                  <p>{title}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
