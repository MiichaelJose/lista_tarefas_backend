import mongoose from "mongoose";
import DisplaySchema from "../schemas/display.ts";
import Journey from "../schemas/journeys.ts";
import { ApiError } from "../libs/apiError.ts";

class DisplayRepository {
    public async fetchOneDisplay(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await DisplaySchema.findById(id);
    }

    public async fetchAllDisplays() {
        return await DisplaySchema.find().populate([
            { path: "journeys", select: ["name"] },  
            { path: "tagId", select: ["name"] }
        ]).exec();
    }

    public async createDisplay(body: any) {
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

    public async updateDisplay(id: string, body: any) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await DisplaySchema.findOneAndUpdate(
            { _id: id },
            {
                type: body.type,
            },
            { new: true }
        );
    }

    public async deleteDisplay(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await DisplaySchema.findOneAndDelete({ _id: id });
    }
}

export default DisplayRepository;
