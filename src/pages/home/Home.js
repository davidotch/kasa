import './Home.scss';
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import bannerHome from '../../assets/headerImg.png';

export default function Home() {
	return (
		
		<div className="Home">
			<Banner picture={bannerHome} text={'Chez vous, partout et ailleurs'} />
			<Gallery />
		</div>
	);
}