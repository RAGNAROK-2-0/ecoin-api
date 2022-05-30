import { findUserByCpf } from './UsersRepository'
import { Statement } from '../../database/Statement'
import { TestaCPF } from '../validators/testCpf'

async function ListTransactions(req, res) {
    let { cpf } = req.params

    try {
        const userInfo = await findUserByCpf(cpf);

        if (!userInfo) {
            throw new Error('Usuario não encontrado!');
        }

        const StatementUser = await findStatementUser(userInfo.cpf);


        res.status(200).json({ statement: StatementUser, message: "Operação realizada com sucesso!" })
    } catch (error) {

        const errorMessage = error.toString()
        res.status(400).json(errorMessage)
    }
}

async function DepositTransaction(req, res) {
    const { title, description, amount, cpf } = req.body
    const transaction = { title, description, dateCreated: new Date(), type: 'deposit', amount: Math.abs(amount), cpf }

    try {
        if (!cpf) {
            throw new Error('Usuario ou cpf não informados!');
        }

        let cpfValid = TestaCPF(cpf)
        if (!cpfValid) {
            throw new Error('Cpf invalido!');
        }

        let UserExists = await findUserByCpf(cpf);

        if (!UserExists) {
            throw new Error('Usuario inexistente!');
        }

        await Statement.create(transaction);

        res.status(201).json({ message: "Operação realizada com sucesso!" });
    } catch (error) {
        const errorMessage = error.toString()
        res.status(400).json(errorMessage)
    }
}

async function WithDrawTransaction(req, res) {
    const { title, description, amount, cpf } = req.body
    const transaction = { title, description, dateCreated: new Date(), type: 'withdraw', amount: -Math.abs(amount) , cpf }

    try {
        if (!cpf) {
            throw new Error('Usuario ou cpf não informados!');
        }

        let cpfValid = TestaCPF(cpf)
        if (!cpfValid) {
            throw new Error('Cpf invalido!');
        }

        let UserExists = await findUserByCpf(cpf);

        if (!UserExists) {
            throw new Error('Usuario inexistente!');
        }

        await Statement.create(transaction);

        res.status(201).json({ message: "Operação realizada com sucesso!" });
    } catch (error) {
        const errorMessage = error.toString()
        res.status(400).json(errorMessage)
    }
}


async function findStatementUser(cpf) {
    const statement = await Statement.find({ cpf: cpf });

    return statement;
}


export { findStatementUser, ListTransactions, DepositTransaction, WithDrawTransaction }