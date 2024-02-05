export const tools = async (req, res) => {
  try {
      res.render('tools');
  } catch {
      res.status(500).render('</ error del servidor >');
  }
};
