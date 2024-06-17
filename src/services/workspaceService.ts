import Workspace from "../models/workspace.ts"

class WorkspaceService {
    async fetchWorkspace(id:any) {
        return await Workspace.findById(id)
    }

    async fetchAllWorkspace() {
        return await Workspace.find()
    }
    
    async createWorkspace(body:any) {
        const workspace = new Workspace(body)
        return await workspace.save()
    }

    async updateWorkspace(id:any, name:any) {
                                                //alternativa { $set:boy }, { new: true, runValidators: true } 
        return await Workspace.findOneAndUpdate({ _id:id }, { name:name }, { new: true })
    }

    async deleteWorkspace(id:any) {
        return await Workspace.deleteOne({ _id:id })
    }
}

export default WorkspaceService;