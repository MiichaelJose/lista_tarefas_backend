import { NextFunction, Request, Response } from "express";
import DisplayService from "../services/displayService";

class DisplayController {
    public async fetchOneDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const display = await new DisplayService().fetchOneDisplay(req.params.id);

            res.status(200).json(display);
        } catch (error) {
            next(error)
        }
    }

    public async fetchWorkspaceIdDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const displays = await new DisplayService().fetchWorkspaceIdDisplay(
                req.params.id
            );
            res.status(200).json(displays);
        } catch (error) {
            next(error)
        }
    }

    public async fetchDisplays(req: Request, res: Response, next: NextFunction) {
        try {
            const displays = await new DisplayService().fetchAllDisplays();

            res.status(200).json(displays);
        } catch (error) {
            next(error)
        }
    }

    public async createDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const display = await new DisplayService().createDisplay(body);
            res.status(200).json(display);
        } catch (error) {
            next(error)
        }
    }

    public async changeDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const display = await new DisplayService().updateDisplay(
                req.params.id,
                req.body
            );
            res.status(200).json(display);
        } catch (error) {
            next(error)
        }
    }

    public async deleteDisplay(req: Request, res: Response, next: NextFunction) {
        try {
            const display = await new DisplayService().deleteDisplay(req.params.id);
            res.status(200).json(display);
        } catch (error) {
            next(error)
        }
    }
}

export default DisplayController;
