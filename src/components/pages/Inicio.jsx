import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardRecetas from './recetas/CardRecetas';
import { leerRecetasAPI } from '../../helper/queries';

const Inicio = () => {
    const [hayElementos, setHayElementos] = useState(false)
    const [recetas, setRecetas] = useState([])
    useEffect(() => {
        const hacerSolicitud = async () => {
            const respuesta = await leerRecetasAPI()
            if (respuesta.length > 0) {
                setHayElementos(true)
                setRecetas(respuesta)
            }
        }
        hacerSolicitud()
    }, [])
    const mostrarComponente = hayElementos ? (recetas.map((receta, posicion) => <CardRecetas key={posicion} receta={receta}></CardRecetas>))
     : (<p className='text-light'>aqui no hay recetas disponible</p>)
    return (
        <section className='mainSection'>
            <div className='tituloInicio py-4'>
                <h2 className='text-center'>Recetas para la cocina</h2>
            </div>
            <Container className='my-3'>
                <h3 className='text-warning mb-3'>Recetas Disponibles</h3>
                <Row>
                    {mostrarComponente}
                </Row>
            </Container>
        </section>
    );
};

export default Inicio;