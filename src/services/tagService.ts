import Tag from '../schemas/tag.ts';

interface Tag {
    name: string;
    image: string;
    txt_color_hex: string;
    bgd_color_hex: string;
}

class TagService {
    async fetchAllTags() {
        return await Tag.find();
    }

    async createTag(body: Tag) {
        const tag = new Tag(body);
        return await tag.save();
    }
}

export default TagService;
