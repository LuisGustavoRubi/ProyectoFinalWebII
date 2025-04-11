import { integrantes } from "../../data/integrantes"
import { useEffect, useState } from "react"
export const AboutUs = () => {
    const [integrantesData,setIntegrantesData]=useState([])
    useEffect(()=>{
        setIntegrantesData(integrantes)
    },[])
    return(
        
        <section className="aboutUs">
            <h1>Sobre nosotros</h1>
            <p>Somos un equipo de desarrolladores apasionados, actualmente estudiantes, dedicados a aprender y crear soluciones digitales innovadoras. Combinamos nuestros conocimientos en programación, diseño y tecnología para construir proyectos funcionales, creativos y orientados a resolver problemas reales. Nos impulsa el deseo de mejorar constantemente y crecer profesionalmente mientras colaboramos en equipo.</p>
            <h2>Desarrolladores</h2>
            <div className="integrantes ">
                {integrantesData.map(integrante=>(
                    <div className="integrante" key={integrante.id}>
                        <h2>{integrante.nombre} {integrante.apellido}</h2>
                        
                        <img src={integrante.imagen} alt={integrante.imagen} className="integranteImagen"/>
                    </div>

                ))}
            </div>
        </section>
    )

}