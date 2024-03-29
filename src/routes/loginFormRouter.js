import { Router } from "express";
import { userLogin } from "../controllers/loginFormController.js";
import { login } from "../controllers/loginUserController.js";
import { logout } from "../controllers/logoutUserController.js";

const router = Router();

router.get('/', userLogin);

router.post('/login', login);

router.get(
  '/logout',
  logout
);

export default router;
