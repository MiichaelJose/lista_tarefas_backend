import { Request, Response } from "express";
import TaskService from "../services/taskService";

class TaskController {
    public async fetchTasks(req: Request, res: Response) {
        try {
            const tasks = await new TaskService().fetchAllTasks();

            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async fetchOneTaskWithWorkspace(req: Request, res: Response) {
        try {
            const task = await new TaskService().fetchOneTaskWithWorkspace(
                req.params.id
            );

            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async fetchOneTask(req: Request, res: Response) {
        console.log("oi");

        try {
            const task = await new TaskService().fetchOneTask(req.params.id);

            res.status(200).json(task);
        } catch (error) {
            console.log(error);

            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async createTask(req: Request, res: Response) {
        const body = req.body;
        try {
            const task = await new TaskService().createTask(body);

            //new NotificationService().createNotification({status:'pendente', people_notify: body.people_task, task_notify: body._id});

            res.status(200).json(task);
        } catch (error) {
            console.log(error);

            res.status(404).json({ error: " Internal Server Error. " });
        }
    }

    public async changeTask(req: Request, res: Response) {
        try {
            const task = await new TaskService().updateTask(
                req.params.id,
                req.body.name
            );
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async deleteTask(req: Request, res: Response) {
        try {
            const savedTask = await new TaskService().deleteTask(req.params.id);
            res.status(200).json(savedTask);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }
}

export default TaskController;
