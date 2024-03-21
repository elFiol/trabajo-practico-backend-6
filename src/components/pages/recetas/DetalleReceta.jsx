import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { obtenerRecetaAPI } from "../../../helper/queries";

const DetalleReceta = () => {
    const [receta, setReceta] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const hacerPeticion = async () => {
            try {
                const respuesta = await obtenerRecetaAPI(id)
                const recetaEncontrado = await respuesta.json();
                setReceta(recetaEncontrado)
            } catch (error) {
                console.log(error)
            }
        }
        hacerPeticion()
    })
    return (
        <Container className="w-100 mainSection my-4 detalle">
            <img src={receta.imagen} alt="cafe" className="w-100" />
            <div className="mx-3 mt-4 text-light">
                <h2 className="text-start">{receta.titulo}</h2>
                <p className="mt-5 mb-0 fs-5"><b className="text-warning">Categoria:</b> {receta.categoria}</p>
                <hr />
                <h3>Ingredientes:</h3>
                <p className="my-3 text-wrap px-3">{receta.ingredientes}</p>
                <hr />
                <h3>Instrucciones:</h3>
                <p className="my-3 text-wrap px-3 instrucciones">{receta.instrucciones}</p>
            </div>
        </Container>
    );
};

export default DetalleReceta;