import { Router} from "express";

import { verifiy, singin } from "../controllers/authenticationController";

const router = Router()

router.post("/singin", singin)
router.get("/verify", verifiy)

export default router