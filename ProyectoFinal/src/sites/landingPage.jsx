import { useEffect, useRef, useState } from "react"
import { productosJSON } from "../../data/productos"
import { Button } from "../components/button"

export const LandingPage = () => {
    const limiteProductos=6
    const [productos, setProductos]=useState([])
   
    useEffect(()=>{
        asignarProductos()
    },[])

    const asignarProductos=()=>{
        setProductos(productosJSON().slice(0,limiteProductos))
    }
    return(
        <div className="landingPage">
            <section className="heroPanel">
                <HeroPanel/>
            </section>

            <h2 className="productosTitulo">Productos destacados</h2>

            <section className="productos">
           
            <ProductosVendidos productos={productos}/>
            </section>
        </div>
    )

}
const HeroPanel = ({productos}) => {

    return (
      <div
  className="relative w-full h-[80vh] bg-cover bg-center"
  style={{ backgroundImage: `url('back.jpg')` }}
>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            ¡Bienvenido a Games Store!
          </h1>
          <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
            Explora una selección de títulos irresistibles, con ofertas exclusivas solo para los verdaderos gamers. ¡Juega más, paga menos!
          </p>
          <Button text={"Ver juegos"} href={"/"}/>
            
        </div>
      </div>
    );
  };

const ProductosVendidos = ({productos})=>{
    return(
        <>
            {productos.map(producto=>(
                <div className="producto" key={producto.id}>
                    <h2 className="productoTitulo">{producto.name}</h2>
                    <img src={producto.image} alt={producto.name} className="productoImagen"/>
                    <h3>${producto.price}</h3>
                    <p>Categoria: {producto.category}</p>
                </div>
            ))}
       </>
    )
}

