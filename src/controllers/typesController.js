export const type = async (req, res) => {
  try {
      res.render('type');
  } catch {
      res.status(500).render('</ error del servidor >');
  }
};

export const typeCreated = async (req, res) => {
  try {
      res.render('typeCreated');
  } catch (err) {
      return res.status(500).json({ error: 'Hubo un error interno en el servidor, al cargar la vista de seleccione un tipo de anjeo creado' });

  }
}
