import { integrantes } from "../../data/integrantes"
import { useEffect, useState } from "react"
export const Contact = () =>{
    const [integrantesData,setIntegrantesData]=useState([])
    useEffect(()=>{
        setIntegrantesData(integrantes)
    },[])
    return(
        <section className="contact">
            <h1>Contactanos</h1>
            <p>Si tienes alguna pregunta o consulta, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</p>
            <div className="integrantes">
                {integrantesData.map(integrante=>(
                    <div className="integrante" key={integrante.id}>
                        <h2>{integrante.nombre} {integrante.apellido}</h2>
                        
                        <p>{integrante.numero}</p>
                        <p>{integrante.correo}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}