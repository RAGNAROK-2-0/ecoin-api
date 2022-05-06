import { Router } from "express";
import { CreateUser } from "../modules/accounts/repository/UsersRepository"

const usersRoutes = Router();

usersRoutes.post("/create", CreateUser);
// usersRoutes.post("/", list);

export {usersRoutes}