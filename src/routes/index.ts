import { Router } from "express"

import { fetchOneTask, fetchOneTaskWithWorkspace, fetchTasks, createTask, changeTask, deleteTask } from "../controllers/taskController"
import { fetchOneWorkspace, fetchWorkspaces, createWorkspace, changeWorkspace, deleteWorkspace } from "../controllers/workspaceController"


const router = Router()

router.get('/task/one/:id', fetchOneTask)
router.get('/task/one-with-workspace/:id', fetchOneTaskWithWorkspace)
router.get('/task/all/',fetchTasks)
router.post('/task', createTask)
router.put('/task/put/:id', changeTask)
router.delete('/task/:id', deleteTask)

router.get('/workspace/one/:id', fetchOneWorkspace)
router.get('/workspace/all/',fetchWorkspaces)
router.post('/workspace', createWorkspace)
router.put('/workspace/put/:id', changeWorkspace)
router.delete('/workspace/:id', deleteWorkspace)

export default router;