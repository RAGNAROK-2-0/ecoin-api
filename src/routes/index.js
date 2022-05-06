import { Router } from "express";
import {usersRoutes} from './users.routes'
const router = Router();

// router.use("/categories", categoriesRoutes);
// router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
// router.use(autenticateRoutes);

export { router };