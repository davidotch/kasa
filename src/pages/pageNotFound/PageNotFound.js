import './PageNotFound.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div className='PageNotFound'>
            <Header />
            <div className='PageNotFound_description'>
                <h1 className='PageNotFound_description_title'>404</h1>
                <p className='PageNotFound_description_text'>La page que vous recherchez n'existe pas.</p>
            </div>
                <Link className='PageNotFound_description_home' to='/'>
                    Retourner sur la page d'accueil
                </Link>
                <Footer/>
        </div>
    )
} 