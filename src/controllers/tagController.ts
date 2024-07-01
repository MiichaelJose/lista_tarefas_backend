import { Request, Response } from 'express';
import TagService from '../services/tagService';

class TagController {
    private tagService: TagService;

    constructor() {
        this.tagService = new TagService();
    }

    fetchTags = async (req: Request, res: Response) => {
        try {
            const tags = await this.tagService.fetchAllTags();

            res.status(200).json(tags);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    };

    public async createTag(req: Request, res: Response) {
        try {
            const body = req.body;

            const tag = await this.tagService.createTag(body);
            res.status(200).json(tag);
        } catch (error) {
            res.status(404).json({ error: ' Internal Server Error. ' });
        }
    }
}

export default TagController;
