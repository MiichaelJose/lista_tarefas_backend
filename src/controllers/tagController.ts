import { Request, Response } from 'express';
import TagService from '../services/tagService';

class TagController {
    //private tagService: TagService = new TagService();

    public async fetchOneTag(req: Request, res: Response) {
        try {
            const tag = await new TagService().fetchOneTag(req.params.id);

            res.status(200).json(tag);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    }

    public async fetchTags(req: Request, res: Response) {
        try {
            const tags = await new TagService().fetchAllTags();

            res.status(200).json(tags);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    };

    public async createTag(req: Request, res: Response) {
        try {
            const body = req.body;

            const tag = await new TagService().createTag(body);
            res.status(200).json(tag);
        } catch (error) {
            res.status(404).json({ error: ' Internal Server Error. ' });
        }
    }

    public async changeTag(req: Request, res: Response) {
        try {
            const tag = await new TagService().updateTag(
                req.params.id,
                req.body
            );
            res.status(200).json(tag);
        } catch (error) {
            res.status(404).json({ error: ' Internal Server Error. ' });
        }
    }

    public async deleteTag(req: Request, res: Response) {
        try {
            const tag = await new TagService().deleteTag(req.params.id);
            res.status(200).json(tag);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    }
}

export default TagController;