import Tag from '../models/tag;model.ts';
import TagRepository from '../repositorys/tagRepository.ts';
import { ITag } from '../types/tag.interface.ts';

class TagService {
    private tagRepository: TagRepository;

    constructor() {
        this.tagRepository = new TagRepository();
    }

    public async fetchAllTags() {
        return await this.tagRepository.fetchAllTags();
    }

    public async createTag(itag: ITag) {
        const tag = new Tag(
            itag.name,
            itag.image,
            itag.txt_color_hex,
            itag.bgd_color_hex
        );
        return await this.tagRepository.createTag(tag);
    }
}

export default TagService;
