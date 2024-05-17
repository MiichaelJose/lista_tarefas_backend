import Task from "../models/task";

export const fetchTk = async (req:any, res:any)=>{
    try {
        const tasks = await Task.find();
        
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

export const createTk = async (req:any, res:any)=>{
    const workspaceId = req.body.customerId

    try {

        const tasks = new Task(req.body);

        const savedTask = await tasks.save()
        
        res.status(200).json(savedTask);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}