import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Accomodation from './pages/accomodation/Accomodation';
import About from './pages/about/About';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
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

