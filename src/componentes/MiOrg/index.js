import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    //Estado - hooks (Funcionalidades paratrabajar con reaact)
    //useState
    //como usar: useState()
     //const[nombreVariable],funcionActualiza  = useState(ValorInicial)
   console.log(props)
  //  const [mostrar, actualizarMostrar] = useState(true)
   // const manejarClic = () => {
    //    console.log("Monstrar / Ocular elemento", !mostrar)
      //  actualizarMostrar(!mostrar)
   // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>
}
export default MiOrg