import mongoose from "mongoose";
import TagSchema from "../schemas/tag.ts";
import { ApiError } from "../libs/apiError.ts";

class TagRepository {
    public async fetchOneTag(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await TagSchema.findById(id);
    }

    public async fetchAllTags() {
        return await TagSchema.find();
    }

    public async createTag(body: any) {
        try {
            const otag = new TagSchema(body);
            return await otag.save();
        } catch (error) {
            return error;
        }
    }

    public async updateTag(id: string, body: any) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await TagSchema.findOneAndUpdate(
            { _id: id },
            {
                name: body.name,
                image: body.image,
                txt_color_hex: body.txt_color_hex,
                bgd_color_hex: body.bgd_color_hex
            },
            { new: true }
        );
    }

    public async deleteTag(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(404, 'Id not valid', 'Não foi possível encontrar esta workspace', { id: id });
        }

        return await TagSchema.findOneAndDelete({ _id: id });
    }
}

export default TagRepository;
