import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home';
import Accomodation from './pages/accomodation/Accomodation';
import About from './pages/about/About';
import PageNotFound from './pages/pageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/kasa/",
    element: <Home/>
  },
  {
    path: "/Accomodation/",
    element: <Accomodation/>
  },
  {
    path: "/About/",
    element: <About/>
  },
  {
    path: "*",
    element: <PageNotFound/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
