import { NextFunction, Request, Response } from "express";
import WorkspaceService from "../services/workspaceService";

class WorkspaceController {
    public async fetchOneWorkspace(req: Request, res: Response, next: NextFunction) {
        try {
            const workspaces = await new WorkspaceService().fetchWorkspace(
                req.params.id
            );
            res.status(200).json(workspaces);
        } catch (error) {
            next(error)
        }
    }

    public async fetchUserIdWorkspaces(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.params
        try {
            const workspaces = await new WorkspaceService()
                .fetchUserIdWorkspaces(userId);

            res.status(200).json(workspaces);
        } catch (error) {
            next(error)
        }
    }

    public async fetchWorkspaces(req: Request, res: Response, next: NextFunction) {
        try {
            const workspaces = await new WorkspaceService().fetchAllWorkspace();
            res.status(200).json(workspaces);
        } catch (error) {
            next(error)
        }
    }

    public async createWorkspace(req: Request, res: Response, next: NextFunction) {
        try {
            const workspace = await new WorkspaceService().createWorkspace(
                req.body
            );
            res.status(200).json(workspace);
        } catch (error) {
            next(error)
        }
    }

    public async changeWorkspace(req: Request, res: Response, next: NextFunction) {
        try {
            const workspace = await new WorkspaceService().updateWorkspace(
                req.params.id,
                req.body
            );
            res.status(200).json(workspace);
        } catch (error) {
            next(error)
        }
    }

    public async deleteWorkspace(req: Request, res: Response, next: NextFunction) {
        try {
            const savedWorkspace = await new WorkspaceService().deleteWorkspace(
                req.params.id
            );
            res.status(200).json(savedWorkspace);
        } catch (error) {
            next(error)
        }
    }
}

export default WorkspaceController;