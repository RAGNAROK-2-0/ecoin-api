import { Router } from "express";
import { ListAllStores,FavoriteStore } from "../modules/accounts/StoresRepository"

const storesRoutes = Router();

storesRoutes.put("/updateStore", FavoriteStore);
storesRoutes.get("/", ListAllStores);

export {storesRoutes}