import { Router } from "express";
import { userLogin } from "../controllers/loginFormController.js";
import { login } from "../controllers/loginUserController.js";

const router = Router();

router.get('/', userLogin);
router.post('/login', login);

export default router;
