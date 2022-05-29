import { Router } from "express";
import { ListAllStores } from "../modules/accounts/StoresRepository"

const usersRoutes = Router();

usersRoutes.get("/", ListAllStores);

export {storesRoutes}