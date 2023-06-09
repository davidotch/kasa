import './PageNotFound.scss'
import { Link } from 'react-router-dom'

// La fonction PageNotFound renvoie un élément contenant un texte d'erreur et un lien qui renvoie vers la page d'acceuil.
export default function PageNotFound() {
    return (
        <div className='PageNotFound'>
            <div className='PageNotFound_description'>
                <h1 className='PageNotFound_description_title'>404</h1>
                <p className='PageNotFound_description_text'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
                <Link className='PageNotFound_description_home' to='/'>
                    Retourner sur la page d'accueil
                </Link>
        </div>
    )
} 