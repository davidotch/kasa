import './Home.scss';
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import bannerHome from '../../assets/headerImg.png';

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