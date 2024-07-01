import Tag from '../models/tag;model.ts';
import TagSchema from '../schemas/tag.ts';

class TagRepository {
    public async fetchAllTags() {
        return await TagSchema.find();
    }

    public async createTag(tag: Tag) {
        try {
            const otag = new TagSchema(tag);
            return await otag.save();
        } catch (error) {
            console.log(error);

            console.log(error);
        }
    }
}

export default TagRepository;
