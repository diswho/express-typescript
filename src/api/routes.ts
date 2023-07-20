import { Request, Response, Router } from "express";
import TeamsRoutes from "./teams/teams.routes";
const router = Router();

router.use("/teams", TeamsRoutes);

export default router;
