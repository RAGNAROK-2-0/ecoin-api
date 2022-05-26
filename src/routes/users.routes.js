import { Router } from "express";
import { CreateUser,ListAllUsers,UpdateUser,UpdateUserByProperty } from "../modules/accounts/UsersRepository"

const usersRoutes = Router();

usersRoutes.post("/create", CreateUser);
usersRoutes.put("/update", UpdateUser);
usersRoutes.get("/", ListAllUsers);

export {usersRoutes}