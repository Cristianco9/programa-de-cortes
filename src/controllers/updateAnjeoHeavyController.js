import { pool } from '../DBConnection.js';

export const updateAnjeoHeavy = async (req, res) => {

  const anjeoHeavydToUpdate = req.params.id;
  const newAnjeoHeavy = {
      color: req.body.color,
      perfil: req.body.perfil,
      apertura: req.body.apertura,
      lugar: req.body.lugar,
      ancho: req.body.ancho,
      altura: req.body.altura,
      cabezal: req.body.cabezal,
      adaptador: req.body.adaptador,
      perfilSuperior: req.body.perfilSuperior,
      instalacion: req.body.instalacion,
      alturaDivisor: req.body.alturaDivisor,
      manija: req.body.manija,
      lado: req.body.lado,
      notas: req.body.notas
  };

  try {
      const updateAnjeoHeavy = await pool.query("UPDATE `anjeos_heavy` SET `date_creation` = NOW(), `anjeo_color` = ?, `profile_type` = ?, `opening` = ?, `place` = ?, `width` = ?, `height` = ?, `head` = ?, `adaptador` = ?, `top_profile` = ?, `installation` = ?, `divisorHigh` = ?, `type_handle` = ?, `open_direction` = ?, `notes` = ? WHERE `anjeo_heavy_id` = ?", [newAnjeoHeavy.color, newAnjeoHeavy.perfil, newAnjeoHeavy.apertura, newAnjeoHeavy.lugar, newAnjeoHeavy.ancho, newAnjeoHeavy.altura, newAnjeoHeavy.cabezal, newAnjeoHeavy.adaptador, newAnjeoHeavy.perfilSuperior, newAnjeoHeavy.instalacion,  newAnjeoHeavy.alturaDivisor, newAnjeoHeavy.manija, newAnjeoHeavy.lado, newAnjeoHeavy.notas, anjeoHeavydToUpdate]);
      return res.render('anjeoHeavyUpdatedSucessfully');

  } catch (err) {
      console.log("Error al actualizar el anjeo liviano en la base de datos", err);
      return res.status(500).json({ message: '</ error del servidor, al intentar actualizar el anjeo pesado' });
  }
};
