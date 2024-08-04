import display from "../schemas/display";
import DisplaySchema from "../schemas/display";

class DisplayRepository {
    public async fetchOneDisplay(id: any) {
        return await DisplaySchema.findById(id);
    }

    public async fetchAllDisplays() {
        return await DisplaySchema.find();
    }

    public async createDisplay(display: any) {
        try {
            const otag = new DisplaySchema(display);
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
