export const type = async (req, res) => {
  try {
      res.render('type');
  } catch {
      res.status(500).render('</ error del servidor >');
  }
};
