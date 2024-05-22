import WorkspaceService from "../services/workspaceService";

export const fetchOneWorkspace = async (req: any, res: any) => {
    try {
        const workspaces = await new WorkspaceService().fetchWorkspace(req.params.id);
        res.status(200).json(workspaces);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 

export const fetchWorkspaces = async (req: any, res: any) => {
    try {
        const workspaces = await new WorkspaceService().fetchAllWorkspace();
        res.status(200).json(workspaces);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 

export const createWorkspace = async (req: any, res: any) => {
    try {
        const workspace = await new WorkspaceService().createWorkspace(req.body);
        res.status(200).json(workspace);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 

export const changeWorkspace = async (req: any, res: any) => {
    try {
        const workspace = await new WorkspaceService().updateWorkspace(req.params.id, req.body.name );
        res.status(200).json(workspace);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 

export const deleteWorkspace = async (req: any, res: any) => {
    try {
        const savedWorkspace = await new WorkspaceService().deleteWorkspace(req.params.id)
        res.status(200).json(savedWorkspace);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
} 