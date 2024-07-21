import { Router } from 'express';
import { validateData } from '../middlewares/zodValidation'
import { verifyProxyHeader } from '../middlewares/verifyHeaders';

import TaskController from '../controllers/taskController';
import TagController from '../controllers/tagController';
import WorkspaceController from '../controllers/workspaceController';
import { workspaceRegistrationSchema } from '../libs/zodSchemas';

const router = Router();

const taskController = new TaskController();
const tagController = new TagController();
const workspaceController = new WorkspaceController();

router.get('/one/:id', taskController.fetchOneTask);
router.get('/one-with-workspace/:id', taskController.fetchOneTaskWithWorkspace);
router.get('/all', taskController.fetchTasks);
router.post('/create', taskController.createTask);
router.put('/put/:id', taskController.changeTask);
router.delete('/delete/:id', taskController.deleteTask);

router.post('/tag/create', tagController.createTag);
router.get('/tag/all', tagController.fetchTags);

router.get('/workspace/one/:id', validateData(workspaceRegistrationSchema), workspaceController.fetchOneWorkspace);
router.get('/workspace/all/', workspaceController.fetchWorkspaces);
router.post('/workspace', workspaceController.createWorkspace);
router.put('/workspace/put/:id', workspaceController.changeWorkspace);
router.delete('/workspace/:id', workspaceController.deleteWorkspace);

router.use(verifyProxyHeader);

export default router;