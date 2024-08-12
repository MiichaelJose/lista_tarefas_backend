import { NextFunction, Request, Response } from "express";
import TagService from "../services/tagService";

class TagController {
    //private tagService: TagService = new TagService();

    public async fetchOneTag(req: Request, res: Response, next: NextFunction) {
        try {
            const tag = await new TagService().fetchOneTag(req.params.id);

            res.status(200).json(tag);
        } catch (error) {
            next(error)
        }
    }

    public async fetchTags(req: Request, res: Response, next: NextFunction) {
        try {
            const tags = await new TagService().fetchAllTags();

            res.status(200).json(tags);
        } catch (error) {
            next(error)
        }
    }

    public async createTag(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const tag = await new TagService().createTag(body);
            res.status(200).json(tag);
        } catch (error) {
            next(error)
        }
    }

    public async changeTag(req: Request, res: Response, next: NextFunction) {
        try {
            const tag = await new TagService().updateTag(
                req.params.id,
                req.body
            );
            res.status(200).json(tag);
        } catch (error) {
            next(error)
        }
    }

    public async deleteTag(req: Request, res: Response, next: NextFunction) {
        try {
            const tag = await new TagService().deleteTag(req.params.id);
            res.status(200).json(tag);
        } catch (error) {
            next(error)
        }
    }
}

export default TagController;
