import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Footer from './components/common/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import Error404 from "./components/pages/Error404"
import Menu from "./components/common/Menu";
import FormularioReceta from "./components/pages/recetas/FormularioRecetas";
import Administrador from "./components/pages/Administrador"
import DetalleReceta from "./components/pages/recetas/DetalleReceta"

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/crearRecetas" element={<FormularioReceta editar={false} titulo="Crear"></FormularioReceta>}></Route>
        <Route exact path="/administrador/editarRecetas/:id" element={<FormularioReceta editar={true} titulo="Editar"></FormularioReceta>}></Route>
        <Route exact path="/detalleReceta/:id" element={<DetalleReceta></DetalleReceta>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
