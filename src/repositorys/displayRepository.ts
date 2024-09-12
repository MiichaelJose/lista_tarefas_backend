import DisplaySchema from "../schemas/display.ts";
import Journey from "../schemas/journeys.ts";

class DisplayRepository {
    public async fetch(id: string) {
        return await DisplaySchema.findById(id);
    }

    public async fetchAll() {
        return await DisplaySchema.find().populate([
            { path: "journeys", select: ["name"] },  
            { path: "tagId", select: ["name"] }
        ]).exec();
    }

    public async create(body: any) {
        try {
            const existingDisplaysCount = await DisplaySchema.countDocuments({ workspaceId: body.workspaceId });
            
            if (existingDisplaysCount >= 3) {
                return { success: false, message: 'Maximum number of displays (3) for this workspace reached.' };
            }

            const journeysData = body.journeys;
            const journeys = await Journey.insertMany(journeysData);
    
            const otag = new DisplaySchema({
                ...body,
                journeys: journeys.map(journey => journey._id) // Usando os ObjectId dos Journeys salvos
            });
    
            return await otag.save();
        } catch (error) {
            return error;
        }
    }

    public async update(id: string, body: any) {
        return await DisplaySchema.findOneAndUpdate(
            { _id: id },
            {
                type: body.type,
            },
            { new: true }
        );
    }

    public async delete(id: string) {
        return await DisplaySchema.findOneAndDelete({ _id: id });
    }

    public async fetchWorkspaceIdDisplay(id: string) { 
        return await DisplaySchema.find({ workspaceId: id}).exec();
    }
}

export default DisplayRepository;
