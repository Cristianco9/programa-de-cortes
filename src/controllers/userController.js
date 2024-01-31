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
            return res.render('loginWrongUser');
        }

        const userExist = rows[0];
        console.log(userExist);

        const validPassword = await bcrypt.compare(password, userExist.user_password);

        if (validPassword) {
            return res.render('tools');
        } else {
            return res.render('loginWrongPass');
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
            const [orders] = await pool.query("SELECT `order_id` FROM `orders` WHERE user_owner_email = ?", [currentUser.user_email]);
            
            let orderExist = false;
            for (const order of orders) {
                if (order.order_id === orderNumber) {
                    orderExist = true;
                    break;
                }
            }

            if (orderExist) {
                return res.render('orderActions', {orderNumber: orderNumber} );
            } else {
                const createOrder = await pool.query("INSERT INTO `orders` (`user_owner_email`, `order_id`, `date_creation`) VALUES (?, ?, NOW())", [currentUser.user_email, orderNumber]);
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

export const formLight = async (req, res) => {
    
        // temporal
    const user_owner_email = "admin@gmail.com";
    
    try {
        const [currentOrder] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
        res.render('formLight', { orderID: currentOrder });
    } catch (err) {
        console.log("error al traer la ultima ordern de la base de datos", err)
        return res.status(500).json({ error: 'Hubo un error interno en el servidor' });
    }
};

export const formHeavy = async (req, res) => {

        // temporal
        const user_owner_email = "admin@gmail.com";
    
        try {
            const [currentOrder] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
            res.render('formHeavy', { orderID: currentOrder });
        } catch (err) {
            console.log("error al traer la ultima ordern de la base de datos", err)
            return res.status(500).json({ error: 'Hubo un error interno en el servidor' });
        } 
};

export const createFormHeavy = async (req, res) => {

    // temporal
    const user_owner_email = "admin@gmail.com";
    const order_owner_id = 369;
    const anjeoHeavy = {
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
        const insertAnjeoHeavy = await pool.query("INSERT INTO `anjeos_heavy` (`order_owner_id`, `date_creation` `anjeo_color`, `profile_type`, `opening`, `place`, `width`, `height`, `head`, `adaptador`, `top_profile`, `installation`, `divisorHigh`, `type_handle`, `open_direction`, `notes`) VALUES (?, NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [order_owner_id, anjeoHeavy.color, anjeoHeavy.perfil, anjeoHeavy.apertura, anjeoHeavy.lugar, anjeoHeavy.ancho, anjeoHeavy.altura, anjeoHeavy.cabezal, anjeoHeavy.adaptador, anjeoHeavy.perfilSuperior, anjeoHeavy.instalacion, anjeoHeavy.alturaDivisor, anjeoHeavy.manija, anjeoHeavy.lado,anjeoHeavy.notas]);
        return res.render('orderActions');
    } catch (err) {
        console.log("error al guardar el anjeo pesado en la base de datos", err);
        return res.status(500).json({ error: 'Hubo un error interno en el servidor' });
    }
};

export const createFormLight = async (req, res) => {

    // temporal
    const user_owner_email = "admin@gmail.com";
    const order_owner_id = 369;
    const anjeoLight = {
        color: req.body.color,
        perfil: req.body.perfil,
        apertura: req.body.apertura,
        lugar: req.body.lugar,
        ancho: req.body.ancho,
        altura: req.body.altura,
        guias: req.body.guias,
        instalacion: req.body.instalacion,
        alturaDivisor: req.body.alturaDivisor,
        angulo: req.body.angulo,
        notas: req.body.notas
    };

    try {
        const insertAnjeoLight = await pool.query("INSERT INTO `anjeos_light` (`order_owner_id`, `date_creation`, `anjeo_color`, `profile_type`, `opening`, `place`, `width`, `height`, `guide`, `installation`, `divisorHigh`, `angle`, `notes`) VALUES (?, NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [order_owner_id, anjeoLight.color, anjeoLight.perfil, anjeoLight.apertura, anjeoLight.lugar, anjeoLight.ancho, anjeoLight.altura, anjeoLight.guias, anjeoLight.instalacion, anjeoLight.alturaDivisor, anjeoLight.angulo, anjeoLight.notas]);
        return res.render('orderActions');
    } catch (err) {
        console.log("error al guardar el anjeo liviano en la base de datos", err)
        return res.status(500).json({ error: 'Hubo un error interno en el servidor' });
    }
};

export const orderActions = async (req, res) => {

        // temporal
        const user_owner_email = "admin@gmail.com";

        try {
            const [currentOrder] = await pool.query("SELECT `order_id` FROM `orders` WHERE `user_owner_email` = ? ORDER BY date_creation DESC LIMIT 1", [user_owner_email]);
            console.log(`the current order is: ${currentOrder}`);
            res.render('orderActions', { orderID: currentOrder });
        } catch (err) {
            console.log("error al traer la ultima ordern de la base de datos", err)
            return res.status(500).json({ error: 'Hubo un error interno en el servidor' });
        } 
};