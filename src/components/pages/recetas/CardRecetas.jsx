import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardRecetas = ({receta}) => {
    return (
        <Col md={4} lg={4} className="mb-3">
          <Card className="h-100 text-light bg-dark">
            <div>
              <img src={receta.imagen} alt={receta.titulo} className="card-img-top-nueva" />
            </div>
            <Card.Body>
            <Card.Title className="primary-font">{receta.titulo}</Card.Title>
            <Card.Text>
              Descripción: {receta.descripcionBreve} <br className="mb-2"/> 
            </Card.Text>
            </Card.Body>
            <Card.Footer className="text-end">
            <Link className='btn btn-warning me-2' to={"/detalleReceta/"+ receta.id}>Ver más</Link>
          </Card.Footer>
          </Card>
        </Col>
    );
};

export default CardRecetas;