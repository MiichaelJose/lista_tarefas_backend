import mongoose from "mongoose";
import Task from "../schemas/task.ts";
import { ApiError } from "../libs/apiError.ts";

class TaskRepository {
    public async fetch(id: string) {
        return await Task.findById(id);
    }

    public async fetchAll() {
        return await Task.find();
    }

    public async create(body: any) {
        const task = new Task(body);
        return await task.save();
    }

    public async update(id: string, body: any) {
        return await Task.findOneAndUpdate(
            { _id: id },
            { $set: body },
            { new: true, runValidators: true }
        );
    }

    public async delete(id: string) {
        return await Task.findOneAndDelete({ _id: id });
    }

    public async fetchTaskAndWorkspaceById(id: string) {
        const task = Task.findById(id)
            .populate({ path: "displayId", select: ["-_id", "-__v"] })
            .populate({ path: "tagId", select: ["name", "txt_color_hex"] })
            .exec();
            
        return await task;
    }
}

export default TaskRepository;
