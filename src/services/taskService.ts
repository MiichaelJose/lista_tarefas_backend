import TaskRepository from '../repositorys/taskRepository.ts';

class TaskService {
    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    public async fetchOneTask(id: any) {
        return await this.taskRepository.fetchOneTask(id);
    }

    public async fetchOneTaskWithWorkspace(id: any) {
        const task = new TaskRepository().fetchOneTaskWithWorkspace(id)
        return await task;
    }

    public async fetchAllTasks() {
        return await new TaskRepository().fetchAllTasks();
    }

    public async createTask(body: any) {
        return new TaskRepository().createTask(body);
    }

    public async updateTask(id: any, body: any) {
        return await new TaskRepository().updateTask(id, body);
    }

    public async deleteTask(id: any) {
        return await new TaskRepository().deleteTask(id);
    }
}

export default TaskService;
