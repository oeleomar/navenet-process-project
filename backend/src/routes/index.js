import { Router } from "express";
import { processRoute } from "./processRoute.js";
import { adminRoute } from "./adminRoute.js";

const router = Router();
router.use("/process", processRoute);
router.use("/admin", adminRoute);

export { router };
