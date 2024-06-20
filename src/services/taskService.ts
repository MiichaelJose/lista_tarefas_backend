import Task from '../models/task.ts';

interface Task {
    status: string;
    title: string;
    description: string;
    workspaceId: string;
    tagId: string;
    initial_at: Date;
    ended_at: Date;
}

class TaskService {
    async fetchOneTask(id: any) {
        return await Task.findById(id);
    }

    async fetchOneTaskWithWorkspace(id: any) {
        const task = Task.findById(id)
            .populate({ path: 'workspaceId', select: ['-_id', '-__v'] })
            .populate({ path: 'tagId', select: ['name', 'txt_color_hex'] })
            .exec();

        task.then((resp) => {
            console.log(resp);
        });

        return await task;
    }

    async fetchAllTasks() {
        return await Task.find();
    }

    async createTask(body: Task) {
        const task = new Task(body);
        return await task.save();
    }

    async updateTask(id: any, body: Task) {
        return await Task.findOneAndUpdate(
            { _id: id },
            { $set: body },
            { new: true, runValidators: true }
        );
    }

    async deleteTask(id: any) {
        return await Task.deleteOne({ _id: id });
    }
}

export default TaskService;
