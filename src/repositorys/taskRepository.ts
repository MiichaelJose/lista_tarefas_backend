import mongoose from "mongoose";
import Task from "../schemas/task.ts";
import { ApiError } from "../libs/apiError.ts";

class TaskRepository {
    public async fetchOneTask(id: string) {
        return await Task.findById(id);
    }

    public async fetchOneTaskWithDisplay(id: string) {
        const task = Task.findById(id)
            .populate({ path: "displayId", select: ["-_id", "-__v"] })
            .populate({ path: "tagId", select: ["name", "txt_color_hex"] })
            .exec();
            
        return await task;
    }

    public async fetchAllTasks() {
        return await Task.find();
    }

    public async createTask(body: any) {
        const task = new Task(body);
        return await task.save();
    }

    public async updateTask(id: string, body: any) {
        return await Task.findOneAndUpdate(
            { _id: id },
            { $set: body },
            { new: true, runValidators: true }
        );
    }

    public async deleteTask(id: string) {
        return await Task.findOneAndDelete({ _id: id });
    }
}

export default TaskRepository;
