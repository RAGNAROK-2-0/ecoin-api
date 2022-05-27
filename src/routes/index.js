import { Router } from "express";
import {usersRoutes} from './users.routes'
import {statementRouter} from './statement.routes'
import {authRoutes} from './auth.routes'
const router = Router();

// router.use("/categories", categoriesRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/statement", statementRouter);
// router.use(autenticateRoutes);

export { router };