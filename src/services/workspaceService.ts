import { ApiError } from "../libs/apiError";
import WorkspaceRepository from "../repositorys/workspaceRepository";

class WorkspaceService {
    private workspaceRepository: WorkspaceRepository;

    constructor() {
        this.workspaceRepository = new WorkspaceRepository();
    }

    public async fetchWorkspace(id: string) {
        const workspace = await this.workspaceRepository.fetch(id);

        if (!workspace) {
            throw new ApiError(404, 'Workspace not found', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return workspace;
    }

    public async fetchWorkspaceByUserId(id: string) {
        const workspace = await this.workspaceRepository.fetchWorkspaceByUserId(id);

        if (!workspace.length) {
            throw new ApiError(404, 'Workspace not found', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return workspace;
    }

    public async fetchAllWorkspace() {
        const workspaces = await this.workspaceRepository.fetchAll();
        
        if(!workspaces.length) {
            throw new ApiError(404, 'Workspaces not found', 'Não foi possível encontrar Workspaces');
        }

        return workspaces;
    }

    public async createWorkspace(body: any) {
        return await this.workspaceRepository.create(body);
    }

    public async updateWorkspace(id: string, body: any) {
        const workspace = await this.workspaceRepository.update(id, body);

        if (!workspace) {
            throw new ApiError(404, 'Workspace not found', 'Não foi possível encontrar esta workspace', { id: id });
        }
 
        return workspace;
    }

    public async deleteWorkspace(id: string) {
        const workspace = await this.workspaceRepository.delete(id);

        if (!workspace) {
            throw new ApiError(404, 'Workspace not found', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return workspace;
    }
}

export default WorkspaceService;