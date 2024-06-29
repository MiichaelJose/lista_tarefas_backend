import TaskRepository from '../repositorys/taskRepository.ts';

class TaskService {
    async fetchOneTask(id: any) {
        return await new TaskRepository().fetchOneTask(id);
    }

    async fetchOneTaskWithWorkspace(id: any) {
        const task = new TaskRepository().fetchOneTaskWithWorkspace(id)
        return await task;
    }

    async fetchAllTasks() {
        return await new TaskRepository().fetchAllTasks();
    }

    async createTask(body: any) {
        return new TaskRepository().createTask(body);
    }

    async updateTask(id: any, body: any) {
        return await new TaskRepository().updateTask(id, body);
    }

    async deleteTask(id: any) {
        return await new TaskRepository().deleteTask(id);
    }
}

export default TaskService;
