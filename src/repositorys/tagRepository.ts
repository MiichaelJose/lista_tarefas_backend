import mongoose from "mongoose";
import TagSchema from "../schemas/tag.ts";
import { ApiError } from "../libs/apiError.ts";

class TagRepository {
    public async fetch(id: string) {
        return await TagSchema.findById(id);
    }

    public async fetchAll() {
        return await TagSchema.find();
    }

    public async create(body: any) {
        try {
            const otag = new TagSchema(body);
            return await otag.save();
        } catch (error) {
            return error;
        }
    }

    public async update(id: string, body: any) {
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

    public async delete(id: string) {
        return await TagSchema.findOneAndDelete({ _id: id });
    }
}

export default TagRepository;
