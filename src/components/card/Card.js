import { Link } from 'react-router-dom';
import './Card.scss';


// La fonction 'card' prend trois paramètres, id, title et cover, qui correspondent tous à des informations sur un logement.
// La fonction retourne un élément lien vers la page /accomodation/${id}, qui est une page dédiée à un logement spécifique.

export default function Card({id, title, cover}) {
    return (
        <Link to={`/accomodation/${id}`}
        className="card_accomodation">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
};