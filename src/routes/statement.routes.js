import { Router } from "express";
import { ListTransactions } from "../modules/accounts/StatementRepository"


const statementRouter = Router();

statementRouter.get("/", ListTransactions);

export { statementRouter }