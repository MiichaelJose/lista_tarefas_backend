import Task from "../models/task.ts";

class TaskService {
    async fetchOneTask(id: number) {
        return await Task.findById(id);
    }

    async fetchOneTaskWithWorkspace(id: number) {
        return await Task.findById(id).populate("workspaceId");
    }

    async fetchAllTasks() {
        return await Task.find();
    }

    async createTask(body: JSON) {
        const task = new Task(body);
        return await task.save();
    }

    async updateTask(id: number, body: any) {
        return await Task.findOneAndUpdate(
            { _id: id },
            { $set: body },
            { new: true, runValidators: true }
        );
    }

    async deleteTask(id: number) {
        return await Task.deleteOne({ _id: id });
    }
}

export default TaskService;
