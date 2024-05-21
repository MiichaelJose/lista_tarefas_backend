import Workspace from "../models/workspace.ts"

class WorkspaceService {
    async fetchWorkspace(id:number) {
        return await Workspace.findById(id)
    }
    
    async createWorkspace(body:any) {
        const workspace = new Workspace(body)
        await workspace.save()
        return workspace
    }

    async updateWorkspace(body:any) {
        const workspace = await Workspace.findOneAndUpdate({
            _id: body.taks
        })
        return
    }

    async deleteWorkspace(id:number) {
        return Workspace.deleteOne({ id:id })
    }
}

export default WorkspaceService