export const typeCreated = async (req, res) => {
  try {
      res.render('typeCreated');
  } catch (err) {
      return res.status(500).json({ error: 'Hubo un error interno en el servidor, al cargar la vista de seleccione un tipo de anjeo creado' });

  }
}
