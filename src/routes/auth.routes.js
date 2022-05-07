import { Router } from "express";
import { Auth } from "../modules/accounts/repository/AuthRepository"

const authRoutes = Router();

authRoutes.post("/", Auth);

export { authRoutes }