import TaskService from "../services/taskService";

export const fetchTasks = async (req: any, res: any) => {
    try {
        const tasks = await new TaskService().fetchAllTasks();

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " });
    }
};

export const fetchOneTaskWithWorkspace = async (req: any, res: any) => {
    try {
        const task = await new TaskService().fetchOneTaskWithWorkspace(
            req.params.id
        );

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " });
    }
};

export const fetchOneTask = async (req: any, res: any) => {
    try {
        const task = await new TaskService().fetchOneTask(req.params.id);

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " });
    }
};

export const createTask = async (req: any, res: any) => {
    try {
        const task = await new TaskService().createTask(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ error: " Internal Server Error. " });
    }
};

export const changeTask = async (req: any, res: any) => {
    try {
        const task = await new TaskService().updateTask(
            req.params.id,
            req.body.name
        );
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " });
    }
};

export const deleteTask = async (req: any, res: any) => {
    try {
        const savedTask = await new TaskService().deleteTask(req.params.id);
        res.status(200).json(savedTask);
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " });
    }
};
