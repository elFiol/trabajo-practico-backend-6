import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editarRecetaAPI, obtenerRecetaAPI } from "../../../helper/queries";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { CrearProductoAPI } from "../../../helper/queries";

const FormularioReceta = ({ editar, titulo }) => {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
  const recetasValidado = async (receta) => {
    if (editar) {
      const respuesta = await editarRecetaAPI(receta, id)
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Se a modificado la receta",
          icon: "success",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
      } else {
        Swal.fire({
          title: "Se produjo un error al modificar la receta",
          icon: "error",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
          }
        })
      }
    }
    else{
      const respuesta = await CrearProductoAPI(receta);
      console.log(respuesta);
      if(respuesta.status === 201){
        Swal.fire({
          title: "Se a añadido el producto",
          icon: "success",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
      } else {
        Swal.fire({
          title: "Se produjo un error al añadir el producto",
          icon: "error",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        })
      }
    }
  }
  const { id } = useParams()

  useEffect(() => {
    if (editar) {
      cargarDatos()
    }
  }, [])
  const cargarDatos = async () => {
    try {
      const respuesta = await obtenerRecetaAPI(id)
      if (respuesta.status === 200) {
        const recetaEncontrado = await respuesta.json();
        setValue("titulo", recetaEncontrado.titulo)
        setValue("imagen", recetaEncontrado.imagen)
        setValue("instrucciones", recetaEncontrado.instrucciones)
        setValue("ingredientes", recetaEncontrado.ingredientes)
        setValue("descripcionBreve", recetaEncontrado.descripcionBreve)
        setValue("categoria", recetaEncontrado.categoria)
      }
    } catch (error) { console.log(error) }
  }
  return (
    <section className="mainSection">
      <Container>
        <h1 className="colorLabels display-2 mb-3">{titulo} de recetas</h1>
        <Form onSubmit={handleSubmit(recetasValidado)}>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">
              Nombre de la receta*
            </Form.Label>
            <Form.Control type="text" placeholder="Ej: Fideos con salsa" {...register("titulo", {
              required: "el titulo es obligatorio",
              minLength: {
                value: 2,
                message: "El titulo debe tener como minimo 2 caracteres"
              },
              maxLength: {
                value: 30,
                message: "el Titulo no puede tener mas de 30 caracteres"
              }
            })} />
            <Form.Text className="text-danger">
              {errors.titulo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">Tipo de cocina*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Italiana, Mexicana, Asiática, Mediterránea, etc."
              {
              ...register("categoria", {
                required: "el tipo de cocina es obligatorio",
                minLength: {
                  value: 3,
                  message: "la categoria debe tener como minimo 3 caracteres"
                },
                maxLength: {
                  value: 20,
                  message: "la cagoria solo puede tener hasta 20 caracteres"
                }
              })
              }
            />
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">Ingrediente*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Espacio para ingresar los ingredientes, separados por comas o en líneas separadas"
              {
              ...register("ingredientes", {
                required: "los ingredientes son obligatorios",
                minLength: {
                  value: 5,
                  message: "las ingredientes deben tener como minimo 5 caracteres"
                },
                maxLength: {
                  value: 80,
                  message: "los ingredientes solo pueden tener como maximo 80 caracteres"
                }
              })
              }
            />
            <Form.Text className="text-danger">
              {errors.ingredientes?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="colorLabels">Cargar imagen*</Form.Label>
            <Form.Control type="text" placeholder="Ej: www.lugar.com/imagenes/comida.png"
              {...register("imagen", {
                required: "la imagen es obligatoria",
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                  message: "Por favor, ingresa una URL de imagen válida"
                }
              })} />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">Instrucciones* </Form.Label>
            <Form.Control as="textarea" placeholder="agregue aqui su contenido de instrucciones" rows={3}
              {...register("instrucciones", {
                required: "las instrucciones son obligatorias",
                minLength: {
                  value: 30,
                  message: "las instrucciones deben tener como minimo 30 caracteres"
                },
                maxLength: {
                  value: 100,
                  message: "las instrucciones solo pueden tener como maximo 100 caracteres"
                }
              })} />
            <Form.Text className="text-danger">
              {errors.instrucciones?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">Descripcion Breve* </Form.Label>
            <Form.Control as="textarea" placeholder="agregue aqui una breve descripcion" rows={3}
              {...register("descripcionBreve", {
                required: "la descripcion es obligatoria",
                minLength: {
                  value: 10,
                  message: "las descripcion deben tener como minimo 10 caracteres"
                },
                maxLength: {
                  value: 60,
                  message: "las descripcion solo pueden tener como maximo 60 caracteres"
                }
              })} />
            <Form.Text className="text-danger">
              {errors.descripcionBreve?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="warning" className="mb-3" type="submit">Guardar</Button>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioReceta;
