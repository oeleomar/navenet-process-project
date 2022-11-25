import { Router } from "express";
import { CreateAdminUserController } from "../controller/AdminUser/CreateAdminUserController/CreateAdminUserController.js";
import { LoginAdminUserController } from "../controller/AdminUser/LoginAdminUserController/LoginAdminUserController.js";

const adminRoute = Router();

const createAdminUserController = new CreateAdminUserController();
const loginAdminUserController = new LoginAdminUserController();

adminRoute.post("/auth/register", async (req, res) => {
  createAdminUserController.handle(req, res);
});

adminRoute.post("/auth/login", async (req, res) => {
  loginAdminUserController.handle(req, res);
});

export { adminRoute };
