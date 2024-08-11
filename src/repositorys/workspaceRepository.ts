import Workspace from "../schemas/workspace";

class ApiError extends Error {
    statusCode: any;
    error: any;
    details: {};

    constructor(statusCode: any, error: any, message: string | undefined, details = {}) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.details = details;
    }
}

class WorkspaceRepository {
    public async fetchWorkspace(id: any) {

        return new ApiError(500, 'Internal Server Error', 'Não foi possível processar a solicitação. Tente novamente mais tarde.');
        //return await Workspace.findById(id);
    }

    public async fetchAllWorkspace() {
        return await Workspace.find();
    }

    public async createWorkspace(body: any) {
        const workspace = new Workspace(body);
        return await workspace.save();
    }

    public async updateWorkspace(id: any, body: any) {
        //alternativa { $set:boy }, { new: true, runValidators: true }
        return await Workspace.findOneAndUpdate(
            { _id: id },
            { name: body.name },
            { new: true }
        );
    }

    public async deleteWorkspace(id: any) {
        return await Workspace.deleteOne({ _id: id });
    }
}

export default WorkspaceRepository;
