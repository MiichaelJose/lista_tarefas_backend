import { ApiError } from "../libs/apiError.ts";
import dayjs from "../libs/dayjs.ts";
import TaskRepository from "../repositorys/taskRepository.ts";

class TaskService {
    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    public async fetchOneTask(id: any) {
        const task = await this.taskRepository.fetchOneTask(id);

        if (!task) {
            throw new ApiError(404, 'Task not found', 'Não foi possível encontrar esta task', { id: id });
        }

        return task;
    }

    public async fetchOneTaskWithDisplay(id: any) {
        return await this.taskRepository.fetchOneTaskWithDisplay(id);
    }

    public async fetchAllTasks() {
        return await this.taskRepository.fetchAllTasks();
    }

    public async createTask(body: any) {
        const dateNow = dayjs(new Date()).utc().local().format();
        const dateInitial = dayjs(body.initial_at).utc().local().format();

        if(dateInitial >= dateNow) {
            console.log(dateNow);
            console.log(dateInitial);
            
            return await this.taskRepository.createTask(body);
        }

        return { status: 'ERROR', mensagem: 'A data inicial deve ser maior que a data atual.' };
    }

    public async updateTask(id: any, body: any) {
        return await this.taskRepository.updateTask(id, body);
    }

    public async deleteTask(id: any) {
        return await this.taskRepository.deleteTask(id);
    }
}

export default TaskService;
