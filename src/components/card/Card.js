import { Link } from 'react-router-dom'
import './Card.scss';

export default function Card({id, title, cover}) {
    return (
        <Link to={`/accomodation/${id}`}
        className="card_accomodation">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
}