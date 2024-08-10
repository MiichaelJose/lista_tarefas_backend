import { Request, Response } from "express";
import DisplayService from "../services/displayService";

class DisplayController {
    public async fetchOneDisplay(req: Request, res: Response) {
        try {
            const tag = await new DisplayService().fetchOneTag(req.params.id);

            res.status(200).json(tag);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async fetchDisplays(req: Request, res: Response) {
        try {
            const tags = await new DisplayService().fetchAllTags();

            res.status(200).json(tags);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }

    public async createDisplay(req: Request, res: Response) {
        try {
            const body = req.body;

            const tag = await new DisplayService().createTag(body);
            res.status(200).json(tag);
        } catch (error) {
            res.status(404).json({ error: " Internal Server Error. " });
        }
    }

    public async changeDisplay(req: Request, res: Response) {
        try {
            const tag = await new DisplayService().updateDisplay(
                req.params.id,
                req.body
            );
            res.status(200).json(tag);
        } catch (error) {
            res.status(404).json({ error: " Internal Server Error. " });
        }
    }

    public async deleteDisplay(req: Request, res: Response) {
        try {
            const tag = await new DisplayService().deleteTag(req.params.id);
            res.status(200).json(tag);
        } catch (error) {
            res.status(500).json({ error: " Internal Server Error. " });
        }
    }
}

export default DisplayController;
