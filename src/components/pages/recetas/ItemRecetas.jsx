import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarRecetaAPI } from "../../../helper/queries";

const ItemRecetas = ({receta}) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.titulo}</td>
      <td>{receta.categoria}</td>
      <td>
        <img src={receta.imagen} alt={receta.titulo} className="img-fluid w-100"/>
      </td>
      <td>
        <Button variant="danger" type="button" onClick={()=>borrarRecetaAPI(receta.id)}>
          <i className="bi bi-trash"></i>
        </Button>
        <Link className="btn btn-warning" to={"/administrador/editarRecetas/" + receta.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
      </td>
    </tr>
  );
};

export default ItemRecetas;
