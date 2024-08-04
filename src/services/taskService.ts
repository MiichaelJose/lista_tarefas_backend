import TaskRepository from "../repositorys/taskRepository.ts";

class TaskService {
    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    public async fetchOneTask(id: any) {
        return await this.taskRepository.fetchOneTask(id);
    }

    public async fetchOneTaskWithWorkspace(id: any) {
        return await this.taskRepository.fetchOneTaskWithWorkspace(id);
    }

    public async fetchAllTasks() {
        return await this.taskRepository.fetchAllTasks();
    }

    public async createTask(body: any) {
        return await this.taskRepository.createTask(body);
    }

    public async updateTask(id: any, body: any) {
        return await this.taskRepository.updateTask(id, body);
    }

    public async deleteTask(id: any) {
        return await this.taskRepository.deleteTask(id);
    }
}

export default TaskService;
