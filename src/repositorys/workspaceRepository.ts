import Workspace from "../schemas/workspace";

class WorkspaceRepository {
    public async fetchWorkspace(id: any) {
        return await Workspace.findById(id);
    }

    public async fetchAllWorkspace() {
        return await Workspace.find();
    }

    public async createWorkspace(body: any) {
        const workspace = new Workspace(body);
        return await workspace.save();
    }

    public async updateWorkspace(id: any, name: any) {
        //alternativa { $set:boy }, { new: true, runValidators: true }
        return await Workspace.findOneAndUpdate(
            { _id: id },
            { name: name },
            { new: true }
        );
    }

    public async deleteWorkspace(id: any) {
        return await Workspace.deleteOne({ _id: id });
    }
}

export default WorkspaceRepository;