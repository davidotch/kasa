import about from '../../data/about.json';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import bannerAbout from '../../assets/gustavoAlvesUnsplash1.png';
import './About.scss';

export default function About() {
    return (
        <>
            <Banner
                class="banner banner--about"
                image={bannerAbout}
                alt="Une forêt"
            />

            <div className='about_collapse'>
                <Collapse title="Fiabilité" description={about.fiabilite} />
                <Collapse title="Respect" description={about.respect} />
                <Collapse title="Service" description={about.service} />
                <Collapse title="Sécurité" description={about.securite} />
            </div>
        </>
    )
} 