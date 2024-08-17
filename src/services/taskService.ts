import { ApiError } from "../libs/apiError.ts";
import dayjs from "../libs/dayjs.ts";
import TaskRepository from "../repositorys/taskRepository.ts";

class TaskService {
    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    public async fetchOneTask(id: string) {
        const task = await this.taskRepository.fetchOneTask(id);

        if (!task) {
            throw new ApiError(404, 'Task not found', 'Não foi possível encontrar esta task', { id: id });
        }

        return task;
    }

    public async fetchOneTaskWithDisplay(id: string) {
        const task = await this.taskRepository.fetchOneTaskWithDisplay(id);

        if (!task) {
            throw new ApiError(404, 'Task with display not found', 'Não foi possível encontrar esta task', { id: id });
        }

        return task;
    }

    public async fetchAllTasks() {
        const tasks = await this.taskRepository.fetchAllTasks();

        if(!tasks.length) {
            throw new ApiError(404, 'Tasks not found', 'Não foi possível encontrar Tasks');
        }

        return tasks;
    }

    public async createTask(body: any) {
        const dateNow = dayjs(new Date()).utc().local().format();
        const dateInitial = dayjs(body.initial_at).utc().local().format();

        if(dateInitial < dateNow) {
            throw new ApiError(404, 'Data not found', 'A data inicial deve ser maior que a data atual.', { datainitial: dateInitial });
        }

        return await this.taskRepository.createTask(body);
    }

    public async updateTask(id: string, body: any) {
        const task = await this.taskRepository.updateTask(id, body);

        if (!task) {
            throw new ApiError(404, 'Task not found', 'Não foi possível encontrar esta task', { id: id });
        }
        return task;
    }

    public async deleteTask(id: string) {
        const task = await this.taskRepository.deleteTask(id);

        if (!task) {
            throw new ApiError(404, 'Task not found', 'Não foi possível encontrar esta task', { id: id });
        }

        return task;
    }
}

export default TaskService;
