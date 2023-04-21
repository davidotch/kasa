import './Home.scss';
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import bannerHome from '../../assets/headerImg.png';

// La fonction Home retourne un élément JSX qui contient deux composants : Banner et Gallery. 
// Le composant Banner prend les propriétés class, image et alt pour créer une bannière avec un titre. 
// Le composant Gallery crée une galerie d'images.
export default function Home() {
	return (
		
		<>
			<Banner
                class="banner banner--home"
                image={bannerHome}
                alt="Un paysage côtier"
            >
                <h2>Chez vous, partout et ailleurs</h2>
            </Banner>

			<Gallery />
		</>
	);
}