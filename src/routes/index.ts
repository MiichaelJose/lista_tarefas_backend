import { Router } from "express";

import { verifyProxyHeader } from "../middlewares/verifyHeaders";

import { fetchOneTask, fetchOneTaskWithWorkspace, fetchTasks, createTask, changeTask, deleteTask } from "../controllers/taskController";
import { fetchOneWorkspace, fetchWorkspaces, createWorkspace, changeWorkspace, deleteWorkspace } from "../controllers/workspaceController";

const router = Router();

router.get('/one/:id', fetchOneTask);
router.get('/one-with-workspace/:id', fetchOneTaskWithWorkspace);
router.get('/all',fetchTasks);
router.post('/create', createTask);
router.put('/put/:id', changeTask);
router.delete('/delete/:id', deleteTask);

router.get('/workspace/one/:id', fetchOneWorkspace);
router.get('/workspace/all/',fetchWorkspaces);
router.post('/workspace', createWorkspace);
router.put('/workspace/put/:id', changeWorkspace);
router.delete('/workspace/:id', deleteWorkspace);

router.use(verifyProxyHeader);

export default router;