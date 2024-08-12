import { NextFunction, Request, Response } from "express";
import DisplayService from "../services/displayService";

class DisplayController {
    public async fetchOneDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const tag = await new DisplayService().fetchOneDisplay(req.params.id);

            res.status(200).json(tag);
        } catch (error) {
            next(error)
        }
    }

    public async fetchDisplays(req: Request, res: Response, next: NextFunction) {
        try {
            const tags = await new DisplayService().fetchAllDisplays();

            res.status(200).json(tags);
        } catch (error) {
            next(error)
        }
    }

    public async createDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const tag = await new DisplayService().createDisplay(body);
            res.status(200).json(tag);
        } catch (error) {
            next(error)
        }
    }

    public async changeDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const tag = await new DisplayService().updateDisplay(
                req.params.id,
                req.body
            );
            res.status(200).json(tag);
        } catch (error) {
            next(error)
        }
    }

    public async deleteDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const tag = await new DisplayService().deleteDisplay(req.params.id);
            res.status(200).json(tag);
        } catch (error) {
            next(error)
        }
    }
}

export default DisplayController;
