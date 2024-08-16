import mongoose from "mongoose";
import { ApiError } from "../libs/apiError";
import Workspace from "../schemas/workspace";

class WorkspaceRepository {
    public async fetchWorkspace(id: string) { 
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        const workspace = await Workspace.findById(id)

        return workspace;
    }

    public async fetchAllWorkspace() {
        return await Workspace.find();
    }

    public async createWorkspace(body: any) {
        const workspace = new Workspace(body);
        return await workspace.save();
    }

    public async updateWorkspace(id: string, body: any) {
        //alternativa { $set:boy }, { new: true, runValidators: true }
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }
        
        return await Workspace.findOneAndUpdate(
            { _id: id },
            {
                name: body.name,
            },
            { new: true }
        );
    }

    public async deleteWorkspace(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await Workspace.deleteOne({ _id: id });
    }
}

export default WorkspaceRepository;
