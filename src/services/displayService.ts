import { ApiError } from "../libs/apiError.ts";
import DisplayRepository from "../repositorys/displayRepository.ts";

class DisplayService {
    private displayRepository: DisplayRepository;

    constructor() {
        this.displayRepository = new DisplayRepository();
    }

    public async fetchOneDisplay(id: any) {
        const display = await this.displayRepository.fetchOneDisplay(id);

        if (!display) {
            throw new ApiError(404, 'Display not found', 'Não foi possível encontrar esse display', { id: id });
        }

        return display;
    }

    public async fetchAllDisplays() {
        return await this.displayRepository.fetchAllDisplays();
    }

    public async createDisplay(tag: any) {
        return await this.displayRepository.createDisplay(tag);
    }

    public async updateDisplay(id: any, body: any) {
        return await this.displayRepository.updateDisplay(id, body);
    }

    public async deleteDisplay(id: any) {
        return await this.displayRepository.deleteDisplay(id);
    }
}

export default DisplayService;
