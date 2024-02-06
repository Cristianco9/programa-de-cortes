export const order = async (req, res) => {
  try {
      res.render('order');
  } catch {
      res.status(500).render('</ error del servidor >');
  }
};
