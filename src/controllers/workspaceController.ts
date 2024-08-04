import { Request, Response } from "express";
import WorkspaceService from "../services/workspaceService";

class WorkspaceController {
    public async fetchOneWorkspace(req: Request, res: Response) {
        try {
            const workspaces = await new WorkspaceService().fetchWorkspace(
                req.params.id
            );
            res.status(200).json(workspaces);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async fetchWorkspaces(req: Request, res: Response) {
        try {
            const workspaces = await new WorkspaceService().fetchAllWorkspace();
            res.status(200).json(workspaces);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async createWorkspace(req: Request, res: Response) {
        try {
            const workspace = await new WorkspaceService().createWorkspace(
                req.body
            );
            res.status(200).json(workspace);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async changeWorkspace(req: Request, res: Response) {
        try {
            const workspace = await new WorkspaceService().updateWorkspace(
                req.params.id,
                req.body.name
            );
            res.status(200).json(workspace);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async deleteWorkspace(req: Request, res: Response) {
        try {
            const savedWorkspace = await new WorkspaceService().deleteWorkspace(
                req.params.id
            );
            res.status(200).json(savedWorkspace);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }
}

export default WorkspaceController;

// import { z } from "zod";
// import { defaultEndpointsFactory } from "express-zod-api";

// function teste() {
//     const hand = async ({ input: { name }, options , logger }: any) => {
//         console.log(options);
//         return { greetings: `Hello, ${name || "World"}. Happy coding!` };
//     }

//     const json: any = {
//         method: "post", // or methods: ["get", "post", ...]
//         input: z.object({
//             id: z.string(),
//             name: z.string().optional(),
//             teste: z.string()
//         }),
//         output: z.object({
//             greetings: z.string(),
//         }),
//         handler: hand
//     }

//     return defaultEndpointsFactory.build(json);
// }

// export default teste;
