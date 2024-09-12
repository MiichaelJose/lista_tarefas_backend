import { Router } from "express";
import { bodyValidateData } from "../middlewares/zodValidation";
import ZodSchema from "../libs/zodSchemas";
import TaskController from "../controllers/taskController";

const taskController = new TaskController();

const TaskRoutes = Router()

TaskRoutes.get("/:id", taskController.fetchOneTask);
TaskRoutes.get("/display/:id", taskController.fetchOneTaskWithWorkspace);
TaskRoutes.get("/all", taskController.fetchTasks);
TaskRoutes.delete("/:id", taskController.deleteTask);
TaskRoutes.put("/:id", bodyValidateData(ZodSchema.taskUpdateRegistrationSchema), taskController.changeTask);
TaskRoutes.post("/",bodyValidateData(ZodSchema.taskCreateRegistrationSchema),taskController.createTask);

export default TaskRoutes