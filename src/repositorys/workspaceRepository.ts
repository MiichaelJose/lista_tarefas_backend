import mongoose from "mongoose";
import { ApiError } from "../libs/apiError";
import Workspace from "../schemas/workspace";

class WorkspaceRepository {
    public async fetch(id: string) {
        console.log(id);
         
        const workspace = await Workspace.findById(id)

        return workspace;
    }

    public async fetchAll() {
        return await Workspace.find();
    }

    public async create(body: any) {
        const workspace = new Workspace(body);
        return await workspace.save();
    }

    public async update(id: string, body: any) {
        return await Workspace.findOneAndUpdate(
            { _id: id },
            {
                name: body.name,
            },
            { new: true }
        );
    }

    public async delete(id: string) {
        return await Workspace.findOneAndDelete({ _id: id });
    }

    public async fetchWorkspaceByUserId(id: string) { 
        return await Workspace.find({ userId: id}).exec();
    }
}

export default WorkspaceRepository;
