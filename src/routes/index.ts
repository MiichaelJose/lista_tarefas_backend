import { Router } from "express";
import { validateData } from "../middlewares/zodValidation";
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
    workspaceUpdateRegistrationSchema
} from "../libs/zodSchemas";

import morganLog from "../middlewares/morganLog";
import verifyHeaderProxy from "../middlewares/proxyVerify";

const router = Router();

const taskController = new TaskController();
const tagController = new TagController();
const workspaceController = new WorkspaceController();
const displayController = new DisplayController();

router.use([morganLog]);
//router.use(verifyHeaderProxy);

router.get("/one/:id", taskController.fetchOneTask);
router.get("/one-with-workspace/:id", taskController.fetchOneTaskWithWorkspace);
router.get("/all", taskController.fetchTasks);
router.delete("/delete/:id", taskController.deleteTask);
router.put(
    "/put/:id",
    validateData(taskUpdateRegistrationSchema),
    taskController.changeTask
);
router.post(
    "/create",
    validateData(taskCreateRegistrationSchema),
    taskController.createTask
);

router.get("/tag/one/:id", tagController.fetchOneTag);
router.get("/tag/all", tagController.fetchTags);
router.delete("/tag/:id", tagController.deleteTag);
router.post(
    "/tag/create",
    validateData(tagCreateRegistrationSchema),
    tagController.createTag
);
router.put(
    "/tag/put/:id",
    validateData(tagUpdateRegistrationSchema),
    tagController.changeTag
);

router.get("/workspace/one/:id", workspaceController.fetchOneWorkspace);
router.get("/workspace/all/", workspaceController.fetchWorkspaces);
router.delete("/workspace/:id", workspaceController.deleteWorkspace);
router.post(
    "/workspace",
    validateData(workspaceCreateRegistrationSchema),
    workspaceController.createWorkspace
);
router.put(
    "/workspace/put/:id",
    validateData(workspaceUpdateRegistrationSchema),
    workspaceController.changeWorkspace
);

router.get("/display/one/:id", displayController.fetchOneDisplay);
router.get("/display/all", displayController.fetchDisplays);
router.post(
    "/display",
    validateData(displayCreateRegistrationSchema),
    displayController.createDisplay
);
router.delete("/display/:id", displayController.deleteDisplay);

export default router;
