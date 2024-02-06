export const userRedirect = async (req, res) => {
  const path = req.query.path;
  console.log(`esta es la ruta a la cual se debe redirigir al usuario ${path}`);
  try {
      res.render(path);
  } catch (err) {
      res.status(500).json( { message: "error al intentar redireccionar la ruta del cliente"} );
  }
};
