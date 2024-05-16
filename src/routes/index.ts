import { Router } from "express"

import { fetch } from "../controllers/taskController"

const router = Router()

router.get('/', fetch)

export default router;