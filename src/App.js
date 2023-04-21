import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Accomodation from './pages/accomodation/Accomodation';
import About from './pages/about/About';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

// La fonction 'App' retourne un élément qui est encapsulé dans 'BrowserRouter' pour gérer la navigation.
// 'Routes' renvoie vers les différents élément en fonction de l'URL. 
// La propriété 'element' contient l'élément react que l'itinéraire renvoie si le chemin d'accès correspond. 
// Le symbole '*' signifie que ce chemin d'accès est associé à toutes les autres URL qui ne correspondent pas. 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

