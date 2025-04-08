import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './sites/landingPage'
import { AboutUs } from './sites/aboutUs'
import { Header } from './components/header'
import { Contact } from './sites/contact'
import { Catalogo } from './sites/catalogo';
import { ProductoDetalle } from "./sites/ProductoDetalle";
export const App = () => {
  return (
    <>
    
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:id" element={<ProductoDetalle />} />
      </Routes>
    </Router>
    </>
  )
}
