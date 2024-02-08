import bcrypt from 'bcryptjs';

export const hashPassword = async (userPassword) => {

    return new Promise((resolve, reject) => {
        try {
        const saltRounds = 11;
        bcrypt.genSalt(saltRounds)
            .then((salt) => bcrypt.hash(userPassword, salt))
            .then((hashedPass) => resolve(hashedPass))
            .catch((err) => reject(`Error en la encriptación: ${err.message}`));
        } catch (err) {
            reject(`Error al generar el salt: ${err.message}`);
        }
    });
};
