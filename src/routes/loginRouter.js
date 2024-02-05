import { Router } from "express";
import { userLogin, login } from "../controllers/loginController.js";

const router = Router();

router.get('/', userLogin);
router.post('/login', login);

export default router;
