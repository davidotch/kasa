import about from '../../data/about.json';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';

export default function About() {
    return (
        <div>
            <Header />
            <Banner />
            <Collapse title="Fiabilité" description={about.fiabilite} />
            <Collapse title="Respect" description={about.respect} />
            <Collapse title="Service" description={about.service} />
            <Collapse title="Sécurité" description={about.securite} />
            <Footer />
        </div>
    )
} 