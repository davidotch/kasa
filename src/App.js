import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Accomodation from './pages/accomodation/Accomodation';
import About from './pages/about/About';
import PageNotFound from './pages/pageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

