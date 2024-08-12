import { NextFunction, Request, Response } from "express";
import TaskService from "../services/taskService";

class TaskController {
    public async fetchTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const tasks = await new TaskService().fetchAllTasks();

            res.status(200).json(tasks);
        } catch (error) {
            next(error)
        }
    }

    public async fetchOneTaskWithWorkspace(req: Request, res: Response, next: NextFunction) {
        try {
            const task = await new TaskService().fetchOneTaskWithDisplay(
                req.params.id
            );

            res.status(200).json(task);
        } catch (error) {
            next(error)
        }
    }

    public async fetchOneTask(req: Request, res: Response, next: NextFunction) {
        console.log("oi");

        try {
            const task = await new TaskService().fetchOneTask(req.params.id);

            res.status(200).json(task);
        } catch (error) {
            next(error)
        }
    }

    public async createTask(req: Request, res: Response, next: NextFunction) {
        const body = req.body;
        try {
            const task = await new TaskService().createTask(body);

            //new NotificationService().createNotification({status:'pendente', people_notify: body.people_task, task_notify: body._id});

            res.status(200).json(task);
        } catch (error) {
            next(error)
        }
    }

    public async changeTask(req: Request, res: Response, next: NextFunction) {
        try {
            const task = await new TaskService().updateTask(
                req.params.id,
                req.body.name
            );
            res.status(200).json(task);
        } catch (error) {
            next(error)
        }
    }

    public async deleteTask(req: Request, res: Response, next: NextFunction) {
        try {
            const savedTask = await new TaskService().deleteTask(req.params.id);
            res.status(200).json(savedTask);
        } catch (error) {
            next(error)
        }
    }
}

export default TaskController;
