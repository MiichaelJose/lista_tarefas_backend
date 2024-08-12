import { ApiError } from "../libs/apiError";
import WorkspaceRepository from "../repositorys/workspaceRepository";
import workspace from "../schemas/workspace";

class WorkspaceService {
    private workspaceRepository: WorkspaceRepository;

    constructor() {
        this.workspaceRepository = new WorkspaceRepository();
    }

    public async fetchWorkspace(id: any) {
        const workspace = await this.workspaceRepository.fetchWorkspace(id);

        if (!workspace) {
            throw new ApiError(404, 'Workspace not found', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return workspace;
    }

    public async fetchAllWorkspace() {
        return await this.workspaceRepository.fetchAllWorkspace();
    }

    public async createWorkspace(body: any) {
        return await this.workspaceRepository.createWorkspace(body);
    }

    public async updateWorkspace(id: any, body: any) {
        const workspace = await this.workspaceRepository.updateWorkspace(id, body);

        console.log(workspace);
        
        if (!workspace) {
            throw new ApiError(404, 'Workspace not found', 'Não foi possível encontrar esta workspace', { id: id });
        }
 
        return workspace;
    }

    public async deleteWorkspace(id: any) {
        return await this.workspaceRepository.deleteWorkspace(id);
    }
}

export default WorkspaceService;