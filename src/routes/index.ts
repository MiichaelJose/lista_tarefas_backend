import { Router } from "express";
import MorganLog from "../middlewares/morganLog";
import ApiErrorValidation from "../middlewares/apiErrorValidation";
import VerifyHeaderProxy from "../middlewares/proxyVerify";
import WorkspaceRoutes from "./workspace.routes";
import TaskRoutes from "./task.routes";
import DisplayRoutes from "./display.routes";
import TagRoutes from "./tag.routes";

const router = Router();
//router.use(VerifyHeaderProxy);
router.use("/workspace", WorkspaceRoutes)
router.use("/display", DisplayRoutes)
router.use("/task", TaskRoutes)
router.use("/tag", TagRoutes)

router.use([MorganLog, ApiErrorValidation]);

export default router;
