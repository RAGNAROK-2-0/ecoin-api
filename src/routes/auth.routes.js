import { Router } from "express";
import { Auth } from "../modules/accounts/AuthRepository"
import { verifyJWT } from "../modules/jwt/JwtRepository";

const authRoutes = Router();

authRoutes.post("/", Auth);

export { authRoutes }