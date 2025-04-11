
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './sites/landingPage';
import { AboutUs } from './sites/aboutUs';
import { Header } from './components/header';
import { Contact } from './sites/contact';
import { Catalogo } from './sites/catalogo';
import { ProductoDetalle } from './sites/ProductoDetalle';
import Reseñas from './sites/Reseñas';
import Testimonios from './sites/Testimonios';
import CartPage from './sites/carrito';
import FooterLocation from './sites/footerlocation';
import Galery from './sites/Galery';
import Afiliados from './sites/Afiliados';

export const App = () => {
  return (
    <>
      <Router basename="/ProyectoFinalWebII">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:id" element={<ProductoDetalle />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/FooterLocation" element={<FooterLocation />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/Reseñas" element={<Reseñas />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/afiliados" element={<Afiliados />} />
        </Routes>
      </Router>
    </>
  );
};
