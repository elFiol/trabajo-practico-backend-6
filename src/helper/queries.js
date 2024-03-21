const URL_RECETAS = import.meta.env.VITE_API_RECETAS;

// GET TODO

export const leerRecetasAPI = async () => {
  try {
    const respuesta = await fetch(URL_RECETAS);
    const recetas = await respuesta.json();
    return recetas;
  } catch (error) {
    console.log(error);
  }
};

// GET SOLO

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_RECETAS + "/" + id);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
// PUT

export const editarRecetaAPI = async (recetaModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_RECETAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// POST

export const CrearProductoAPI = async (recetaNuevo) => {
  try {
    const respuesta = await fetch(URL_RECETAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// DELETE

export const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_RECETAS}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
