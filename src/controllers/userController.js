import { pool } from "../DBConnection.js"

export const userLogin = async (req, res) => {
    res.render("login");
};

export const login = async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
};

export const tools = async (req, res) => {
        res.render('tools');
};