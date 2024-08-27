import mongoose from "mongoose";
import { ApiError } from "../libs/apiError";
import Workspace from "../schemas/workspace";

class WorkspaceRepository {
    public async fetchWorkspace(id: string) { 
        const workspace = await Workspace.findById(id)

        return workspace;
    }

    public async fetchUserIdWorkspaces(id: string) { 
        return await Workspace.find({ userId: id}).exec();
    }

    public async fetchAllWorkspace() {
        return await Workspace.find();
    }

    public async createWorkspace(body: any) {
        const workspace = new Workspace(body);
        return await workspace.save();
    }

    public async updateWorkspace(id: string, body: any) {
        return await Workspace.findOneAndUpdate(
            { _id: id },
            {
                name: body.name,
            },
            { new: true }
        );
    }

    public async deleteWorkspace(id: string) {
        return await Workspace.findOneAndDelete({ _id: id });
    }
}

export default WorkspaceRepository;
