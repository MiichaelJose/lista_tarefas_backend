import { Request, Response } from 'express';
import WorkspaceService from '../services/workspaceService';

class WorkspaceController {
    public fetchOneWorkspace = async (req: Request, res: Response) => {
        try {
            const workspaces = await new WorkspaceService().fetchWorkspace(
                req.params.id
            );
            res.status(200).json(workspaces);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    };

    public fetchWorkspaces = async (req: Request, res: Response) => {
        try {
            const workspaces = await new WorkspaceService().fetchAllWorkspace();
            res.status(200).json(workspaces);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    };

    public createWorkspace = async (req: Request, res: Response) => {
        try {
            const workspace = await new WorkspaceService().createWorkspace(
                req.body
            );
            res.status(200).json(workspace);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    };

    public changeWorkspace = async (req: Request, res: Response) => {
        try {
            const workspace = await new WorkspaceService().updateWorkspace(
                req.params.id,
                req.body.name
            );
            res.status(200).json(workspace);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    };

    public deleteWorkspace = async (req: Request, res: Response) => {
        try {
            const savedWorkspace = await new WorkspaceService().deleteWorkspace(
                req.params.id
            );
            res.status(200).json(savedWorkspace);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    };
}

export default WorkspaceController;
