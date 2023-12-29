import { pool } from "../DBConnection.js";

export const userLogin = async (req, res) => {
    res.render("login");
}