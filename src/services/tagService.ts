import TagRepository from '../repositorys/tagRepository.ts';
class TagService {
    private tagRepository: TagRepository;

    constructor() {
        this.tagRepository = new TagRepository();
    }

    public async fetchAllTags() {
        return await this.tagRepository.fetchAllTags();
    }

    public async createTag(tag: any) {
        return await this.tagRepository.createTag(tag);
    }
}

export default TagService;
