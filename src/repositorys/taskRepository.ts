import Task from "../schemas/task.ts";

class TaskRepository {
    public async fetchOneTask(id: any) {
        return await Task.findById(id);
    }

    public async fetchOneTaskWithDisplay(id: any) {
        const task = Task.findById(id)
            .populate({ path: "displayId", select: ["-_id", "-__v"] })
            .populate({ path: "tagId", select: ["name", "txt_color_hex"] })
            .exec();

        task.then((resp) => {
            console.log(resp);
        });

        return await task;
    }

    public async fetchAllTasks() {
        return await Task.find();
    }

    public async createTask(body: any) {
        const task = new Task(body);
        return await task.save();
    }

    public async updateTask(id: any, body: any) {
        return await Task.findOneAndUpdate(
            { _id: id },
            { $set: body },
            { new: true, runValidators: true }
        );
    }

    public async deleteTask(id: any) {
        return await Task.deleteOne({ _id: id });
    }
}

export default TaskRepository;
