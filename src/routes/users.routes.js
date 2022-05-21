import { Router } from "express";
import { CreateUser,ListAllUsers } from "../modules/accounts/UsersRepository"

const usersRoutes = Router();

usersRoutes.post("/create", CreateUser);
usersRoutes.get("/", ListAllUsers);

export {usersRoutes}