import { Router } from "express";
import { bodyValidateData, reqBodyValidateData, reqValidateData } from "../middlewares/zodValidation";
import WorkspaceController from "../controllers/workspaceController";
import ZodSchema from "../libs/zodSchemas";

const workspaceController = new WorkspaceController();

const WorkspaceRoutes = Router()

WorkspaceRoutes.get("/:id", workspaceController.fetchOneWorkspace);
WorkspaceRoutes.get("/userId/:userId", reqValidateData(ZodSchema.workspaceIdSchema), workspaceController.fetchUserIdWorkspaces);
WorkspaceRoutes.get("/all", workspaceController.fetchWorkspaces);
WorkspaceRoutes.delete("/:id", workspaceController.deleteWorkspace);
WorkspaceRoutes.post("/",bodyValidateData(ZodSchema.workspaceCreateRegistrationSchema),workspaceController.createWorkspace);
WorkspaceRoutes.put("/:id",reqBodyValidateData(ZodSchema.workspaceIdSchema, ZodSchema.workspaceUpdateRegistrationSchema),workspaceController.changeWorkspace);

export default WorkspaceRoutes