import { findUserByCpf } from './UsersRepository'
import { Statement } from '../../database/Statement'

async function ListTransactions(req, res) {
    let { cpf } = req.body

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

async function CreateTransaction(req, res) {
    const { email, dt_nascimento, nome, senha, cpf } = req.body
    const user = { email, dt_nascimento, nome, senha, cpf }

    try {
        if (!email || !senha) {
            throw new Error('Usuario ou senha não informados!');
        }

        let cpfValid = TestaCPF(cpf)
        if (!cpfValid) {
            throw new Error('Cpf invalido!');
        }

        let UserExists = await findUserByCpf(cpf);

        if (UserExists) {
            throw new Error('Usuario já existe!');
        }

        await Statement.create(user);

        res.status(201).json({ message: "Cliente criado com sucesso!" })
    } catch (error) {
        const errorMessage = error.toString()
        res.status(400).json(errorMessage)
    }
}


async function findStatementUser(cpf) {
    const statement = await Statement.find({ cpf: cpf });

    return statement;
}


export { findStatementUser, ListTransactions }