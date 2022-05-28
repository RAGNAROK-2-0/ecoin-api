import { Router } from "express";
import { ListTransactions,DepositTransaction,WithDrawTransaction } from "../modules/accounts/StatementRepository"


const statementRouter = Router();

statementRouter.get("/", ListTransactions);
statementRouter.post("/deposit", DepositTransaction);
statementRouter.post("/withdraw", WithDrawTransaction);

export { statementRouter }