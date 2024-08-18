import { Router } from "express";
import { reqValidateData, bodyValidateData, reqbodyValidateData } from "../middlewares/zodValidation";
import TaskController from "../controllers/taskController";
import TagController from "../controllers/tagController";
import WorkspaceController from "../controllers/workspaceController";
import DisplayController from "../controllers/displayController";

import {
    displayCreateRegistrationSchema,
    tagCreateRegistrationSchema,
    tagUpdateRegistrationSchema,
    taskCreateRegistrationSchema,
    taskUpdateRegistrationSchema,
    workspaceCreateRegistrationSchema,
    workspaceUpdateRegistrationSchema,
    workspaceIdSchema,
    tagIdSchema
} from "../libs/zodSchemas";

import morganLog from "../middlewares/morganLog";
import verifyHeaderProxy from "../middlewares/proxyVerify";
import { apiErrorValidation } from "../middlewares/apiErrorValidation";

const router = Router();

const taskController = new TaskController();
const tagController = new TagController();
const workspaceController = new WorkspaceController();
const displayController = new DisplayController();

//router.use(verifyHeaderProxy);

router.get("/task/one/:id", taskController.fetchOneTask);
router.get("/task/display/:id", taskController.fetchOneTaskWithWorkspace);
router.get("/task/all", taskController.fetchTasks);
router.delete("/task/delete/:id", taskController.deleteTask);
router.put("/task/put/:id", bodyValidateData(taskUpdateRegistrationSchema), taskController.changeTask);
router.post("/task/create",bodyValidateData(taskCreateRegistrationSchema),taskController.createTask);
router.get("/tag/one/:id", reqValidateData(tagIdSchema),tagController.fetchOneTag);
router.get("/tag/all", tagController.fetchTags);
router.delete("/tag/:id", tagController.deleteTag);
router.post("/tag/create", bodyValidateData(tagCreateRegistrationSchema),tagController.createTag);
router.put("/tag/put/:id",reqbodyValidateData(tagIdSchema, tagUpdateRegistrationSchema),tagController.changeTag);
router.get("/workspace/one/:id", workspaceController.fetchOneWorkspace);
router.get("/workspace/all/", workspaceController.fetchWorkspaces);
router.delete("/workspace/:id", workspaceController.deleteWorkspace);
router.post("/workspace",bodyValidateData(workspaceCreateRegistrationSchema),workspaceController.createWorkspace);
router.put("/workspace/put/:id",reqbodyValidateData(workspaceIdSchema, workspaceUpdateRegistrationSchema),workspaceController.changeWorkspace);
router.get("/display/one/:id", displayController.fetchOneDisplay);
router.get("/display/all", displayController.fetchDisplays);
router.post("/display/create",bodyValidateData(displayCreateRegistrationSchema),displayController.createDisplay);
router.delete("/display/:id", displayController.deleteDisplay);

router.use([morganLog, apiErrorValidation]);

export default router;
