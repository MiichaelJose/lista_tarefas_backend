import { Request, Response } from 'express';
import TagService from '../services/tagService';

class TagController {
    public fetchTags = async (req: Request, res: Response) => {
        try {
            const tags = await new TagService().fetchAllTags();

            res.status(200).json(tags);
        } catch (error) {
            res.status(500).json({ error: ' Internal Server Error. ' });
        }
    };

    public createTag = async (req: Request, res: Response) => {
        try {
            const tag = await new TagService().createTag(req.body);
            res.status(200).json(tag);
        } catch (error) {
            res.status(404).json({ error: ' Internal Server Error. ' });
        }
    };
}

export default TagController;
