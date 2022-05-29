import { Router } from "express";
import { ListAllStores,FavoriteStore } from "../modules/accounts/StoresRepository"

const usersRoutes = Router();

usersRoutes.push("/updateStore", FavoriteStore);
usersRoutes.get("/", ListAllStores);

export {storesRoutes}