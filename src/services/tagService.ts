import TagRepository from "../repositorys/tagRepository.ts";

class TagService {
    private tagRepository: TagRepository;

    constructor() {
        this.tagRepository = new TagRepository();
    }

    public async fetchOneTag(id: any) {
        return await this.tagRepository.fetchOneTag(id);
    }

    public async fetchAllTags() {
        return await this.tagRepository.fetchAllTags();
    }

    public async createTag(tag: any) {
        return await this.tagRepository.createTag(tag);
    }

    public async updateTag(id: any, body: any) {
        return await this.tagRepository.updateTag(id, body);
    }

    public async deleteTag(id: any) {
        return await this.tagRepository.deleteTag(id);
    }
}

export default TagService;
