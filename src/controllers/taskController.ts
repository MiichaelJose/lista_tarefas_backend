import Task from "../models/task";


export const fetch = async (req:any, res:any)=>{
    console.log("entrou");

    try {
        console.log("entrou");

        // Find all users in the database
        const tasks = await Task.find();
        // If no users are found, send a 404 error response
        
        // Send a success response with the fetched users data
        res.status(200).json(tasks);
    } catch (error) {
        console.log("entrou");

        // Handle any errors and send an internal server error response
        res.status(500).json({error : " Internal Server Error. "})
    }
}