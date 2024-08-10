import TagSchema from "../schemas/tag.ts";

class TagRepository {
    public async fetchOneTag(id: any) {
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
            console.log(error);

            return error;
        }
    }

    public async updateTag(id: any, body: any) {
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

    public async deleteTag(id: any) {
        return await TagSchema.deleteOne({ _id: id });
    }
}

export default TagRepository;
