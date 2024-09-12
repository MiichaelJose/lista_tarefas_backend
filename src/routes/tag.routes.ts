import { Router } from "express";
import { bodyValidateData, reqBodyValidateData, reqValidateData } from "../middlewares/zodValidation";
import ZodSchema from "../libs/zodSchemas";
import TagController from "../controllers/tagController";

const tagController = new TagController();

const TagRoutes = Router()

TagRoutes.get("/:id", reqValidateData(ZodSchema.tagIdSchema),tagController.fetchOneTag);
TagRoutes.get("/all", tagController.fetchTags);
TagRoutes.delete("/:id", tagController.deleteTag);
TagRoutes.post("/", bodyValidateData(ZodSchema.tagCreateRegistrationSchema),tagController.createTag);
TagRoutes.put("/:id",reqBodyValidateData(ZodSchema.tagIdSchema, ZodSchema.tagUpdateRegistrationSchema),tagController.changeTag);

export default TagRoutes