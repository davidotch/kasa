import './banner.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();


// le hook useEffect de React définit une variable d'état "aboutPage" à "true" si l'URL actuelle est "/about".
// La variable d'état "aboutPage" est utilisée pour afficher un message différent sur la bannière en fonction de la page actuelle.   
// Si la page n'est pas "/about", le message par défaut "Chez vous, partout et ailleurs" sera affiché. 
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true);
		};
		// eslint-disable-next-line
	}, []);

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>};
		</section>
	);
};
