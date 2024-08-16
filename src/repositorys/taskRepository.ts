import mongoose from "mongoose";
import Task from "../schemas/task.ts";
import { ApiError } from "../libs/apiError.ts";

class TaskRepository {
    public async fetchOneTask(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await Task.findById(id);
    }

    public async fetchOneTaskWithDisplay(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

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
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await Task.findOneAndUpdate(
            { _id: id },
            { $set: body },
            { new: true, runValidators: true }
        );
    }

    public async deleteTask(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await Task.deleteOne({ _id: id });
    }
}

export default TaskRepository;
