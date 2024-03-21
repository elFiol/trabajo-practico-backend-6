import { Link } from "react-router-dom";
import Error from "../../assets/klipartz.com.png"

const Error404 = () => {
    return (
        <section className="text-center text-light mainSection py-3">
            <img src={Error} alt="icono Error" className="w-25"/>
            <h2 className="text-warning">No se encontro la Pagina que buscabas</h2>
            <h3 className="my-3">Volver al inicio</h3>
            <Link to="/" className="btn btn-warning mb-3">Volver</Link>
        </section>
    );
};

export default Error404;