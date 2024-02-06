import { Router } from "express";
import { userRedirect } from "../controllers/userRedirectController.js";
import { formLight} from "../controllers/formLightController.js"

const router = Router();

router.get('/', userRedirect);


export default router;
