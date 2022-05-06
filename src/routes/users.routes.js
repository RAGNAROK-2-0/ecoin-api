import { Router } from "express";
import { createUser,list } from "../modules/accounts/repository/UsersRepository"

const usersRoutes = Router();

usersRoutes.post("/create", createUser);
usersRoutes.get("/", list);

export {usersRoutes}