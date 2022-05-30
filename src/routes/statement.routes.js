import { Router } from "express";
import { ListTransactions,DepositTransaction,WithDrawTransaction } from "../modules/accounts/StatementRepository"


const statementRouter = Router();

statementRouter.get("/:cpf", ListTransactions);
statementRouter.post("/deposit", DepositTransaction);
statementRouter.post("/withdraw", WithDrawTransaction);

export { statementRouter }