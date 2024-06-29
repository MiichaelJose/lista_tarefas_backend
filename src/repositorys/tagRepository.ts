import Tag from '../schemas/tag.ts';

class TagRepository {
    public async fetchAllTags() {
        return await Tag.find();
    }

    public async createTag(body: any) {
        const tag = new Tag(body);
        return await tag.save();
    }
}

export default TagRepository;
