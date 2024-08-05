import DisplayRepository from "../repositorys/displayRepository.ts";

class DisplayService {
    private displayRepository: DisplayRepository;

    constructor() {
        this.displayRepository = new DisplayRepository();
    }

    public async fetchOneTag(id: any) {
        return await this.displayRepository.fetchOneDisplay(id);
    }

    public async fetchAllTags() {
        return await this.displayRepository.fetchAllDisplays();
    }

    public async createTag(tag: any) {
        return await this.displayRepository.createDisplay(tag);
    }

    // public async updateTag(id: any, body: any) {
    //     return await this.displayRepository.updateTag(id, body);
    // }

    public async deleteTag(id: any) {
        return await this.displayRepository.deleteDisplay(id);
    }
}

export default DisplayService;
