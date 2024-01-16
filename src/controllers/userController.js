import { pool } from '../DBConnection.js';
import bcrypt from 'bcryptjs';
// import { hashPassword, verifyPassword } from '../passHash.js';

export const userLogin = async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        res.status(500).render('</ error del servidor >');
    }
};

export const login = async (req, res) => {  
    
    const userName = req.body.userName;
    const password = req.body.password;

    try {
        // const hashedPassword = await hashPassword(password);

        const [rows] = await pool.query("SELECT * FROM users WHERE user_name = ?", [userName]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'usuario incorrecto o inexistente' });
        }

        const userExist = rows[0];
        console.log(userExist);

        const validPassword = await bcrypt.compare(password, userExist.user_password);
        console.log(validPassword);

        if (validPassword) {
            return res.render('tools');
        } else {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error('Error al autenticar usuario:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const tools = async (req, res) => {
        res.render('tools');
};

export const order = async (req, res) => {
    res.render('order');
};