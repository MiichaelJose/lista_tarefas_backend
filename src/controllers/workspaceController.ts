import Workspace from "../models/workspace";

export const fetchWs = async (req:any, res:any) => {
    try {
        const workspaces = await Workspace.find();
        
        res.status(200).json(workspaces);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 

export const create = async (req:any, res:any) => {
    try {
        const workspace = new Workspace(req.body);

        const savedWorkspace = await workspace.save()
        
        res.status(200).json(savedWorkspace);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 

export const change = async (req:any, res:any) => {
    try {
        const workspace = new Workspace(req.body);

        const savedWorkspace = await workspace.save()
        
        res.status(200).json(savedWorkspace);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 

export const deleted = async (req:any, res:any) => {
    try {
        const workspace = new Workspace(req.body);

        const savedWorkspace = await workspace.save()
        
        res.status(200).json(savedWorkspace);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 