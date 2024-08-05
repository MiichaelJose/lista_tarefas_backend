import DisplaySchema from "../schemas/display.ts";
import Journey from "../schemas/journeys.ts";

class DisplayRepository {
    public async fetchOneDisplay(id: any) {
        return await DisplaySchema.findById(id);
    }

    public async fetchAllDisplays() {
        return await DisplaySchema.find().populate([
            { path: "journeys", select: ["name"] },  
            { path: "tagId", select: ["name"] }
        ]).exec();
    }

    public async createDisplay(display: any) {
        try {
            const existingDisplaysCount = await DisplaySchema.countDocuments({ workspaceId: display.workspaceId });
            
            if (existingDisplaysCount >= 3) {
                return { success: false, message: 'Maximum number of displays (3) for this workspace reached.' };
            }

            const journeysData = display.journeys;
            const journeys = await Journey.insertMany(journeysData);
    
            const otag = new DisplaySchema({
                ...display,
                journeys: journeys.map(journey => journey._id) // Usando os ObjectId dos Journeys salvos
            });
    
            return await otag.save();
        } catch (error) {
            return error;
        }
    }

    // public async updateDisplay(id: any, body: any) {
    //     return await DisplaySchema.findOneAndUpdate(
    //         { _id: id },
    //         {
    //             type: body.name,
    //             image: body.image,
    //         },
    //         { new: true }
    //     );
    // }

    public async deleteDisplay(id: any) {
        return await DisplaySchema.deleteOne({ _id: id });
    }
}

export default DisplayRepository;
