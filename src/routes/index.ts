import { Router } from "express"

import { fetchTk, createTk } from "../controllers/taskController"
import { fetchWs, create, change, deleted } from "../controllers/workspaceController"


const router = Router()

router.get('/task/get', fetchTk)
router.post('/task/post', createTk)

router.get('/workspace/get/:id', fetchWs)
router.post('/workspace/post', create)
router.put('/workspace/put', change)
router.delete('/workspace/delete', deleted)

export default router;