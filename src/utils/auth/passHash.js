import bcrypt from 'bcryptjs';

export const hashPassword = async (userPassword) => {

    return new Promise((resolve, reject) => {
        try {
        const saltRounds = 11;
        bcrypt.genSalt(saltRounds)
            .then((salt) => bcrypt.hash(userPassword, salt))
            .then((hashedPass) => resolve(hashedPass))
            .catch((error) => reject(`Error en la encriptación: ${error.message}`));
        } catch (error) {
            reject(`Error al generar el salt: ${error.message}`);
        }
    });
};