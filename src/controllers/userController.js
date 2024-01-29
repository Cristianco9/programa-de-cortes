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

        if (validPassword) {
            return res.render('tools');
        } else {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const tools = async (req, res) => {
        res.render('tools');
};

export const order = async (req, res) => {
    res.render('order');
};

export const orderIDValidation = async (req, res) => {
    
    //temporal
    const userName = "admin";
    const orderInput = req.body.orderNumber;
    const orderNumber = Math.floor(orderInput);

    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE user_name = ?", [userName]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'usuario incorrecto o inexistente' });
        }

        const currentUser = rows[0];

        try {
            const [orders] = await pool.query("SELECT * FROM `orders` WHERE user_owner_email = ?", [currentUser.user_email]);

            let orderExist = false;
            for (const order of orders) {
                if (order.order_id === orderNumber) {
                    orderExist = true;
                    break;
                }
            }
            console.log(orderExist);
            if (orderExist) {
                return res.redirect('tools');
            } else {
                const createOrder = await pool.query("INSERT INTO `orders` (`user_owner_email`, `order_id`) VALUES (?, ?)", [currentUser.user_email, orderNumber]);
                console.log("orden guardada en la base datos");
                return res.render('type');
            };
        } catch (err) {
            console.log("error al momento de comparar sí la orden existe en la base de datos: ", err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    } catch (err) {
        console.error('Error al guardar el número de pedido:', err);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const type = async (req, res) => {
        res.render('type');
};