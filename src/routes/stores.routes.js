import { Router } from "express";
import { ListAllStores, FavoriteStore,CreateStore } from "../modules/accounts/StoresRepository"

const storesRoutes = Router();

storesRoutes.patch("/updateStore", FavoriteStore);
storesRoutes.get("/", ListAllStores);
storesRoutes.post("/create", CreateStore);

export {storesRoutes}