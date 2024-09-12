import { Router } from "express";
import { bodyValidateData, reqValidateData } from "../middlewares/zodValidation";
import ZodSchema from "../libs/zodSchemas";
import DisplayController from "../controllers/displayController";

const displayController = new DisplayController();

const DisplayRoutes = Router()

DisplayRoutes.get("/:id", displayController.fetchOneDisplay);
DisplayRoutes.get("/workspaceId/:id", reqValidateData(ZodSchema.displayIdSchema), displayController.fetchWorkspaceIdDisplay);
DisplayRoutes.get("/all", displayController.fetchDisplays);
DisplayRoutes.post("/",bodyValidateData(ZodSchema.displayCreateRegistrationSchema),displayController.createDisplay);
DisplayRoutes.delete("/:id", displayController.deleteDisplay);

export default DisplayRoutes