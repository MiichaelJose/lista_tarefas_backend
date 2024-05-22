import Task from "../models/task.ts"

class TaskService {
    async fetchOneTask(id:any) {
        return await Task.findById(id)
    }

    async fetchAllTasks() {
        return await Task.find()
    }
    
    async createTask(body:any) {
        const task = new Task(body)
        return await task.save()
    }

    async updateTask(id:any, body:any) {
        return await Task.findOneAndUpdate({ _id:id }, { $set:body }, { new: true, runValidators: true })
    }

    async deleteTask(id:any) {
        return await Task.deleteOne({ _id:id })
    }
}

export default TaskService