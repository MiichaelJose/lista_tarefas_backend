import WorkspaceRepository from "../repositorys/workspaceRepository";

class WorkspaceService {
    private workspaceRepository: WorkspaceRepository;

    constructor() {
        this.workspaceRepository = new WorkspaceRepository();
    }

    public async fetchWorkspace(id: any) {
        return await this.workspaceRepository.fetchWorkspace(id);
    }

    public async fetchAllWorkspace() {
        return await this.workspaceRepository.fetchAllWorkspace();
    }

    public async createWorkspace(body: any) {
        return await this.workspaceRepository.createWorkspace(body);
    }

    public async updateWorkspace(id: any, name: any) {
        return await this.workspaceRepository.updateWorkspace(id, name);
    }

    public async deleteWorkspace(id: any) {
        return await this.workspaceRepository.deleteWorkspace(id);
    }
}

export default WorkspaceService;
