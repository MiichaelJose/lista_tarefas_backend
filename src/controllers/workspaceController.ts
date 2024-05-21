import Workspace from "../models/workspace";
import WorkspaceService from "../services/workspaceService";

export const fetchWs = async (req:any, res:any) => {
    try {
        console.log(req);
        
        const workspaces = await new WorkspaceService().fetchWorkspace(req.workspaceID.id);
        
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